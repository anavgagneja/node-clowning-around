/*var dest = {
	address: '16604 SE Fisher Dr. Vancouver, WA 98683 USA'
}*/
function getPos() {
	gm.info.getCurrentPosition(showDest, true)
	gm.ui.showAlert({
	  alertTitle: 'Your Location Has Been Reported',
	  alertDetail: 'stay alive',
	  primaryButtonText: 'x',
	  primaryAction: function fixBG() {
	  	document.body.style.backgroundImage= "none";
		document.getElementById('audio').pause();
	  },
	  secondaryButtonText: '',
	  secondaryAction: function hangWithYoko() {}
	})
	changeBG();
}

function changeBG() {
	document.body.style.backgroundImage = "url('http://cdn20.patchcdn.com/users/22896833/20160930/013212/styles/T600x450/public/article_images/clown-1475256632-9910.jpg')";
	document.getElementById('audio').play();
}



function showDest(position) {
	var location = position.coords.latitude + " " + position.coords.longitude;
	if(location !== undefined) {
		var locationText = document.getElementById('location');
		locationText.innerHTML = location;
	}
}