let sideBar = document.querySelector(".transit")

let iconBasket = document.querySelector("header .icons .icon-basket")

let iconClose = document.querySelector(".icon-close")

let overlay = document.querySelector(".overlay")



iconBasket.addEventListener("click",function(){
    sideBar.classList.remove("transit")
    overlay.classList.remove("d-none")
    
})

iconClose.addEventListener("click",function(){
    sideBar.classList.add("transit")
    overlay.classList.add("d-none")
})

overlay.addEventListener("click",function(){
    sideBar.classList.add("transit")
    overlay.classList.add("d-none")
})




let iconUser= document.querySelector(".icons .icon-user")

let userBlog =document.querySelector(".header-all .account-blog")

iconUser.addEventListener("click",function(){
    userBlog.classList.toggle("transform")
})



let openCases = document.querySelectorAll('.open-case')

for(let elem of openCases) {
    elem.onclick = function() {
        
        this.children[1].classList.toggle("transform")
    }
}

let cosmeticsText = document.querySelector("header .wish-list a:nth-child(1)") 

let cosmeticsAll = document.querySelector(".wish-list .cosmetics")

cosmeticsText.addEventListener("mouseover",function(){
cosmeticsAll.classList.add("transform")
})

cosmeticsText.addEventListener("mouseout",function(){
    cosmeticsAll.classList.remove("transform")
    })