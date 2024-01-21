let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carousolDom = document.querySelector('.carousol');
let itemListDom = document.querySelector('.carousol .list');
let thumbnailDom = document.querySelector('.carousol .thumbnail');

nextDom.onclick = function(){
    showSlider('next');
};
prevDom.onclick = function(){
    showSlider('prev');
};

function showSlider (type){
    let itemSlider = document.querySelectorAll('.carousol .list .item');
    let thumbnailSlider = document.querySelectorAll('.thu-item');
    if (type === 'next'){
        itemListDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(thumbnailSlider[0]);
        carousolDom.classList.add('next');
    } else{
        let backSlider = itemSlider.length-1
        itemListDom.prepend(itemSlider[backSlider]);
        thumbnailDom.prepend(thumbnailSlider[backSlider]);
        carousolDom.classList.add('prev');
    }
}