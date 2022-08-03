// show & hide nav bar ----------
let navBar = document.querySelector("#navBar"),
  allCategoriesBtn = document.querySelector(".menu"),
  openBtn = document.querySelector("#openBtn"),
  ele_option = document.querySelector(".ele-option"),
  ele_option_list = document.querySelector(".ele-option ul");

allCategoriesBtn.addEventListener("click", () => {
  navBar.classList.toggle("active-nav")
})
ele_option.addEventListener("click", () => {
  ele_option_list.classList.toggle("active-nav")
  openBtn.classList.toggle("cancelBtn")
})



// section-4-----------------------------

let iphone_blue = document.querySelector("#iphone_blue"),
  iphone_gold = document.querySelector("#iphone_gold"),
  iphone_graphite = document.querySelector("#iphone_graphite"),
  iphone_green = document.querySelector("#iphone_green"),
  iphone_silver = document.querySelector("#iphone_silver");


let greenColor = document.querySelector("#greenColor"),
  silverColor = document.querySelector("#silverColor"),
  goldColor = document.querySelector("#goldColor"),
  graphiteColor = document.querySelector("#graphiteColor"),
  blueColor = document.querySelector("#blueColor");

let colors = document.querySelectorAll(".colors");
let offer_imgs = document.querySelectorAll(".offer-img img")

for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", (ele) => {
    colors.forEach(e => {
      e.classList.remove("active-select")
    })
    ele.currentTarget.classList.add("active-select")
  })
}

iphone_green.style.display = "block"
greenColor.classList.add("active-select")

greenColor.addEventListener("click", () => {
  offer_imgs.forEach(e => {
    e.style.display = 'none'
  })
  iphone_green.style.display = 'block'
})
silverColor.addEventListener("click", () => {
  offer_imgs.forEach(e => {
    e.style.display = 'none'
  })
  iphone_silver.style.display = 'block'
})
goldColor.addEventListener("click", () => {
  offer_imgs.forEach(e => {
    e.style.display = 'none'
  })
  iphone_gold.style.display = 'block'
})
graphiteColor.addEventListener("click", () => {
  offer_imgs.forEach(e => {
    e.style.display = 'none'
  })
  iphone_graphite.style.display = 'block'
})
blueColor.addEventListener("click", () => {
  offer_imgs.forEach(e => {
    e.style.display = 'none'
  })
  iphone_blue.style.display = 'block'
})


// ---------
let memory = document.querySelectorAll(".memory");
for (i = 0; i < memory.length; i++) {
  memory[i].addEventListener("click", (ele) => {
    memory.forEach(e => {
      e.classList.remove('active-select')
    })
    ele.currentTarget.classList.add("active-select")
  })
}



// register page --------------- 

let regPage = document.querySelector(".register"),
  regCancelBtn = document.querySelector("#regCancelBtn"),
  regBtn = document.querySelector("#regBtn");

regBtn.addEventListener("click", () => {
  regPage.style.display = 'flex'
})
regCancelBtn.addEventListener("click", () => {
  regPage.style.display = 'none'
})


// sign in ----------------------
let singInPage = document.querySelector(".sign-in"),
  singInCancelBtn = document.querySelector("#singInCancelBtn"),
  singInBtn = document.querySelector("#singInBtn");

singInBtn.addEventListener("click", () => {
  singInPage.style.display = 'flex'
})
singInCancelBtn.addEventListener("click", () => {
  singInPage.style.display = 'none'
})



// Animation ----------------------------
// let loadingPage = document.querySelector(".loading-page")
// window.addEventListener("load", () => {
//   loadingPage.style.display = 'none'
// })
