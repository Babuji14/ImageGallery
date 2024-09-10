document.addEventListener("DOMContentLoaded",function(){
    const img=document.querySelectorAll(".img");
    const model=document.querySelector(".model");
    const close=document.querySelector(".close");
    let index=0;
    const modelImg=document.querySelector(".model-img");
    const modelText=document.querySelector(".model-text");
    const btnNext=document.querySelector(".btn-next");
    const btnPrev=document.querySelector(".btn-prev");

    img.forEach((imgs,i) =>{
        imgs.addEventListener("click",function(){
            model.classList.add("active");
            index=i;
            updateimages()
        });
    });

    close.addEventListener("click", function(){
        model.classList.remove("active");
    });

    function updateimages(){
        const updateimage=img[index];
        modelImg.src=updateimage.querySelector("img").src;
        modelText.textContent=updateimage.querySelector("span").textContent;
    }

    btnNext.addEventListener("click", function(){
        index=index+1 >=img.length ? 0 : index+1;
        updateimages();
    });

    btnPrev.addEventListener("click", function(){
        index=index-1 < 0 ? img.length :index-1;
        updateimages();
    });
});
