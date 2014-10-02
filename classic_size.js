var style = document.createElement('style');
style.appendChild(document.createTextNode('body.classic-size video{width:135px;height:100px}body.classic-size #video-preview{width:135px;height:100px}body.classic-size #padding{height:102px}body.classic-size li{height:100px}body.classic-size li p{height:83px}body.classic-size .debugger{bottom:25px;left:55px}body.classic-size #composer-message{margin-left:140px}')); 
document.head.appendChild(style);
document.body.className += ' classic-size';
var button = document.createElement('button');
button.id = 'change-size';
button.appendChild(document.createTextNode('Change Size'));
button.onclick = function(){
  if (document.body.className.indexOf('classic-size') > -1){
    document.body.className = document.body.className.replace('classic-size', '');
  }
  else {
    document.body.className += ' classic-size';
  }
};
document.getElementById('menu').appendChild(button);