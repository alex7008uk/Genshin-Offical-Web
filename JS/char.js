/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                    citiesUl                                                           | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const citiesUl = document.querySelector(".cities");

citiesUl.addEventListener("click", function (e) {
  if (e.target.tagName === "LI" && e.target !== citiesUl.children[5]) {
    document.querySelector(".cityActive").classList.remove("cityActive");
    e.target.classList.add("cityActive");

    document.querySelector(".cityBgActive").classList.remove("cityBgActive");
    switch (e.target) {
      case citiesUl.children[0]:
        document.querySelector(".city1").classList.add("cityBgActive");
        break;
      case citiesUl.children[1]:
        document.querySelector(".city2").classList.add("cityBgActive");
        break;
      case citiesUl.children[2]:
        document.querySelector(".city3").classList.add("cityBgActive");
        break;
      case citiesUl.children[3]:
        document.querySelector(".city4").classList.add("cityBgActive");
        break;
      case citiesUl.children[4]:
        document.querySelector(".city5").classList.add("cityBgActive");
        break;
      default:
        break;
    }
  }
});

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                     city1                                                             | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const leftBtn1 = document.querySelector(".city1 .charLeftBtn");
const RightBtn1 = document.querySelector(".city1 .charRightBtn");
const chars1 = document.querySelectorAll(".city1 .charList li")
const charSelectList1 = document.querySelector(".city1 .charSelectList");
const charSelects1 = document.querySelectorAll(".city1 .charSelectList li");

let charIndex1 = 0;

