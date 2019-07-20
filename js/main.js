//function to show the respective description box..............
function show(buttonObject)
{   
    if (buttonObject.id==="door")
    {
        var box1 = document.getElementById("door-description");
        var box2 =document.getElementById("tablet-description");
        var box3=document.getElementById("price-description");
        var tabs=document.querySelectorAll(".tab");
        tabs[1].classList.remove("show-border");
        tabs[2].classList.remove("show-border");
        if(box1.style.display==="none")
        {
            box1.style.display="block";
            buttonObject.classList.add("show-border");
            box2.style.display="none";
            box3.style.display="none";
        }
    }
    else if(buttonObject.id==='tablet')
    {
        var box1 = document.getElementById("door-description");
        var box2 =document.getElementById("tablet-description");
        var box3=document.getElementById("price-description");
        var tabs=document.querySelectorAll(".tab");
        tabs[0].classList.remove("show-border");
        tabs[2].classList.remove("show-border");
        
        if(box2.style.display==="none")
        {
            box1.style.display="none";
            buttonObject.classList.add("show-border");
            box2.style.display="block";
            box3.style.display="none";
        }
    } 
    else if(buttonObject.id==='price')
    {
        var box1 = document.getElementById("door-description");
        var box2 =document.getElementById("tablet-description");
        var box3=document.getElementById("price-description");
        var tabs=document.querySelectorAll(".tab");
        tabs[0].classList.remove("show-border");
        tabs[1].classList.remove("show-border");
        if(box3.style.display==="none")
        {
            box1.style.display="none";
            box2.style.display="none";
            buttonObject.classList.add("show-border");
            box3.style.display="block";
        }
    }
}