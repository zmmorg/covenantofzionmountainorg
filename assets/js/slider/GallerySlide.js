const initSlider = () =>{
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".cur-ImageAutoSlider .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    //SLIDE BUTTON IN ACCORDANCE TO SLIDE CLICK
        slideButtons.forEach(button =>{
            button.addEventListener('click', ()=>{
                const direction = button.id === 'prev-slide' ? -1 : 1;
                const scrollAmount = imageList.clientWidth * direction;
                imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
            });
        });
        const handleSlideButtons = ()=> {
            slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
            slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        };
        //update scrollbar thumb position, based on image position
        const  updateScrollThumbPosition = () => {
            const scrollPosition = imageList.scrollLeft;
            const ThumbPosition = (scrollPosition / maxScrollLeft ) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth); 
            scrollbarThumb.style.left = `&{ThumbPosition}px`;
        };
        imageList.addEventListener('scroll', ()=>{
            handleSlideButtons();
            updateScrollThumbPosition();
        });
}
window.addEventListener("load", initSlider);