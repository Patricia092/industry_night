console.log("It is working!");

const testimonials = [
    {
        text: "“Our nonprofit organization was in need of a website overhaul but had a limited budget. We found the perfect solution in the form of talented students from Fanshawe College. They not only created a visually stunning and user-friendly website but also understood our mission and incorporated it beautifully into the design. Their dedication to our cause was heartwarming, and we now have a website that effectively communicates our message to the world.”",
        author: "Emily Anderson, Executive Director of Helping Hands Foundation"
    },
    {
        text: "Nec feugiat in fermentum posuere urna nec tincidunt. Vel fringilla est ullamcorper eget nulla. At quis risus sed vulputate odio ut enim blandit.",
        author: "Ultrices neque ornare"
    },
    {
        text: "Pulvinar elementum integer enim neque. Aliquet eget sit amet tellus cras adipiscing. Amet mauris commodo quis imperdiet massa tincidunt nunc. Donec ac odio tempor orci dapibus ultrices in iaculis nunc.",
        author: "Enim tortor at auctor"
    }
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
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
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





