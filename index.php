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
      <div>
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
      </div>
    </div>

  </body>

  <script>
    document.addEventListener('DOMContentLoaded', function(){

      let element = document.getElementById('rainContainer');

      let rainContainer = new Rain({

        parent: element

      })

      // Rain-bow (:
      //
      // let rainContainer = new Rain({
      //   container: container,
      //   onAdd: (el, index)=>{
      //     // el.innerHTML = index
      //     let T = 255
      //     let h = 180 + 60 * ( 1 + Math.sin( index / T * 2 * Math.PI ) ) / 2
      //     let s = 50 * Math.sin( 2 * index / T * 2 * Math.PI ) + 100
      //     el.style.backgroundColor = 'hsl( ' + h +', ' + s + '%, 50%)'
      //     setTimeout(()=>{
      //       el.classList.add('active')
      //     }, 200)
      //   }
      // });
      // loop()
      // function loop(){
      //   var randomBlock = document.createElement('div')
      //   rainContainer.add(randomBlock);
      //   randomBlock.style.height = (Math.random()*100+100) / 2 +'px'
      //   requestAnimationFrame(loop)
      // }

    });
  </script>
</html>
