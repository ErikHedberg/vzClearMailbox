chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
		var urlName = tab.url;
		if(urlName && urlName.match("https://mail.verizon.com/webmail/")){
			chrome.tabs.executeScript(tabId,{file:"vzButtonInjection.js"});
		};
	}
});
