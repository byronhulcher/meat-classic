document.body.className += ' classic-size';
if (!document.getElementById('meat-classic-css')){
  var style = document.createElement('style');
  style.id = "meat-classic-css";
  style.appendChild(document.createTextNode('body.classic-size video{width:135px;height:100px}body.classic-size #video-preview{width:135px;height:100px}body.classic-size #padding{height:102px}body.classic-size li{height:100px}body.classic-size li p{height:83px}body.classic-size .debugger{bottom:25px;left:55px}body.classic-size #composer-message{margin-left:140px}')); 
  document.head.appendChild(style);
}
if (!document.getElementById('change-size')){
  var button = document.createElement('button');
  button.id = 'change-size';
  button.appendChild(document.createTextNode('Change Size'));
  button.onclick = function(){
    if (document.body.className.indexOf('classic-size') > -1){
      document.body.className = document.body.className.replace(/classic-size/g, '');
    }
    else {
      document.body.className += ' classic-size';
    }
  };
  document.getElementById('menu').appendChild(button);
}
