
const text = "Full Stack Developer";

let index = 0;

function typeEffect() {

    if (index < text.length) {

        document.getElementById("typing-text").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 100);

    }

}

document.getElementById("typing-text").innerHTML = "";

typeEffect();

const modal = document.getElementById("projectModal");

function openModal(title, image, description, tech){

    document.getElementById("modalTitle").innerHTML = title;

    document.getElementById("modalImage").src = image;

    document.getElementById("modalDescription").innerHTML =
    description + "<br><br><span class='tech'>Technologies Used:</span><br>" + tech;

    modal.style.display = "flex";

}

function closeModal(){

    modal.style.display = "none";

}

// const modal = document.getElementById("projectModal");

// function openModal(title, image, description, tech){

//     document.getElementById("modalTitle").innerHTML = title;

//     document.getElementById("modalImage").src = image;

//     document.getElementById("modalDescription").innerHTML = +description;

//     document.getElementById("modalTech").innerHTML = tech;

//     modal.style.display = "flex";

// }

// function closeModal(){

//     modal.style.display = "none";

// }

// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});








const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill all fields.");

        return;

    }

    emailjs.send(
        "service_ifla0a3",
        "template_k8t3iym",
        {
            name: name,
            email: email,
            message: message
        }
    )

    .then(function () {

        alert("Message Sent Successfully!");

        contactForm.reset();

    })

    .catch(function (error) {

        alert("Failed to send message!");

        console.log(error);

    });

});








// ================= ACTIVE NAVBAR LINKS =================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});



// ================= SCROLL REVEAL EFFECT =================

const cards = document.querySelectorAll(

".skill-card, .project-card"

);

window.addEventListener("scroll", () => {

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 100) {

            card.classList.add("visible");

        }

    });

});