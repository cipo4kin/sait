const projectsData = [
    {
        title: "ПМЭФ: новая площадка для обмена идеями и инновационных решений",
        description:
            "Застройка Петербургского международного экономического форума 2026. Продюсирование и реализация современных решений.",
        image: "материал к сайту/фотки/выставочные/4.webp",
        alt: "ПМЭФ 2026",
        date: "2026"
    },

    {
        title: "XX Международная выставка-ярмарка «Сокровища Севера. Мастера и художники России»",
        description:
            "Федеральный объект, объединяющий мастеров народного искусства и представителей регионов России.",
        image: "материал к сайту/фотки/выставочные/1.jpg",
        alt: "Сокровища Севера 2025",
        date: "28 апреля – 2 мая 2025"
    },

    {
        title: "Чемпионат розничных профессий",
        description:
            "Первый национальный чемпионат розничных профессий: застройка, продакшн, техническое обеспечение и деловая программа.",
        image: "материал к сайту/фотки/выставочные/2.webp",
        alt: "Чемпионат розничных профессий",
        date: "18–19 апреля 2025"
    },

    {
        title: "Международная выставка и конференция «НЕВА»",
        description:
            "Организация и техническое сопровождение стендов участников и деловой программы в рамках международной выставки.",
        image: "материал к сайту/фотки/выставочные/3.png",
        alt: "Международная выставка и конференция НЕВА",
        date: "19–22 сентября 2023"
    },

    {
        title: "Просветительский марафон «Знание.Наука»",
        description:
            "Организация трансфера и проживания более 1400 участников из 87 субъектов РФ, координация маршрутов и сопровождение делегаций.",
        image: "материал к сайту/фотки/выставочные/5.jpg",
        alt: "Просветительский марафон Знание.Наука",
        date: "30–31 октября 2025"
    }
];


const project = document.querySelector(".project");
const projectImage = document.querySelector(".project-image img");
const projectCounter = document.querySelector(".project-counter");
const projectTitle = document.querySelector(".project-content h3");
const projectDescription = document.querySelector(".project-content p");
const projectDate = document.querySelector(".project-date");

const projectPrev = document.querySelector(".project-arrow-prev");
const projectNext = document.querySelector(".project-arrow-next");

let currentProject = 0;


function updateProject() {

    const current = projectsData[currentProject];

    project.classList.add("is-changing");

    setTimeout(() => {

        projectImage.src = current.image;
        projectImage.alt = current.alt;

        projectCounter.textContent =
            `${String(currentProject + 1).padStart(2, "0")} / ${String(projectsData.length).padStart(2, "0")}`;

        projectTitle.textContent = current.title;
        projectDescription.textContent = current.description;
        projectDate.textContent = current.date;

        project.classList.remove("is-changing");

    }, 250);
}


function showPreviousProject() {

    currentProject--;

    if (currentProject < 0) {
        currentProject = projectsData.length - 1;
    }

    updateProject();
}


function showNextProject() {

    currentProject++;

    if (currentProject >= projectsData.length) {
        currentProject = 0;
    }

    updateProject();
}


projectPrev.addEventListener("click", showPreviousProject);
projectNext.addEventListener("click", showNextProject);
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu-close");
const menuLinks = document.querySelectorAll(".menu-nav a");

function openMenu() {
    menu.classList.add("active");
    burger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    menu.classList.remove("active");
    burger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

burger.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});