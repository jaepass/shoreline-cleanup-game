// Main Javascript


// Script for showing bins & trash items on start cleaning button click
const startBtn = document.getElementById("start-btn"),
    trashArea = document.getElementById("beach-area");

startBtn.addEventListener("click", function(){
    if (trashArea.style.display == 'none') {
    trashArea.style.display = 'block';
    } else {
    trashArea.style.display = 'none';
    }
}, false);


/****** TEST SCRIPT BY MICHAEL WHYTE
 
const $item = $('#glass1');
const $box = $('#box');

$item.on('dragstart', function(e){
    console.log(e);
});

$box.on('dragover', function(e){
    e.preventDefault();
});

$box.on('drop', function(e){
    e.preventDefault();
    $(this).append($item);
    console.log('dropped!!!');
});

TEST SCRIPT END ******/




// Defining items to interact with: the bins and the trash items
const organicItems = document.getElementById('organic');
const bins = document.getElementById('organic-bin');

//Listener for when items are being dragged
organicItems.addEventListener('dragstart', dragStart);
organicItems.addEventListener('dragend', dragEnd);

//Loop through bins and call drag events
for(let bin of Object.keys(bins)){
    bin.addEventListener('dragover', dragOver);
    bin.addEventListener('dragenter', dragEnter);
    bin.addEventListener('dragleave', dragLeave);
    bin.addEventListener('drop', dragDrop);
}

//Drag Functions
function dragStart(){
    console.log('start');
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd(){
    console.log('end');
    this.className = 'organic';
}

function dragOver(e){
    console.log('dragover');
    e.preventDefault();
}

function dragEnter(e){
    console.log('enter');
    e.preventDefault();
    this.className += ' hovered';
}


function dragLeave(){
    console.log('leave');
    this.className = 'bin';
}

function dragDrop(){
    console.log('drop');
    this.className = 'bin';
    this.append(items);
}


/************* OBJECT PROPERTY SCRIPT FOR GROUPING ITEMS *************/