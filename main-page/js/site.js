//Setting up element variables//
var nextButn = document.querySelector("#next");
var prevButn = document.querySelector("#prev");
var slide = document.querySelector("#container");
var pos = 0;




//Adding event listener for forward action//
nextButn.addEventListener("click", () => {
  console.log("Success")
  forwardSlide();
})

$(document).keydown(function(e){
    if (e.which == 39) {
      forwardSlide()
    }
});



//Adding event listener for backward action //
prevButn.addEventListener("click", () => {
  backwardSlide();
})

$(document).keydown(function(e){
    if (e.which == 37) {
      backwardSlide()
    }
});

//defining Translate function//
//Finding a way to make the Prev function an inverse//
//Ok so we know that we need a variable to store the distance of vw//
//and we must somehow be able to modify it in order to go back slides//
//The change must be in increments of 100

function forwardSlide () {
    slide.style.transform = (`translateX(${pos - 100}vw)`);
    pos -= 100;
}

function backwardSlide () {
    slide.style.transform = (`translateX(${pos + 100}vw)`);
    pos += 100;
}



// Future Stuff to do//
//Create card stacking animation//
//Transform to wheel so infinite sliding//
//Entrance title page 
