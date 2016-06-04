var currentTabURL;
var photoCount = 100;

chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    currentTabURL = tabs[0].url;
});

window.onload = function(){
	
function renderURL() {
	var host = currentTabURL.match(/^[\w-]+:\/{2,}\[?[\w\.:-]+\]?(?::[0-9]*)?/)[0];
	var rgx = "\\d{6,10}";
	var nutte_id = currentTabURL.match(rgx);
	
	for (;photoCount >= 1; photoCount--) {
		var list = document.getElementById('nuttes');
		var firstLi = list.getElementsByTagName('IMG')[0];
		var newListElem = document.createElement('img');
		if(photoCount < 10){
			newListElem.src = host + "/Fotos/Persons_200/" + nutte_id + "/" + "0" + photoCount + ".jpg";
		}
		else{
			newListElem.src = host +  "/Fotos/Persons_200/" + nutte_id + "/" + photoCount + ".jpg";
		}
		newListElem.width = 260;
		newListElem.height = 360;
		list.insertBefore(newListElem, firstLi);
	}
}
document.getElementById('showme').onclick = renderURL;
};