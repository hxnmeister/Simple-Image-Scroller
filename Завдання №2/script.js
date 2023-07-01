const imagesPath = ["images/cplusplus-logo.png", "images/csharp-logo.png", "images/html-logo.png", "images/python-logo.png", ];
const img = document.getElementById("imagesBlock");
const nextButton = document.getElementById("rightDirection");
const prevButton = document.getElementById("leftDirection");
let currentImg = 0;

prevButton.classList.add("hide");
img.src = imagesPath[0];

const nextIcon = () =>
{
    if(currentImg < imagesPath.length - 1)
    {
        img.src = imagesPath[++currentImg];
        if(prevButton.classList.contains("hide")) 
        {
            prevButton.classList.remove("hide");
            prevButton.removeAttribute("disabled");
        }
    }
    
    if(currentImg === imagesPath.length - 1)
    {
        if(!nextButton.classList.contains("hide")) 
        {
            nextButton.classList.add("hide");
            nextButton.setAttribute("disabled","true");
        }
    }
}

const prevIcon = () => 
{
    if(currentImg > 0)
    {
        img.src = imagesPath[--currentImg];
        if(nextButton.classList.contains("hide")) 
        {
            nextButton.classList.remove("hide");
            nextButton.removeAttribute("disabled");
        }
    }
    
    if(currentImg === 0)
    {
        if(!prevButton.classList.contains("hide")) 
        {
            prevButton.classList.add("hide");
            prevButton.setAttribute("disabled", "true");
        }
    }
}

nextButton.addEventListener("click", nextIcon);
prevButton.addEventListener("click", prevIcon);