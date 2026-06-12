const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const sliders = player.querySelectorAll(".player__slider");
const skipButtons = player.querySelectorAll("[data-skip]");

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

progress.addEventListener("click", scrub);



































