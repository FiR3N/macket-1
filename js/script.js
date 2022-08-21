const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const hamb = document.querySelector('#hamb');
const closeBut = document.querySelector('#closeBut');
const body = document.body;

const btnCall = document.querySelector('#btnCall').cloneNode(1);
const btnReservation = document.querySelector('#btnReservation').cloneNode(1);


hamb.addEventListener('click', hambHandler);
closeBut.addEventListener('click', closeButHandler);

function closeButHandler(e){
    e.preventDefault();
    popup.classList.toggle('_open')
}
function hambHandler(e){
    e.preventDefault();
    popup.classList.toggle('_open');
    hamb.classList.toggle('_active');
    body.classList.toggle('noscroll');
    renderPopup();
}

function renderPopup(){
    popup.appendChild(menu);
    popup.appendChild(btnCall);
    popup.appendChild(btnReservation);
}

// const boxes = Array.from(document.querySelectorAll('.product__group'));
// boxes.forEach((box) => {
//     box.addEventListener("click", boxHandler);
// })

// function boxHandler(e){
//     e.preventDefault();
//     let currentBox = e.target.closest('.product__group');
//     let currentContent = e.target.nextElementSibling;
//     currentBox.classList.toggle('_active');

//     if(currentBox.classList.contains("_active")){
//         currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
//     }
//     else{
//         currentContent.style.maxHeight = 0;
//     }
// }