console.log("It is working!");

const testimonials = [
    {
        text: "“Our nonprofit organization was in need of a website overhaul but had a limited budget. We found the perfect solution in the form of talented students from Fanshawe College. They not only created a visually stunning and user-friendly website but also understood our mission and incorporated it beautifully into the design. Their dedication to our cause was heartwarming, and we now have a website that effectively communicates our message to the world.”",
        author: "Emily Anderson, Executive Director of Helping Hands Foundation"
    },
    {
        text: "“Working with students from the Interactive Media Design program at Fanshawe College was a game-changer for us. Their fresh ideas and innovative approach breathed new life into our project. Not only did they meet our expectations, but they exceeded them. We now have a cutting-edge website that has significantly boosted our online presence and customer engagement. We couldn’t be happier!”",
        author: "Michael Davis, Creative Director at Spark Media Productions"
    },
    {
        text: "“When we decided to embark on an ambitious interactive app project, we turned to Fanshawe College’s Interactive Media Design students for their exceptional talents. They delivered not only an app that met our objectives but one that received accolades from our users. The combination of their technical skills and creative thinking turned our vision into a reality. Working with them has been a delightful experience, and we hope to continue collaborating on new projects.”",
        author: "Victoria Stratton, CEO of InnovateTech"
    },
    {
        text: "“We had a complex project that demanded cutting-edge interactive design skills. After collaborating with a graduate from this program, we were thoroughly impressed. Their dedication, attention to detail, and commitment to delivering high-quality work were truly remarkable. Thanks to their efforts, our project was a resounding success, and we look forward to future collaborations.”",
        author: "Harrison Thornton, Marketing Manager at Acme Creative Studios"
    },
];

let currentIndex = 0;

const testimonialText = document.querySelector(".testimonial-text"),
    testimonialAuthor = document.querySelector(".testimonial-author"),
    prevButton = document.getElementById("prevBtn"),
    nextButton = document.getElementById("nextBtn"),
    counterSquares = document.querySelectorAll(".counter-square");

function displayTestimonial(index) {
    const testimonial = testimonials[index];
    testimonialText.textContent = testimonial.text;
    testimonialAuthor.textContent = `- ${testimonial.author}`;

    // Update counter squares
    counterSquares.forEach((square, i) => {
        square.classList.toggle("active", i === index);
    });
}

displayTestimonial(currentIndex);

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    displayTestimonial(currentIndex);
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    displayTestimonial(currentIndex);
});



// card slider

const wrapper = document.querySelector(".wrapper"),
    carousel = document.querySelector(".carousel"),
    firstCardWidth = carousel.querySelector(".card-selected").offsetWidth,
    arrowBtns = document.querySelectorAll(".wrapper .icon"),
    carouselChildrens = [...carousel.children];

let isDragging = false, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if (carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));

// video

src = "https://player.vimeo.com/api/player.js"



