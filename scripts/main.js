// Main Javascript

//Fade out opening screen
setTimeout(function(){
  $("#opening-screen").fadeOut(400);
}, 5000);

// Script for showing bins & trash items on start cleaning button click
const startBtn = document.getElementById("start-btn"),
      trashArea = document.getElementById("beach-area"),
      trashAreaStyles = window.getComputedStyle(trashArea);

    // para.textContent = 'My computed font-size is ' +
    //     compStyles.getPropertyValue('font-size') +
    //     ',\nand my computed line-height is ' +
    //     compStyles.getPropertyValue('line-height') +
    //     '.';



startBtn.addEventListener("click", function(){
 
    if (trashAreaStyles.getPropertyValue('display') === 'none') {
      trashArea.style.display = 'block';
    } else {
      trashArea.style.display = 'none';
    }
}, false);


//Game begins when user clicks "Start Cleaning"
$(document).ready(function(){
  
    // Variables for game interaction elements
    let score = 0;
    let numItemsDropped = 0;
    let numItems = $('.item').length;
    
    
    // Sound for when items are in correct and incorrect bins
    const correctSound = document.createElement('audio');
     correctSound.setAttribute('src', 'http://www.orangefreesounds.com/wp-content/uploads/2017/06/Ting-sound-effect.mp3');
    
    const errorSound = document.createElement('audio');
    errorSound.setAttribute('src', 'http://soundbible.com/mp3/Buzz-SoundBible.com-1790490578.mp3');
        
    
    // Make trash items draggable
    $('.item').draggable({
      revert: true
    });

    const randomItem = $(".item");
      for(let i = 0; i < randomItem.length; i++){
          let target = Math.floor(Math.random() * randomItem.length -1) + 1;
          let target2 = Math.floor(Math.random() * randomItem.length -1) +1;
          randomItem.eq(target).before(randomItem.eq(target2));
    }
    2
    // Make bin areas droppable
    // Only accepts items with class items of '.items'
    $('.bin').droppable({
      accept : '.item',
      drop : handleItemDrop
    });
    
    // function that handles the item being dropped
    function handleItemDrop(event, ui){
      
      // Variables for items and droparea
      let item = ui.draggable;
  
      let itemNumType = item.attr('data-numtype');
      
      let dropArea = $(this);
      
      let dropAreaNumType = dropArea.attr('data-area-numtype');
      
      // check if item number type matches number type of drop area
      if( itemNumType == dropAreaNumType){
        item.addClass('correct');
        correctSound.play();
        score++;
      }else{
        // num type does NOT match
        item.addClass('incorrect');
        errorSound.play();
      }
      // disable dragging
      item.draggable('disable').draggable('option', 'revert', false);
      numItemsDropped++;
      
      
      // console.log(score);
      $('#score').text(score); 
      
      // check if game has ended
      if(numItemsDropped == numItems){
        // game finished
        window.open('endgame.html', '_self', false);
        // alert("Game Finished!");
      }
    }
  });