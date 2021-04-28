const hov = document.getElementById("changeColor");
const button = document.getElementById("countUp");
const count = document.getElementById("count");
const button = document.getElementById("countDown");
const entry1=document.getElementById("entry1");
const result1=document.getElementById("result1");
const entry2=document.getElementById("entry2");
const result2=document.getElementById("result2");
hov.addEventListener("mouseenter", 
    function()
    {hov.style.color = "white";
    hov.style.backgroundColor = "Coral";}
);
hov.addEventListener("mouseout", 
    function()
    {hov.style.color = "black";
    hov.style.backgroundColor = "pink";}
);

hov.addEventListener("click", 
    function()
    {hov.style.fontSize = "64px";}
);

button.addEventListener("click",
    function()
    {
        number=number+1;
        count.innerHTML=number;
    }
);
button.addEventListener("click",
    function()
    {
        number=number-1;
        count.innerHTML=number;
    }
);
entry.addEventListener("input")
    {
        result.innerHTML=this.value*10;
    }