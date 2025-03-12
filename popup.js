document.getElementById("buttons").addEventListener("click", async (event) => {
    if (event.target.tagName === "BUTTON") {
        let speed = parseFloat(event.target.dataset.speed);

        // Get active YouTube tab
        let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (tab && tab.url.includes("youtube.com/watch")) {
            // Send speed change request to content script
            chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: changePlaybackSpeed,
                args: [speed]
            });
        } else {
            alert("Please open a YouTube video.");
        }
    }
});

// Function injected into YouTube page
function changePlaybackSpeed(speed) {
    let video = document.querySelector("video");
    if (video) {
        video.playbackRate = speed;
        console.log(`Playback speed set to ${speed}x`);
    } else {
        console.warn("No video element found.");
    }
}
