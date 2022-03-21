const loader = document.querySelector('.loader');
const forek = document.querySelector('.forek')

function init()
{
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        window.location.href = "HTML/home.html";
    }, 5000);
}

init()