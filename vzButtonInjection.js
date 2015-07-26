inboxViewIsActive = document.getElementById("INBOX_Emails") ? document.getElementById("INBOX_Emails").className == "active" : true;
if(!document.getElementById("deleteAll")) {
	divMain = document.createElement("div");
	divMain.setAttribute("id","deleteAll");
	divMain.setAttribute("class","CH MarL2 fl");
	divMain.setAttribute("title","Delete All");
	divMain.setAttribute("onClick","function deletePage() {if(document.getElementById('INBOX_Emails').className == 'active') {document.getElementById('selector').click();document.getElementById('delButton').click();document.getElementsByClassName('BtnRed')[2].click();}else{return;}}sleepTime = 500;numPages = parseInt(document.getElementsByClassName('bold fl')[1].firstChild.nodeValue);interval = setInterval(function() {deletePage()},sleepTime);setTimeout(function() {deb=false;clearInterval(interval)},sleepTime*(2*numPages));");

	divMain.innerHTML = "<div class='btnBgL fl'></div> <div class='btnBg fl' style='width: 80px'><b>Delete All</b></div> <div class='btnBgR fl'></div>";
	
	delButton = document.getElementById("delButton");
	
	if(delButton) {
		delButton.parentNode.appendChild(divMain);
	};
}else if(document.getElementById("deleteAll") && !inboxViewIsActive) {
	divMain = document.getElementById("deleteAll");
	divMain.parentNode.removeChild(divMain);
};