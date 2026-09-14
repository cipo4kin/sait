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

menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)

})
const furnitureData = [
    {
        title: "Кухни",
        description: "Изготавливаем кухни под особенности пространства и задачи проекта.",
        image: "материал к сайту/фотки/мебель/кухни/1.jpg",
        alt: "Кухни на заказ",
        link: "furniture/kitchens.html"
    },
    {
        title: "Шкафы",
        description: "Изготавливаем шкафы и системы хранения под размеры и особенности помещения.",
        image: "материал к сайту/фотки/мебель/шкафы/1.jpg",
        alt: "Шкафы на заказ",
        link: "furniture/waredrobes.html"
    },
    {
        title: "Столы",
        description: "Изготавливаем столы под интерьер, размеры и задачи пространства.",
        image: "материал к сайту/фотки/мебель/столы/1.jpg",
        alt: "Столы на заказ",
        link: "furniture/tables.html"
    },
    {
        title: "Кровати",
        description: "Изготавливаем кровати под размеры помещения и особенности проекта.",
        image: "материал к сайту/фотки/мебель/кровати/1.jpg",
        alt: "Кровати на заказ",
        link: "furniture/beds.html"
    }
];
const furnitureImage = document.querySelector(".furniture-image img");
const furnitureCounter = document.querySelector(".furniture-counter");
const furnitureTitle = document.querySelector(".furniture-content h3");
const furnitureDescription = document.querySelector(".furniture-content p");
const furnitureLink = document.querySelector(".furniture-link");
const furnitureSlide = document.querySelector(".furniture-slide");
const furniturePrev = document.querySelector(".furniture-arrow-prev");
const furnitureNext = document.querySelector(".furniture-arrow-next");
let currentFurniture = 0;
function updateFurniture() {
    const furniture = furnitureData[currentFurniture];

    furnitureSlide.classList.add("is-changing");

    setTimeout(() => {
        furnitureImage.src = furniture.image;
        furnitureImage.alt = furniture.alt;

        furnitureCounter.textContent =
            `${String(currentFurniture + 1).padStart(2, "0")} / ${String(furnitureData.length).padStart(2, "0")}`;

        furnitureTitle.textContent = furniture.title;
        furnitureDescription.textContent = furniture.description;
        furnitureLink.href = furniture.link;

        furnitureSlide.classList.remove("is-changing");
    }, 250);
}
function showPreviousFurniture() {
    currentFurniture--;

    if (currentFurniture < 0) {
        currentFurniture = furnitureData.length - 1;
    }
    updateFurniture();
}
function showNextFurniture() {
    currentFurniture++;

    if (currentFurniture >= furnitureData.length) {
        currentFurniture = 0;
    }

    updateFurniture();
}

furniturePrev.addEventListener("click", showPreviousFurniture);
furnitureNext.addEventListener("click", showNextFurniture);