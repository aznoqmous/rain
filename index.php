<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>rain</title>
    <script src="dist/main.js"></script>
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
      .rain-container{
        display: flex;
        width: 100%;
        padding: 10px;
        padding-right: 0px;
      }
      .rain-container .rain-column{
        height: 100%;
        padding-right: 10px;
      }
      .rain-container[data-col="20"] .rain-column{ width: 5%; }
      .rain-container[data-col="10"] .rain-column{ width: 10%; }
      .rain-container[data-col="9"] .rain-column{ width: 11%; }
      .rain-container[data-col="8"] .rain-column{ width: 12%; }
      .rain-container[data-col="7"] .rain-column{ width: 13%; }
      .rain-container[data-col="6"] .rain-column{ width: 16%; }
      .rain-container[data-col="5"] .rain-column{ width: 20%; }
      .rain-container[data-col="4"] .rain-column{ width: 25%; }
      .rain-container[data-col="3"] .rain-column{ width: 33.33%; }
      .rain-container[data-col="2"] .rain-column{ width: 50%; }
      .rain-container[data-col="1"] .rain-column{ width: 100%; }

      .rain-container .rain-column > * {
        display: block;
        width: 100%;
        border: 1px solid rgba(0,0,0,0.2);
        border-radius: 5px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.3);
        background: white;
        padding: 10px;
        padding-bottom: 20px;
        margin-bottom: 10px;
      }
    </style>
  </head>
  <body>
    <div class="rain-container" data-col="3" data-lg-col="3" data-md-col="3" data-sm-col="2" data-xs-col="1">
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

      let element = document.getElementsByClassName('rain-container')[0];
      let rainContainer = new Rain({
        parent: element
      })
      // Rain-bow (:
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
