var text = document.getElementById("inputText");
var btn = document.getElementById("copyText");
btn.onclick = function() {
  text.select();    
  document.execCommand("copy");
}