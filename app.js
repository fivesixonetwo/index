const yourDate = new Date("2023-10-31T16:10:26"),
music = ['infinity'];

document.addEventListener('DOMContentLoaded', function(){
      // var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      //   var source = audioCtx.createBufferSource();
      //   var xhr = new XMLHttpRequest();
      //   xhr.open('GET', 'music/infinity.mp3');
      //   xhr.responseType = 'arraybuffer';
      //   xhr.addEventListener('load', function (r) {
      //       audioCtx.decodeAudioData(
      //               xhr.response, 
      //               function (buffer) {
      //                   source.buffer = buffer;
      //                   source.connect(audioCtx.destination);
      //                   source.loop = false;
      //               });
      //       source.start(0);
      //   });
      //   xhr.send();

      var rootTime = document.querySelector("time");

      document.querySelector("anni").textContent = `${(yourDate.getDate()>9)?yourDate.getDate():"0"+yourDate.getDate()}-${(yourDate.getMonth()>8)?(yourDate.getMonth()+1):"0"+(yourDate.getMonth()+1)}-${yourDate.getFullYear()}`;
      
      document.querySelector("date").textContent = Math.floor( Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24)+" DAYS";

      function olock() {
            var today = new Date(),
            hrs = (Math.floor( Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor( Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec =  Math.floor((today - yourDate) / 1000) % 60;
            rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
      } olock();
      var timer = setInterval(function(){olock()}, 1000);
      document.querySelector(".source").setAttribute("src", `music/${music[Math.floor(Math.random()*music.length)]}.mp3`);

      document.getElementsByTagName("body")[0].insertAdjacentHTML(
            "beforeend",
            "<div id='mask'></div>"
      );

}, false);