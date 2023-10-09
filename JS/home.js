/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                   news                                                                | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const newsPics = document.querySelector(".newsPics");
const newsPicsLis = document.querySelectorAll(".newsPics ul li");
let indexSlider = 0;
let timerSlider;

// 輪播圖自動放映
function StartSlider() {
  timerSlider = setInterval(function(){
    indexSlider++;
    document.querySelector(".newsPics .activeLi").classList.remove("activeLi");
    document.querySelector(`.newsPics ul li:nth-child(${indexSlider})`).classList.add("activeLi");
    newsPics.style.backgroundImage = `url("../images/slider/slider${indexSlider}.jpg")`;
    if(indexSlider === 4) {
      indexSlider = 0;
    }
  }, 1000);
}

StartSlider();

newsPics.addEventListener("mouseenter", function(e) {
  clearInterval(timerSlider);
});

newsPics.addEventListener("mouseleave", function(e) {
  StartSlider();
});

// 手動點擊輪播圖
for(let index = 0; index < newsPicsLis.length; index++) {
  newsPicsLis[index].addEventListener("click", function(e) {
    document.querySelector(".newsPics .activeLi").classList.remove("activeLi");
    document.querySelector(`.newsPics ul li:nth-child(${index+1})`).classList.add("activeLi");
    newsPics.style.backgroundImage = `url("../images/slider/slider${index+1}.jpg")`;
  });
}

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                   city                                                                | */
/* ------------------------------------------------------------------------------------------------------------------------- */