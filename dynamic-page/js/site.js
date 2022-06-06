var forward = $("#forward");
var backward = $("#backward");
var flexbox = document.querySelector(".flexbox");
var icon = $("#icon");

forward.click(
    () => {
        //First slide movement init=0//
        flexbox.style.transform = `translateX(-300vw)`;
        
        document.querySelector("#begin-tree").style.transform = `translateX(-300vw)`;
        document.querySelector(".tree1").style.transform = `translateX(-205vw)`;
        //second init=100//
        document.querySelector(".tree2").style.transform = `translateX(-105vw)`;
        document.querySelector(".tree7").style.transform = `translateX(-140vw)`;
        document.querySelector(".shape3").style.transform = `translateX(-140vw)`;
        document.querySelector(".shape4").style.transform = `translateX(-180vw)`;
        //third init=200//
        document.querySelector(".tree3").style.transform = `translateX(-5vw)`;
        document.querySelector(".tree5").style.transform = `translateX(-80vw)`;
        document.querySelector(".tree6").style.transform = `translateX(-20vw)`;
        document.querySelector(".tree8").style.transform = `translateX(-50vw)`;
        //fourth init=300//
        document.querySelector("#end-tree").style.transform = `translateX(60vw)`;
        document.querySelector(".tree4").style.transform = `translateX(95vw)`;
    }
)

backward.click(
  () => {
      //First slide movement init=0//
      flexbox.style.transform = `translateX(0vw)`;
      
      document.querySelector("#begin-tree").style.transform = `translateX(0vw)`;
      document.querySelector(".tree1").style.transform = `translateX(95vw)`;
      //second init=100//
      document.querySelector(".tree2").style.transform = `translateX(195vw)`;
      document.querySelector(".tree7").style.transform = `translateX(160vw)`;
      document.querySelector(".shape3").style.transform = `translateX(160vw)`;
      document.querySelector(".shape4").style.transform = `translateX(120vw)`;
      //third init=200//
      document.querySelector(".tree3").style.transform = `translateX(295vw)`;
      document.querySelector(".tree5").style.transform = `translateX(220vw)`;
      document.querySelector(".tree6").style.transform = `translateX(280vw)`;
      document.querySelector(".tree8").style.transform = `translateX(250vw)`;
      //fourth init=300//
      document.querySelector("#end-tree").style.transform = `translateX(360vw)`;
      document.querySelector(".tree4").style.transform = `translateX(395vw)`;
  }
)

icon.click(
    () => {
        $(".menu").addClass("menu-active")
        .removeClass("menu");
    }
)

//Plsleemem rest//

  const image_input = document.querySelector("#image_input");
  var uploaded_image = "";


  image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("#first-photo").src = uploaded_image;
    })
    reader.readAsDataURL(this.files[0]);
  })



//photo2 button
  const image_input2 = document.querySelector("#image_input2");
  var uploaded_image2 = "";


  image_input2.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image2 = reader.result;
      document.querySelector("#photo2").src = uploaded_image2;
    })
    reader.readAsDataURL(this.files[0]);
  })



  
  //photo3 button
  const image_input3 = document.querySelector("#image_input3");
  var uploaded_image3 = "";


  image_input3.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image3 = reader.result;
      document.querySelector("#photo3").src = uploaded_image3;
    })
    reader.readAsDataURL(this.files[0]);
  })


  //photo4 button
  const image_input4 = document.querySelector("#image_input4");
  var uploaded_image4 = "";


  image_input4.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image4 = reader.result;
    document.querySelector("#photo4").src = uploaded_image4;
  })
  reader.readAsDataURL(this.files[0]);
  })


//photo5 button
const image_input5 = document.querySelector("#image_input2");
var uploaded_image2 = "";


image_input2.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image2 = reader.result;
    document.querySelector("#photo5").src = uploaded_image2;
  })
  reader.readAsDataURL(this.files[0]);
})



//photo6 button
const image_input6 = document.querySelector("#image_input3");
var uploaded_image3 = "";


image_input3.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image3 = reader.result;
    document.querySelector("#photo6").src = uploaded_image3;
  })
  reader.readAsDataURL(this.files[0]);
})



//photo7 button
const image_input7 = document.querySelector("#image_input4");
var uploaded_image4 = "";


image_input4.addEventListener("change", function(){
const reader = new FileReader();
reader.addEventListener("load", () => {
  uploaded_image4 = reader.result;
  document.querySelector("#photo7").src = uploaded_image4;
})
reader.readAsDataURL(this.files[0]);
})

const starEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far")

//Adding Click event//
starEl.forEach((starEl, index) => {
  starEl.addEventListener("click", () => {
    console.log("clicked", index);
    updateRating(index)
  });
});
//Update rating//
function updateRating(index) {
  starEl.forEach((starEl,idx) => {
    if(idx < index + 1) {
      starEl.classList.add("active");
    }

    else{
      starEl.classList.remove("active");
    }
  });
  emojisEl.forEach(emojiEl => {
    emojiEl.style.transform = `translateX(-${index * 50 }px)`;
  })
}
