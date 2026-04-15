console.log("JS loaded")

function playVideo(id) {
	
	console.log("Clicked video:", id);
	
	document.getElementById("videoModal").style.display = "block";
	
	document.getElementById("modalvideo").src = "https://drive.google.com/file/d/" + id + "/preview";
}

function closevideo() {
	document.getElementById("videoModal").style.display = "none";
	
	document.getElementById("modalvideo").src = "";
}
