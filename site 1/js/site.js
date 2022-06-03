const image_input = document.querySelector("#image_input");
  var uploaded_image = "";


  image_input.addEventListener("change", function(){
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      uploaded_image = reader.result;
      document.querySelector("#photo1").src = uploaded_image;
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

//rating device//

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
