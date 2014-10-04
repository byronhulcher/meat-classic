document.body.className += ' classic';
if (!document.getElementById('classic-css')){
  var s = document.createElement('style');
  s.id = "classic-css";
  s.appendChild(document.createTextNode('.classic video{width:135px;height:100px}.classic #video-preview{width:135px;height:100px}.classic #padding{height:102px}.classic li{height:100px}.classic li p{height:83px}.classic .debugger{bottom:25px;left:55px}.classic #composer-message{margin-left:140px}.classic .timestamp{left:auto}')); 
  document.head.appendChild(s);
}
if (!document.getElementById('toggle-classic')){
  var b = document.createElement('button');
  b.id = 'toggle-classic';
  b.appendChild(document.createTextNode('Change Size'));
  b.onclick = function(){
    document.body.className = document.body.className.indexOf('classic') > -1 ? document.body.className.replace(/classic/g, '') : document.body.className += ' classic';
  };
  document.getElementById('menu').appendChild(b);
}