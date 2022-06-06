var icon = $("#icon");

icon.click(
    () => {
        $(".menu").addClass("menu-active")
        .removeClass("menu");
    }
)

//main image//
const image_input = document.querySelector("#image_input");
var uploaded_image = "";


image_input.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#main_image").src = uploaded_image;
  })
  reader.readAsDataURL(this.files[0]);
})

//portal//
const image_input2 = document.querySelector("#image_input2");
var uploaded_image2 = "";


image_input2.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image2 = reader.result;
    document.querySelector("#portal").src = uploaded_image2;
  })
  reader.readAsDataURL(this.files[0]);
})

//photo1//
const image_input3 = document.querySelector("#image_input3");
var uploaded_image3 = "";


image_input3.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image3 = reader.result;
    document.querySelector("#photo1").src = uploaded_image3;
  })
  reader.readAsDataURL(this.files[0]);
})

//photo2//
const image_input4 = document.querySelector("#image_input4");
var uploaded_image3 = "";


image_input4.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image3 = reader.result;
    document.querySelector("#photo2").src = uploaded_image3;
  })
  reader.readAsDataURL(this.files[0]);
})

//photo3//
const image_input5 = document.querySelector("#image_input5");
var uploaded_image3 = "";


image_input5.addEventListener("change", function(){
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image3 = reader.result;
    document.querySelector("#photo4").src = uploaded_image3;
  })
  reader.readAsDataURL(this.files[0]);
})