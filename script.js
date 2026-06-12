const video = document.querySelector(".player__video");
const progress = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const sliders = document.querySelectorAll(".player__slider");
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

// Skip
function skip() {
	video.currentTime += parseFloat(this.dataset.skip);
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

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);

video.addEventListener("timeupdate", handleProgress);

sliders.forEach(slider => {
	slider.addEventListener("input", handleRangeUpdate);
});

skipButtons.forEach(button => {
	button.addEventListener("click", skip);
});

rewind.addEventListener("click", () => {
	video.currentTime -= 10;
});

forward.addEventListener("click", () => {
	video.currentTime += 25;
});

volume.addEventListener("input", () => {
	video.volume = volume.value;
});

playbackSpeed.addEventListener("input", () => {
	video.playbackRate = playbackSpeed.value;
});


progress.addEventListener("click", scrub);



































