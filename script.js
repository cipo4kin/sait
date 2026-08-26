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