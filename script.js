const hamIcon = document.querySelector('.ham-div');

hamIcon.addEventListener('click', () => {
    document.querySelector(".left-open").classList.toggle("display");
});