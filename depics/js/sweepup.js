function iOSversion() {
  if (/iP(hone|od|ad)/.test(navigator.platform)) {
    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
  }
  else {
  	return 0;
  }
}
ver = iOSversion();
var block = document.getElementById("version");
if (ver[0] >= 8) {
  block.setAttribute('style', "background-color:#dff");
  document.getElementById('version').innerHTML='<p>Your device <strong>is</strong> supported.</p>';
}
else {
  block.setAttribute('style', "background-color:#fdd");
  document.getElementById('version').innerHTML='<p>Your device <strong>is not</strong> supported.</p>';
}
