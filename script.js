let section =document.querySelector(".tow");
let span = document.querySelectorAll(".progress span");
window.onscroll = function(){
    if (window.scrollY >= section.offsetTop -100) {
        span.forEach((span) =>{
            span.style.width = span.dataset.width;
        }
        )
    }
}