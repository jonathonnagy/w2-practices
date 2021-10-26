
function fastLog(text) {
    console.log(text);
    return 'muhaha';
}

function buttonClicked(event) {
    console.log(event.target);
    event.target.classList.toggle('clicked');

    console.log(fastLog('ezt szeretnenk loggolni'))
}

function loadEvent() {
    console.log('the page has loaded');
    
    document.getElementById('menu-btn').addEventListener('click', buttonClicked);

}

window.addEventListener("load", loadEvent);

console.log(document.getElementById('menu-btn'))