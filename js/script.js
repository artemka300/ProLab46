const sled =document.querySelector('.slader_line');
const a1 =document.querySelector('.nexe');
const a2 =document.querySelector('.bax');
const a3 =document.querySelectorAll('.text');
let oiu = 0;
sled.style.width = `${a3.length*100}%;`
a1.addEventListener('click', () => {
    oiu += 1; 
    if (oiu >=a3.length) {
        oiu = 0;
    }
sled.style.left = -oiu + `00%`
})
a2.addEventListener('click', () => {
    oiu -= 1;
    if (oiu < 0) {
        oiu = a3.length-1;
    }
sled.style.left = -oiu + `00%`
})
setInterval(() => {
    oiu += 1; 
    if (oiu >=a3.length) {
        oiu = 0;
    }
sled.style.left = -oiu + `00%`
}, 4000);

const btn=document.querySelector('.btn');
const sге=document.querySelector('.textt');
btn.addEventListener('click',()=>{
    sге.classList.toggle('h300')
    console.log(sге)
})