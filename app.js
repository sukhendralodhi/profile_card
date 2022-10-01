const toggleBtn = document.querySelector('#toggleBtn');
const headerMenu = document.querySelector('.header__menu');

toggleBtn.addEventListener('click', () => {
    if(headerMenu.style.display === 'block') {
        headerMenu.style.display = 'none';
    } else {
        headerMenu.style.display = 'block';
    }
})