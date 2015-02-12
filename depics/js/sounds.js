function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  else {
  	return 'X';
  }
}
ver = iOSversion();
var version = iOSversion();
if (ver[0] >= 8) {
	document.getElementById('version').innerHTML='<p>Your device <strong>is</strong> supported.</p>';
}
else {
	document.getElementById('version').innerHTML='<p>Your device <strong>may not</strong> be supported.</p><hr><p>This is currently untested on iOS '+ver[0]+'.  But you can test it and let me know!</p>';
}
