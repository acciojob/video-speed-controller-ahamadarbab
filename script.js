const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const rewind = document.querySelector('.rewind');
const forward = document.querySelector('.forward');
const volume = document.querySelector('.volume');
const playbackSpeed = document.querySelector('.playbackSpeed');

// Play/Pause
function togglePlay() {
	if(video.paused) {
		video.play();
	}
	else {
		video.pause();
	}
}

// Update play button
function updateButton() {
	toggle.textContent = video.paused ? '►' : '❚ ❚';
}



// Volume & Playback speed
function handleRangeUpdate() {
	video[this.name] = this.value;
}

// Progress Bar
function handleProgress() {
	const percent = (video.currentTime / video.duration) * 100;
	progressFilled.style.flexBasis = `${percent}%`;
}

// Scrub
function scrub(e) {
	const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = scrubTime;
}

toggle.addEventListener("click", togglePlay);

video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
video.addEventListener("timeupdate", handleProgress);

progress.addEventListener("click", scrub);

rewind.addEventListener("click", () => {
	video.currentTime -= 10;
});

forward.addEventListener("click", () => {
	video.currentTime += 25;
});

volume.addEventListener("input", handleRangeUpdate);

playbackSpeed.addEventListener("input", handleRangeUpdate);


// video.addEventListener("timeupdate", () => {
// 	const percent = (video.currentTime / video.duration) * 100;
// 	progressFilled.style.width = percent + '%';
// })



































