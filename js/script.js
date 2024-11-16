const testimonials = [
    {
        text: "I'm thrilled I found this nanny-finding website! It's user-friendly, safe, and offers numerous profiles with reviews. Now I can leave for work with peace of mind, knowing my child is in good hands. Thanks to the creators!",
        name: "Elisabeth",
        role: "Parent"
    },
    {
        text: "This website saved me so much time! I quickly found a trustworthy nanny that my children absolutely love. I highly recommend it to any parent.",
        name: "John",
        role: "Parent"
    },
    {
        text: "I struggled to find reliable child care until I came across this website. It has been a game changer for our family!",
        name: "Sarah",
        role: "Parent"
    }
];

let currentIndex = 0;

const opinionsElement = document.getElementById('opinions');
const authorNameElement = document.getElementById('author_name');

document.getElementById('btn_next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial();
});

document.getElementById('btn_back').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial();
});

function updateTestimonial() {
    const testimonial = testimonials[currentIndex];
    opinionsElement.innerText = testimonial.text;
    authorNameElement.innerHTML = `<p>${testimonial.name}</p><p>${testimonial.role}</p>`;
}
