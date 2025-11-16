const tabButtons = document.querySelectorAll('.pd-tab');
const tabContents = document.querySelectorAll('.pd-tab-content');

tabButtons[0].classList.add('active');
tabContents[0].classList.add('active');

tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        tabContents[index].classList.add('active');
    });
});