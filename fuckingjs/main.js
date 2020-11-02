$(document).ready(function(){


    let img = [
        'url("https://thumbs.gfycat.com/BleakNippyClingfish-small.gif")',

        'url("https://i.gifer.com/1JXs.gif")',

        'url("https://steamuserimages-a.akamaihd.net/ugc/857227184327551816/4FD85802BBA85A4E810892E3A0C44878FEACF539/")',

        'url("https://i.pinimg.com/originals/61/f0/de/61f0de8e63452614dcdc7c6aac3fa2ee.gif")',

        'url("https://cdna.artstation.com/p/assets/images/images/024/821/838/original/arthur-korotkikh-glitch.gif?1583653003")',

        'url("https://i.pinimg.com/originals/34/4d/c6/344dc6d2cf343907f2c69f32f3bd54b2.gif")',

        'url("https://uh8yh30l48rpize52xh0q1o6i-wpengine.netdna-ssl.com/wp-content/uploads/sites/2/2014/08/tumblr_n7nns1po1b1tddjl4o1_500.gif")',

        'url("https://i.pinimg.com/originals/93/23/71/9323715fd8278d43bc856b6272bcf891.gif")'
    ]
  
    let index = 0;


    setInterval(swapImg, 100);

    setInterval(addImg,5000);

  
    function swapImg(){
      let currentImg = img[Math.floor(Math.random()*img.length)];
  
      $('#box').css("background-image", currentImg);
  
      // increment index
      index++;
      console.log(index);
  
      if(index == img.length-1){
        index=0;
      }
  
    }
//add box and make them all have the same random gif thing happening

    function addImg(){
      
      let newBox =  '<div id="box"></div>'
      
      for(let i = 0; i < 1; i++){
        $('body').append(newBox);
      }
    }
    
    // it will add the boxes but will only do the gifs on the first one
 

   


})