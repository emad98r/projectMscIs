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


// added successfully -----------------

let addS_Btn = document.querySelectorAll(".addedS");
let addedS_output = document.querySelector(".addedS-output")
addS_Btn.forEach(e => {
  e.addEventListener('click', () => {
    showAlert();
    setTimeout(hideAlert, 2000)
  });
});
function showAlert() {
  addedS_output.style.cssText = `display:block;`
}
function hideAlert() {
  addedS_output.style.cssText = `display:none;`
}



// cart window --------------------
let cart_win = document.querySelector(".cart-win"),
  cart_cles_butn = document.querySelector(".cart-cles-butn"),
  openCart = document.querySelector("#openCart");

openCart.addEventListener("click", () => {
  cart_win.style.display = 'grid'
})
cart_cles_butn.addEventListener("click", () => {
  cart_win.style.display = 'none'
})


// added products to cart -------------
let products_added = document.querySelectorAll(".product-added")

products_added.forEach((e) => {
  e.style.display = 'none'
})

let p_1_c = document.querySelector('.p-1-c')
let p_2_c = document.querySelector('.p-2-c')
let p_3_c = document.querySelector('.p-3-c')
let p_4_c = document.querySelector('.p-4-c')
let p_5_c = document.querySelector('.p-5-c')
let p_6_c = document.querySelector('.p-6-c')
let p_7_c = document.querySelector('.p-7-c')
let p_8_c = document.querySelector('.p-8-c')
let p_9_c = document.querySelector('.p-9-c')
let p_10_c = document.querySelector('.p-10-c')
let p_11_c = document.querySelector('.p-11-c')
let p_12_c = document.querySelector('.p-12-c')
let p_13_c = document.querySelector('.p-13-c')
let p_14_c = document.querySelector('.p-14-c')
let p_15_c = document.querySelector('.p-15-c')
let p_16_c = document.querySelector('.p-16-c')
let p_17_c = document.querySelector('.p-17-c')
let p_18_c = document.querySelector('.p-18-c')
let p_19_c = document.querySelector('.p-19-c')
let p_20_c = document.querySelector('.p-20-c')
let p_21_c = document.querySelector('.p-21-c')
let p_22_c = document.querySelector('.p-22-c')
let p_23_c = document.querySelector('.p-23-c')

p_1_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(2)").style.display = 'flex'
})
document.querySelector(".product-added:nth-of-type(2) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(2)").style.display = 'none'
})


p_2_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(1)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(1) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(1)").style.display = 'none'
})


p_3_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(3)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(3) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(3)").style.display = 'none'
})


p_4_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(4)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(4) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(4)").style.display = 'none'
})

p_5_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(5)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(5) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(5)").style.display = 'none'
})

p_6_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(6)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(6) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(6)").style.display = 'none'
})

p_7_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(7)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(7) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(7)").style.display = 'none'
})


p_8_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(8)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(8) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(8)").style.display = 'none'
})

p_9_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(9)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(9) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(9)").style.display = 'none'
})


p_10_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(10)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(10) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(10)").style.display = 'none'
})


p_11_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(11)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(11) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(11)").style.display = 'none'
})


p_12_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(12)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(12) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(12)").style.display = 'none'
})


p_13_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(13)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(13) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(13)").style.display = 'none'
})


p_14_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(14)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(14) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(14)").style.display = 'none'
})


p_15_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(15)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(15) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(15)").style.display = 'none'
})


p_16_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(16)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(16) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(16)").style.display = 'none'
})


p_17_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(17)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(17) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(17)").style.display = 'none'
})


p_18_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(18)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(18) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(18)").style.display = 'none'
})


p_19_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(19)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(19) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(19)").style.display = 'none'
})


p_20_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(20)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(20) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(20)").style.display = 'none'
})


p_21_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(21)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(21) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(21)").style.display = 'none'
})


p_22_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(22)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(22) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(22)").style.display = 'none'
})


p_23_c.addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(23)").style.display = 'flex'

})
document.querySelector(".product-added:nth-of-type(23) .pord-cancel").addEventListener("click", () => {
  document.querySelector(".product-added:nth-of-type(23)").style.display = 'none'
})
