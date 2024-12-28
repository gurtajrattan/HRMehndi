const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];



productContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');


// select all 'q' elements
for(let i = 0; i < q.length; i++) {
    q[i].addEventListener('click', () =>{
        // open the a element with the same i as the clicked 'q' element
        a[i].classList.toggle('a-opened');

        arr[i].classList.toggle('arrow-rotated')
    });
}

