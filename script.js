// const width=document.querySelector('.width');
// const container=document.getElementById('JS-cc');
// // .offsetWidth;

// // console.log(container.offsetWidth)
// container.addEventListener('click',function(){
//     width.textContent=container.offsetWidth;
// });

const button = document.querySelector('#menu-bar');
const menu = document.querySelector('.view-navbar');
const orderFood = document.querySelector('.order-food');
const navOrderFood = document.querySelector('.nav-order-food');


button.addEventListener('click',function () {
    button.classList.toggle('open');
    menu.classList.toggle('none');
})
orderFood.addEventListener('click', function () {
    alert('Oops! This site is just a demo version.'
        +'This feature is not available for now. ')
})
navOrderFood.addEventListener('click', function () {
    alert('Oops! This site is just a demo version.'
        +'This feature is not available for now. ')
})