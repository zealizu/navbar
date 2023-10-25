// alert('CONNECTED')
const toggleBtn = document.querySelector('.nav-toggle');
let links = document.querySelector('.links');

toggleBtn.addEventListener('click', function(){
    links.classList.toggle('displayscr');
})