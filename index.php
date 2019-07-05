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
      <div class="bleew">bleew</div>
      <div class="bleew">bleew</div>
      <div class="bleew">bleew</div>
      <div class="bleew">bleew</div>
      <div class="bleew">bleew</div>

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

      // let rainContainer = new Rain({
      //
      //   parent: element
      //
      // })

      // Rain-bow (:

      let rainContainer = new Rain({
        parent: element,
        // prepend: true,
        debug: true,
        childInterval: 200,
        // onAdd: (el, index)=>{
        //   // el.innerHTML = index
        //   let T = 255
        //   // let h = 180 + 60 * ( 1 + Math.sin( index / T * 2 * Math.PI ) ) / 2
        //   // let s = 50 * Math.sin( 2 * index / T * 2 * Math.PI ) + 100
        //   let h = 255 * ( 1 + Math.sin( index / T * 2 * Math.PI ) ) / 2
        //   // el.style.backgroundColor = 'hsl( ' + h +', ' + s + '%, 50%)'
        //   el.style.backgroundColor = 'hsl( ' + h +', 100%, 50%)'
        //   el.style.height = (Math.random()*200+10) / 2 +'px'
        //
        //   setTimeout(()=>{
        //     el.classList.add('active')
        //   }, 100)
        // }
      });

      // var start = Date.now();
      // loop()
      // function loop(){
      //   let randomBlock = rainContainer.add('<div class="blou"></div>')
      //   if(Date.now() - start < 2000) requestAnimationFrame(loop)
      // }

    });
  </script>
</html>
