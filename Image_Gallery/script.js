document.addEventListener("DOMContentLoaded",function(){
    const img = document.querySelectorAll(".img");
    const model = document.querySelector(".model");
    const close = document.querySelector(".close");
    const modelimg=document.querySelector(".model-img");
    const modeltext=document.querySelector(".model-text");
    let index=0;
    const prevbtn=document.querySelector(".btn-prev");
    const nextbtn=document.querySelector(".btn-next");

    //Image Selection
    img.forEach((imgs, imgindex) => {
        imgs.addEventListener("click", function () {
            model.classList.add("active");
            index=imgindex;
            updateimage();
        });
    });

    //Update Images
    function updateimage(){
        const updatedimgs=img[index];
        modelimg.src = updatedimgs.querySelector("img").src;
        modeltext.textContent=updatedimgs.querySelector("span").textContent;
    }

    //close Button
    close.addEventListener("click", function () {
        model.classList.remove("active");
    });

    //Next Button
    nextbtn.addEventListener("click", function(){
        index=index+1 >= img.length ? 0 : index+1;
        updateimage()
    });

    //Previous Button
    prevbtn.addEventListener("click", function(){
        index=index-1 < 0 ? img.length - 1 : index-1;
        updateimage()
    });
});


