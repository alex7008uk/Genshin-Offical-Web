/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                   news                                                                | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const newsPics = document.querySelector(".newsPics");
// const newsPicsLis = document.querySelectorAll(".newsPics ul li");
const newsPicsUl = document.querySelector(".newsPics ul");
let indexSlider = 0;
let timerSlider;

// 輪播圖自動放映
function StartSlider() {
  timerSlider = setInterval(function(){
    if(indexSlider === 4) {
      indexSlider = 0;
    }
    indexSlider++;
    document.querySelector(".newsPics .activeLi").classList.remove("activeLi");
    document.querySelector(`.newsPics ul li:nth-child(${indexSlider})`).classList.add("activeLi");
    newsPics.style.backgroundImage = `url("../images/slider/slider${indexSlider}.jpg")`;
  }, 1000);
}

StartSlider();

newsPics.addEventListener("mouseenter", function(e) {
  clearInterval(timerSlider);
});

newsPics.addEventListener("mouseleave", function(e) {
  StartSlider();
});

newsPics.addEventListener("click", function(e) {
  switch(indexSlider) {
    case 1:
      window.open("https://www.youtube.com/watch?v=WaNJ20OY8Bs");
      break;
    case 2:
      window.open("https://www.youtube.com/watch?v=rFJOBl0MHts");
      break;
    case 3:
      window.open("https://www.youtube.com/watch?v=znHhRYBmfck");
      break;
    case 4:
      window.open("https://www.youtube.com/watch?v=L53gb0UK3V4");
      break;
    default:
      break;
  }
});

// 手動點擊輪播圖
// for(let index = 0; index < newsPicsLis.length; index++) {
//   newsPicsLis[index].addEventListener("click", function(e) {
//     document.querySelector(".newsPics .activeLi").classList.remove("activeLi");
//     document.querySelector(`.newsPics ul li:nth-child(${index+1})`).classList.add("activeLi");
//     newsPics.style.backgroundImage = `url("../images/slider/slider${index+1}.jpg")`;
//   });
// }

newsPicsUl.addEventListener("click", function(e) {
  if(e.target.tagName === "LI") {
    // 更新 indexSlider
    let index = e.target.id.match(/\d+/g);
    indexSlider = Number(index);

    // 更換輪播圖
    document.querySelector(".newsPics .activeLi").classList.remove("activeLi");
    e.target.classList.add("activeLi");
    newsPics.style.backgroundImage = `url("../images/slider/${e.target.id}.jpg")`;
  }
  // 阻止傳播(冒泡)
  e.stopPropagation();
});

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                   city                                                                | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const cityPs = document.querySelectorAll(".city p");

for(let index = 0; index < cityPs.length; index++) {
  cityPs[index].addEventListener("mouseenter", function() {
    document.querySelector(`.city li:nth-child(${index+1}) .characterImg`).style.opacity = 1;
    document.querySelector(`.city li:nth-child(${index+1}) .underline`).style.opacity = 1;
    document.querySelector(`.city li:nth-child(${index+1}) .cityBg`).style.transform = "translateZ(100px)";
    document.querySelector(`.city li:nth-child(${index+1})`).style.border = "5px solid white";
  });
  cityPs[index].addEventListener("mouseleave", function() {
    document.querySelector(`.city li:nth-child(${index+1}) .characterImg`).style.opacity = 0;
    document.querySelector(`.city li:nth-child(${index+1}) .underline`).style.opacity = 0;
    document.querySelector(`.city li:nth-child(${index+1}) .cityBg`).style.transform = "translateZ(0)";
    document.querySelector(`.city li:nth-child(${index+1})`).style.border = "none";
  });
}