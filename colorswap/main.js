$(document).ready(function(){
  //ethereum.autoRefreshOnNetworkChange = false;//

  let font = [
    "Arial",
    "Gill Sans",
    "Times New Roman",
    "Cochin",
    "Franklin Gothic Medium",
    "Impact",
    "Segoe UI",
    "Georgia"
  ]

  let index = 0;

  $('#font-swap').click(swapFont);
  setInterval(swapFont, 500);

  function swapFont(){
    let currentFont = font[index];

    $('#font-swap').css("font-family", currentFont);

    // increment index
    index++;
    console.log(index);

    if(index == font.length-1){
      index=0;
    }

  }

  


})



