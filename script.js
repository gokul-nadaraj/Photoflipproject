const imagecontainerEl=document.querySelector
(".image_container")
const prevEl=document.getElementById("prev")
const NextEl=document.getElementById("next")

let x=0;
let timer;
prevEl.addEventListener("click", ()=>{
    x = x + 45;
    clearTimeout(timer)
    updateGallery()
});
NextEl.addEventListener("click", ()=>{
    x = x - 45;
    clearTimeout(timer)
    updateGallery()
});

function updateGallery(){
    imagecontainerEl.style.transform=
    `perspective(1000px) rotateY(${x}deg)`;
  timer=setTimeout(()=>{
        x = x - 45
        updateGallery()
    },2000)
}
updateGallery()