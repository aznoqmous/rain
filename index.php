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
      <div class="blou">onDone callback will add 5 elements when it triggers</div>
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
          el.style.height = (Math.random()*200+100) / 2 +'px'

          setTimeout(()=>{
            el.classList.add('active')
          }, 100)
        },
        onDone: ()=>{
          setTimeout(()=>{
            for (var i = 1; i <= 5; i++) {
              rainContainer.add(''+i)
            }
          }, 1000)
        }
      });




    });
  </script>
</html>
