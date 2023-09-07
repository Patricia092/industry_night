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








