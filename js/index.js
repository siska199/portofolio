//======Handle Change Navigation Item==========//
const navigationItems = document.querySelectorAll(".navigation__item")
navigationItems.forEach(navigationItem=>{
    navigationItem.addEventListener("click",function(e){
        const navigationItemActive = document.querySelector(".navigation__item.active")
        navigationItemActive.classList.remove('active')
        this.classList.add('active')
    })
})

// =========Handler Sticky Navabar ======
//For change navbar background while scroll
const navbar = document.getElementById("navbar");
const navItemContainer = document.querySelector(".navigation__container")

//For change navItem sctive class wwhile scroll
const articleAll = document.querySelectorAll("#content>article")

window.addEventListener('scroll',function handlerScrollWebsite() {
  if (window.pageYOffset >= 50) {
    navbar.classList.add("sroll__active")
    navItemContainer.classList.add("sroll__active")
  } else {
    navbar.classList.remove("sroll__active");
    navItemContainer.classList.remove("sroll__active")
  }

  articleAll.forEach((article,i)=>{
    if(window.pageYOffset>=article.offsetTop-120){
      const navigationItemActive = document.querySelector(".navigation__item.active")
      navigationItemActive.classList.remove('active')
      navigationItems[i].classList.add('active')
    }
  })
  
})


//====Handler Togle small menu====
const menuIcon = document.querySelector('.menu__icon')
const closeIcon = document.querySelector('.close__icon')
const navigationContainer = document.querySelector('.navigation__container')
//OpenMenu
menuIcon.addEventListener('click',function(){
    this.classList.remove('active')
    closeIcon.classList.add('active')
})
//CloseMenu
closeIcon.addEventListener('click',function(){
    this.classList.remove('active')
    menuIcon.classList.add('active')
})


// ===Handler for filter portofolio ==== //
const buttonsFilter = document.querySelectorAll(".filter_portfolio__container button")
const resultItemsFilter = document.querySelectorAll(".result_portofolio__container .container__card_portofolio")

buttonsFilter.forEach((button,i)=>{
  button.addEventListener('click',function(){
    //Button active
    const buttonsFilterActive = document.querySelector(".filter_portfolio__container button.active__filter_portofolio")
    buttonsFilterActive.classList.remove("active__filter_portofolio")
    this.classList.add("active__filter_portofolio")
    //Result show hide
    const category = this.getAttribute("data-filter")
    const resultItemsFilterActive = document.querySelectorAll(".result_portofolio__container .container__card_portofolio.show")
    resultItemsFilterActive.forEach(res=>res.classList.remove("show"))
    setTimeout(()=>{
      handlerResultPortofolio(category)
    },100)
  })
})


function handlerResultPortofolio(category){
  resultItemsFilter.forEach((res,i)=>{
    const catRes = res.getAttribute("data-category")
    if(category=="all"){
      res.classList.add("show")
    }else if(catRes==category){
      res.classList.add("show")
    }else{
      res.classList.add("hide")
    }
  })

}