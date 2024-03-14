const burgir = document.querySelector(".burgir__menu")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    const baddest = document.querySelector(".header__nav")
    baddest.classList.toggle("open");
    
})



// const ways for js to declare variables 
// variable should be unique, understandable
// dapat walang natatawag na js syntax
//const *variable* = document .queryselector if only 1 time use and .queryselectorall if used multiple times (".burgir__menu") <-- class 
//document represents the whole proj folder
//summary: var burger is a proxy ni class .burger__menu 
//line 2 
// burgir is now a variable addeventlistener is a verb?? or action word na gagawin ng user... 
//. toggle has brohters add adds and remove
// 
