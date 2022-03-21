function dating()
{

    var today = new Date();

    var hrs = today.getHours();
    if(hrs < 10)
    {
        hrs = "0"+hrs
    }
    var min = today.getMinutes();
    if(min < 10)
    {
        min = "0"+min
    }
    var sec = today.getSeconds();
    if(sec < 10)
    {
        sec = "0"+sec
    }

    document.getElementById("clock").innerHTML = hrs +":"+ min+":"+ sec;

    setTimeout("dating()", 1000);
}

function plus()
{
    document.getElementById("clock").style.fontSize = "720%";
    document.getElementById("clock").style.opacity = "100%";
    document.getElementById("clock").style.filter = "blur(0px)"
}

function norm()
{
    document.getElementById("clock").style.fontSize = "600%";
    document.getElementById("clock").style.opacity = "30%";
    document.getElementById("clock").style.filter = "blur(8px)";
}

function back()
{
    window.location.href ="home.html";
}
