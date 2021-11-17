var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate = video.playbackRate * .95;
	console.log("Speed: " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate = video.playbackRate / .95;
	console.log("Speed: " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time: " + video.currentTime);

	if (video.currentTime < video.duration - 15){
		video.currentTime += 15
	}
	else{
		video.currentTime = 0;
		console.log("Start over")
	}
	console.log("Current time: "+ video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == false){
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	var percentage = document.querySelector("#slider").value;
	video.volume = percentage/100;
	volume.innerHTML = (percentage + "%");
	console.log(video.volume);
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
	console.log("Original filter");
});


document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
	console.log("Old school filter");
});


