function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    const next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        slider = document.querySelector(container),
        slides = document.querySelectorAll(slide),
        total = document.querySelector(totalCounter),
        current = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = document.querySelector(field),
        width = window.getComputedStyle(slidesWrapper).width;


    let slideIndex = 0,
        offset = 0;

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    if (slideIndex < 9) {
        current.textContent = `0${slideIndex+1}`;
    } else {
        current.textContent = slideIndex + 1;
    }

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach((slide) => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicators.append(dot);
        dots.push(dot);
    }

    function deleteLetters(word) {
        return +word.replace(/\D/g, '');
    }

    next.addEventListener('click', () => {
        if (offset == deleteLetters(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteLetters(width);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        if (slideIndex < 9) {
            current.textContent = `0${slideIndex+1}`;
        } else {
            current.textContent = slideIndex + 1;
        }

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex].style.opacity = 1;
    });

    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = deleteLetters(width) * (slides.length - 1);
        } else {
            offset -= deleteLetters(width);
        }


        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }

        if (slideIndex < 9) {
            current.textContent = `0${slideIndex+1}`;
        } else {
            current.textContent = slideIndex + 1;
        }

        dots.forEach(dot => dot.style.opacity = '0.5');
        dots[slideIndex].style.opacity = 1;
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo - 1;
            offset = deleteLetters(width) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex < 9) {
                current.textContent = `0${slideIndex+1}`;
            } else {
                current.textContent = slideIndex + 1;
            }

            dots.forEach(dot => dot.style.opacity = '0.5');
            dots[slideIndex].style.opacity = 1;
        });
    });
}

export default slider;