<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>rain</title>
    <script src="dist/main.js"></script>
    <link rel="stylesheet" href="rain.css">
    <style media="screen">
      *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Arial;
      }
      body{
        background: #eee;
      }
    </style>
  </head>
  <body>

    <div id="rainContainer">
      <div class="blou">everything will be cleared in 2sec</div>
      <div class="blou">blou 2</div>
      <div class="blou">blou 3</div>
      <div class="blou">blou 4</div>
      <div class="blou">blou 5</div>

      <!-- <div>
        hey im a <br>
        simple div
      </div>
      <div>
        hey me too !
      </div>
      <div>
        hey <br>
        im <br>
        taller <br>
        so i break <br>
        divs order
      </div>
      <div>
        im the 5th div
      </div>
      <div>
        im the 6th div
      </div>
      <div>
        im the 7th div
      </div> -->
    </div>

  </body>

  <script>
    document.addEventListener('DOMContentLoaded', function(){

      let element = document.getElementById('rainContainer');

      let rainContainer = new Rain({
        parent: element,
        debug: true,
        childInterval: 200,
        onAdd: (el, index)=>{
          let T = 255
          let h = 255 * ( 1 + Math.sin( index / T * 2 * Math.PI ) ) / 2
          el.style.backgroundColor = 'hsl( ' + h +', 100%, 50%)'
          el.style.height = (Math.random()*200+10) / 2 +'px'

          setTimeout(()=>{
            el.classList.add('active')
          }, 100)
        }
      });
      for (var i = 0; i < 1000; i++) {
        rainContainer.add('<div class="blou">'+i+'</div>')
      }
      setTimeout(()=>{
        rainContainer.clear()
      }, 2000)


    });
  </script>
</html>
