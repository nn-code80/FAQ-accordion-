const accordionTitles = document.querySelectorAll('.accordion-title')

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
const height = accordionTitle.nextElementSibling.scrollHeight;
accordionTitle.classList.toggle('active-header');
if (accordionTitle.classList.contains('active-header')){
accordionTitle.nextElementSibling.style.height = `${height}px`;
accordionTitle.nextElementSibling.style.opacity = '1';    
} else{
    accordionTitle.nextElementSibling.style.height = `0px`;
    accordionTitle.nextElementSibling.style.opacity = '0';
}
    })
})