leftBtn1.addEventListener("click", function () {
  charIndex1--;
  if (charIndex1 < 0) {
    charIndex1 = charSelects1.length - 1;
    let dis = charSelects1[charIndex1 - 5].offsetLeft - charSelects1[0].offsetLeft
    charSelectList1.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex1 === 0) {
    charSelectList1.style.transform = `translateX(0px)`;
  }
  else {
    let dis = charSelects1[charIndex1 + 1].offsetLeft - charSelects1[charIndex1].offsetLeft
    charSelectList1.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelector(".CardActive").classList.remove("CardActive");
  charSelects1[charIndex1].classList.add("CardActive");
  document.querySelector(".charActive").classList.remove("charActive");
  chars1[charIndex1].classList.add("charActive");
});

RightBtn1.addEventListener("click", function () {
  charIndex1++;
  if (charIndex1 === charSelects1.length) {
    charIndex1 = 0;
    let dis = charSelects1[0].offsetLeft
    charSelectList1.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex1 + 5 <= charSelects1.length) {
    let dis = charSelects1[charIndex1].offsetLeft - charSelects1[charIndex1 - 1].offsetLeft;
    charSelectList1.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelector(".CardActive").classList.remove("CardActive");
  charSelects1[charIndex1].classList.add("CardActive");
  document.querySelector(".charActive").classList.remove("charActive");
  chars1[charIndex1].classList.add("charActive");
});

for (let i = 0; i < charSelects1.length; i++) {
  charSelects1[i].addEventListener("click", function () {
    charIndex1 = i;
    document.querySelector(".CardActive").classList.remove("CardActive");
    charSelects1[charIndex1].classList.add("CardActive");
    document.querySelector(".charActive").classList.remove("charActive");
    chars1[charIndex1].classList.add("charActive");

    if (charIndex1 > 2) {
      let dis = charSelects1[charIndex1].offsetLeft - charSelects1[charIndex1 - 1].offsetLeft;
      charSelectList1.style.transform = `translateX(-${dis}px)`;
      console.log(charIndex1);
    }
    else {
      charSelectList1.style.transform = `translateX(0px)`;
    }
  });
}

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                     city2                                                             | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const leftBtn2 = document.querySelector(".city2 .charLeftBtn");
const RightBtn2 = document.querySelector(".city2 .charRightBtn");
const chars2 = document.querySelectorAll(".city2 .charList li")
const charSelectList2 = document.querySelector(".city2 .charSelectList");
const charSelects2 = document.querySelectorAll(".city2 .charSelectList li");

let charIndex2 = 0;

leftBtn2.addEventListener("click", function () {
  charIndex2--;
  if (charIndex2 < 0) {
    charIndex2 = charSelects2.length - 1;
    let dis = charSelects2[charIndex2 - 5].offsetLeft - charSelects2[0].offsetLeft
    charSelectList2.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex2 === 0) {
    charSelectList2.style.transform = `translateX(0px)`;
  }
  else {
    let dis = charSelects2[charIndex2 + 1].offsetLeft - charSelects2[charIndex2].offsetLeft
    charSelectList2.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[1].classList.remove("CardActive");
  charSelects2[charIndex2].classList.add("CardActive");
  document.querySelectorAll(".charActive")[1].classList.remove("charActive");
  chars2[charIndex2].classList.add("charActive");
});

RightBtn2.addEventListener("click", function () {
  charIndex2++;
  if (charIndex2 === charSelects2.length) {
    charIndex2 = 0;
    let dis = charSelects2[0].offsetLeft
    charSelectList2.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex2 + 5 <= charSelects2.length) {
    let dis = charSelects2[charIndex2].offsetLeft - charSelects2[charIndex2 - 1].offsetLeft;
    charSelectList2.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[1].classList.remove("CardActive");
  charSelects2[charIndex2].classList.add("CardActive");
  document.querySelectorAll(".charActive")[1].classList.remove("charActive");
  chars2[charIndex2].classList.add("charActive");
});

for (let i = 0; i < charSelects2.length; i++) {
  charSelects2[i].addEventListener("click", function () {
    charIndex2 = i;
    document.querySelectorAll(".CardActive")[1].classList.remove("CardActive");
    charSelects2[charIndex2].classList.add("CardActive");
    document.querySelectorAll(".charActive")[1].classList.remove("charActive");
    chars2[charIndex2].classList.add("charActive");

    if (charIndex2 > 2) {
      let dis = charSelects2[charIndex2].offsetLeft - charSelects2[charIndex2 - 1].offsetLeft;
      charSelectList2.style.transform = `translateX(-${dis}px)`;
      console.log(charIndex2);
    }
    else {
      charSelectList2.style.transform = `translateX(0px)`;
    }
  });
}

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                     city3                                                             | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const leftBtn3 = document.querySelector(".city3 .charLeftBtn");
const RightBtn3 = document.querySelector(".city3 .charRightBtn");
const chars3 = document.querySelectorAll(".city3 .charList li")
const charSelectList3 = document.querySelector(".city3 .charSelectList");
const charSelects3 = document.querySelectorAll(".city3 .charSelectList li");

let charIndex3 = 0;

leftBtn3.addEventListener("click", function () {
  charIndex3--;
  if (charIndex3 < 0) {
    charIndex3 = charSelects3.length - 1;
    let dis = charSelects3[charIndex3 - 5].offsetLeft - charSelects3[0].offsetLeft
    charSelectList3.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex3 === 0) {
    charSelectList3.style.transform = `translateX(0px)`;
  }
  else {
    let dis = charSelects3[charIndex3 + 1].offsetLeft - charSelects3[charIndex3].offsetLeft
    charSelectList3.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[2].classList.remove("CardActive");
  charSelects3[charIndex3].classList.add("CardActive");
  document.querySelectorAll(".charActive")[2].classList.remove("charActive");
  chars3[charIndex3].classList.add("charActive");
});

RightBtn3.addEventListener("click", function () {
  charIndex3++;
  if (charIndex3 === charSelects3.length) {
    charIndex3 = 0;
    let dis = charSelects3[0].offsetLeft
    charSelectList3.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex3 + 5 <= charSelects3.length) {
    let dis = charSelects3[charIndex3].offsetLeft - charSelects3[charIndex3 - 1].offsetLeft;
    charSelectList3.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[2].classList.remove("CardActive");
  charSelects3[charIndex3].classList.add("CardActive");
  document.querySelectorAll(".charActive")[2].classList.remove("charActive");
  chars3[charIndex3].classList.add("charActive");
});

for (let i = 0; i < charSelects3.length; i++) {
  charSelects3[i].addEventListener("click", function () {
    charIndex3 = i;
    document.querySelectorAll(".CardActive")[2].classList.remove("CardActive");
    charSelects3[charIndex3].classList.add("CardActive");
    document.querySelectorAll(".charActive")[2].classList.remove("charActive");
    chars3[charIndex3].classList.add("charActive");

    if (charIndex3 > 2) {
      let dis = charSelects3[charIndex3].offsetLeft - charSelects3[charIndex3 - 1].offsetLeft;
      charSelectList3.style.transform = `translateX(-${dis}px)`;
    }
    else {
      charSelectList3.style.transform = `translateX(0px)`;
    }
  });
}

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                     city4                                                             | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const leftBtn4 = document.querySelector(".city4 .charLeftBtn");
const RightBtn4 = document.querySelector(".city4 .charRightBtn");
const chars4 = document.querySelectorAll(".city4 .charList li")
const charSelectList4 = document.querySelector(".city4 .charSelectList");
const charSelects4 = document.querySelectorAll(".city4 .charSelectList li");

let charIndex4 = 0;

leftBtn4.addEventListener("click", function () {
  charIndex4--;
  if (charIndex4 < 0) {
    charIndex4 = charSelects4.length - 1;
    let dis = charSelects4[charIndex4 - 5].offsetLeft - charSelects4[0].offsetLeft
    charSelectList4.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex4 === 0) {
    charSelectList4.style.transform = `translateX(0px)`;
  }
  else {
    let dis = charSelects4[charIndex4 + 1].offsetLeft - charSelects4[charIndex4].offsetLeft
    charSelectList4.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[3].classList.remove("CardActive");
  charSelects4[charIndex4].classList.add("CardActive");
  document.querySelectorAll(".charActive")[3].classList.remove("charActive");
  chars4[charIndex4].classList.add("charActive");
});

RightBtn4.addEventListener("click", function () {
  charIndex4++;
  if (charIndex4 === charSelects4.length) {
    charIndex4 = 0;
    let dis = charSelects4[0].offsetLeft
    charSelectList4.style.transform = `translateX(-${dis}px)`;
  }
  else if (charIndex4 + 5 <= charSelects4.length) {
    let dis = charSelects4[charIndex4].offsetLeft - charSelects4[charIndex4 - 1].offsetLeft;
    charSelectList4.style.transform = `translateX(-${dis}px)`;
  }

  document.querySelectorAll(".CardActive")[3].classList.remove("CardActive");
  charSelects4[charIndex4].classList.add("CardActive");
  document.querySelectorAll(".charActive")[3].classList.remove("charActive");
  chars4[charIndex4].classList.add("charActive");
});

for (let i = 0; i < charSelects4.length; i++) {
  charSelects4[i].addEventListener("click", function () {
    charIndex4 = i;
    document.querySelectorAll(".CardActive")[3].classList.remove("CardActive");
    charSelects4[charIndex4].classList.add("CardActive");
    document.querySelectorAll(".charActive")[3].classList.remove("charActive");
    chars4[charIndex4].classList.add("charActive");

    if (charIndex4 > 2) {
      let dis = charSelects4[charIndex4].offsetLeft - charSelects4[charIndex4 - 1].offsetLeft;
      charSelectList4.style.transform = `translateX(-${dis}px)`;
    }
    else {
      charSelectList4.style.transform = `translateX(0px)`;
    }
  });
}

/* ------------------------------------------------------------------------------------------------------------------------- */
/* |                                                     city5                                                             | */
/* ------------------------------------------------------------------------------------------------------------------------- */

const chars5 = document.querySelectorAll(".city5 .charList li")
const charSelectList5 = document.querySelector(".city5 .charSelectList");
const charSelects5 = document.querySelectorAll(".city5 .charSelectList li");

let charIndex5 = 0;

for (let i = 0; i < charSelects5.length; i++) {
  charSelects5[i].addEventListener("click", function () {
    charIndex5 = i;
    document.querySelectorAll(".CardActive")[4].classList.remove("CardActive");
    charSelects5[charIndex5].classList.add("CardActive");
    document.querySelectorAll(".charActive")[4].classList.remove("charActive");
    chars5[charIndex5].classList.add("charActive");
  });
}