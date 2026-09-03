const furniture = {

    kitchens: [
        "материал к сайту/фотки/кухни/4.jpeg",
        "материал к сайту/фотки/кухни/9.jpeg",
        "материал к сайту/фотки/кухни/10.jpeg",
        "материал к сайту/фотки/кухни/13.jpeg"
    ],

    wardrobes: [
        "материал к сайту/фотки/шкафы/2.jpeg",
        "материал к сайту/фотки/шкафы/3.jpeg",
        "материал к сайту/фотки/шкафы/8.jpeg",
        "материал к сайту/фотки/шкафы/13.jpeg"
        
    
    ],

    tables: [
        "материал к сайту/фотки/столы/1.jpeg",
        "материал к сайту/фотки/столы/2.jpeg",
        "материал к сайту/фотки/столы/4.jpeg",
        "материал к сайту/фотки/столы/5.jpeg"
    ],

    beds: [
       "материал к сайту/фотки/кровати/3.jpeg",
       "материал к сайту/фотки/кровати/5.jpeg",
       "материал к сайту/фотки/кровати/9.jpeg",
       "материал к сайту/фотки/кровати/10.jpeg"
       
    

    ]

};
const categoryBlocks = document.querySelectorAll(".furniture-category");


categoryBlocks.forEach(block => {

    const button = block.querySelector(".category-button");
    const gallery = block.querySelector(".furniture-gallery");
    const icon = block.querySelector(".category-icon");

    const category = button.dataset.category;


    button.addEventListener("click", () => {

        const isOpen = block.classList.contains("open");


        if (isOpen) {

            block.classList.remove("open");

            icon.textContent = "+";

            gallery.innerHTML = "";

            return;

        }


        block.classList.add("open");

        icon.textContent = "−";


        furniture[category].forEach(image => {

            const img = document.createElement("img");

            img.src = image;
            img.alt = "Мебель производства ЛЕСЪТИМ";

            gallery.appendChild(img);

        });

    });

});


const revealElements = document.querySelectorAll(
    ".section-heading, .furniture-category, .project-item, .production, .contacts"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav a");


burger.addEventListener("click", () => {

    const isOpen = header.classList.toggle("nav-open");

    burger.setAttribute(
        "aria-label",
        isOpen ? "Закрыть меню" : "Открыть меню"
    );

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        header.classList.remove("nav-open");

        burger.setAttribute(
            "aria-label",
            "Открыть меню"
        );

    });

});
const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    const data = {
        name: formData.get("name"),
        phone: formData.get("phone"),
        comment: formData.get("comment")
    };

    const submitButton = contactForm.querySelector("button");

    submitButton.textContent = "Отправляем...";
    submitButton.disabled = true;

    try {
        const response = await fetch("http://127.0.0.1:8000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            window.location.href = "thanks.html";
        } else {
            submitButton.textContent = "Рассчитать стоимость";
            submitButton.disabled = false;

            alert("Не удалось отправить заявку");
        }

    } catch (error) {
        console.error(error);

        submitButton.textContent = "Рассчитать стоимость";
        submitButton.disabled = false;

        alert("Произошла ошибка при отправке заявки");
    }
});