// Wait for the YouTube page to load
window.addEventListener('load', () => {
    const video = document.querySelector("video");

    if (video) {
        // Create a container for the speed control buttons
        const controlPanel = document.createElement('div');
        controlPanel.style.position = 'absolute';
        controlPanel.style.padding = '10px';
        controlPanel.style.borderRadius = '8px';
        controlPanel.style.display = 'flex';
        controlPanel.style.gap = '10px';
        controlPanel.style.zIndex = '1000';
        controlPanel.style.color = 'white';
        
        // Create speed buttons
        const speeds = [0.5, 1, 1.25, 1.5, 1.75, 2, 2.5, 3];
        speeds.forEach((speed) => {
            const button = document.createElement('button');
            button.innerText = `${speed}x`;
            button.style.backgroundColor = 'transparent';
            button.style.color = 'white';
            button.style.border = '2px solid white';
            button.style.padding = '5px 10px';
            button.style.cursor = 'pointer';
            button.style.fontSize = '14px';
            button.style.borderRadius = '5px';
            button.addEventListener('click', () => changePlaybackSpeed(speed));
            controlPanel.appendChild(button);
        });

        // Position the control panel directly below the video element
        const videoRect = video.getBoundingClientRect();
        controlPanel.style.top = `${videoRect.bottom + window.scrollY}px`;  // position 10px below video
        controlPanel.style.left = `${videoRect.left + window.scrollX + (videoRect.width - controlPanel.offsetWidth) / 1.6}px`; // center it

        // Add the control panel to the page
        document.body.appendChild(controlPanel);
    } else {
        console.warn("No video element found.");
    }
});

// Function to change playback speed
function changePlaybackSpeed(speed) {
    const video = document.querySelector("video");
    if (video) {
        video.playbackRate = speed;
        console.log(`Playback speed set to ${speed}x`);
    }
}
