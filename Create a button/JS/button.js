
let count = 0;
const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    count++;
    btn.innerHTML = count;
})