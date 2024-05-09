

var typed = new Typed (".multiple-text",{
    strings :["Developer","Artistic","Creator"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})
function Subscribe(){
    const JsElement = document.querySelector('.btn');
       if( JsElement.innerText === 'Download CV') {
           JsElement.innerHTML = 'Downloading...';
       } else {
       JsElement.innerHTML = 'Download CV';
   }
 }
