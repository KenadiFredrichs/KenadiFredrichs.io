const hov = document.getElementById("changeColor");
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
hov.addEventListener("mouseclick", 
    function()
    {hov.style.fontSize = "64px";}
);