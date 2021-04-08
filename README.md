# Discord-Soft-Block
Are you friends acting like retards and you temporarily don't want to see the stuff they post? Do you want to block people without having to hurt their feelings since they'd normally realize they've been blocked? Or do you simply hate seeing the "5 blocked messages" field that pokes your eyes out? If so, this script is for you.
This script lets you completely hide messages from users whose messages you don't want to see, and without them being able to know you did it. This action is also completely reversible, given that you will have to run this script every time discord starts in order to have the desired effects. If you want the effects to stop, simply restart discord.

In order to run the script, open discord and press **control + shift + I** to open the developer console. Copy the code down below, but edit it so that you put the userIDs of people you want to soft block instead of the placeholder "user1", "user2" etc. User IDs are obtainable by right clicking their name and clicking 'copy ID' when you are in [discord developer mode](https://discordia.me/en/developer-mode). Once you've edited the code, paste it into the console and press enter. Close the console once you're ready to go, and that's it.


```js
function hideUser(){
	var savedUser = "temp";	
	//User IDs obtainable by right clicking their name and clicking 'copy ID' when you are in discord developer mode
	var user = [
	  "user1",
	  "user2",
	  "etc"
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
setInterval(hideUser, 500); //how quickly the messages are removed

```
