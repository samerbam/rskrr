function checkBrowser() {
	var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	var isFirefox = typeof InstallTrigger !== 'undefined';
	var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
	var isIE = /*@cc_on!@*/false || !!document.documentMode;
	var isEdge = !isIE && !!window.StyleMedia;
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
	var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);
	var isBlink = (isChrome || isOpera) && !!window.CSS;
	
	var browserDict = {
		"Opera": isOpera,
		"Firefox": isFirefox,
		"Safari": isSafari,
		"IE": isIE,
		"Edge": isEdge,
		"Chrome": isChrome,
		"EdgeChromium": isEdgeChromium,
		"Blink": isBlink
	}
	return browserDict
}