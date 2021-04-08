function hideUser(){
	var savedUser = "temp";	
	//User IDs obtainable by right clicking their name and clicking 'copy ID' when you are in discord developer mode
	var user = [
	  "userID1",
	  "userID2",
	  "userID3..."
	];
	var arrayLength = user.length;
	for (var i = 0; i < arrayLength; i++) {
		const blocked = document.querySelectorAll('[class^="message-2qnXI6 cozyMessage-3V1Y8y');
		blocked.forEach(blokMsg => {
			if (typeof(blokMsg.getElementsByClassName("contents-2mQqc9")[0].getElementsByClassName("avatar-1BDn8e clickable-1bVtEA")[0]) == "object") {
				savedUser = blokMsg.getElementsByClassName("contents-2mQqc9")[0].getElementsByClassName("avatar-1BDn8e clickable-1bVtEA")[0].src;
				if (blokMsg.getElementsByClassName("contents-2mQqc9")[0].getElementsByClassName("avatar-1BDn8e clickable-1bVtEA")[0].src.includes("avatars")) {
					if (blokMsg.getElementsByClassName("contents-2mQqc9")[0].getElementsByClassName("avatar-1BDn8e clickable-1bVtEA")[0].src.includes(user[i])) {
						if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message
					}
				}
			} else {
				if (typeof(savedUser) == "string") { 
					if (savedUser.includes(user[i])) {
						if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message
					}
				}
			}
		});	
		const avatar = document.querySelectorAll('[class^="member-3-YXUe container-2Pjhx- clickable-1JJAn8');
		avatar.forEach(avatarBlock => {
			if (typeof(avatarBlock.getElementsByClassName("layout-2DM8Md")[0].getElementsByClassName("avatar-3uk_u9")[0]) == "object") {
			if (typeof(avatarBlock.getElementsByClassName("layout-2DM8Md")[0].getElementsByClassName("avatar-3uk_u9")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild) == "object") {
				if (avatarBlock.getElementsByClassName("layout-2DM8Md")[0].getElementsByClassName("avatar-3uk_u9")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.src.includes("avatars")) {
					if (avatarBlock.getElementsByClassName("layout-2DM8Md")[0].getElementsByClassName("avatar-3uk_u9")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild.src.includes(user[i])) {
						if(avatarBlock.style.display !== "none") avatarBlock.style.display = "none"; // Hide the avatar from the user list
					}
				}
			} 
		}
		});
	}
};
setInterval(hideUser, 500); 
