class Catalog {


    constructor() {
        this.plushies = 
        [
            { 
                img: "./media/img/poliwag.jpg",
                alt: "Poliwag",
                title: "Poliwag",
                price: "3,50 €"
            },
            { 
                img: "./media/img/totoro_lightblue.jpg",
                alt: "Totoro",
                title: "Totoro",
                price: "3,50 €",
                colors: ["lightblue", "gray"]
            },
            { 
                img: "./media/img/pikachu.jpg",
                alt: "Pikachu",
                title: "Pikachu",
                price: "3,50 €"
            },
            { 
                img: "./media/img/pokeball.jpg",
                alt: "Pokeball",
                title: "Pokeball",
                price: "3 €"
            },
            { 
                img: "./media/img/pato.jpg",
                alt: "Pato",
                title: "Pato",
                price: "3 €"
            },
            { 
                img: "./media/img/pulpo.jpg",
                alt: "Pulpo",
                title: "Pulpo",
                price: "3 €"
            },
            { 
                img: "./media/img/ballena_lightblue.jpg",
                alt: "Ballena",
                title: "Ballena",
                price: "3 €",
                colors: ["lightblue", "pink", "purple"]
            },
            { 
                img: "./media/img/seta_red.jpg",
                alt: "Seta",
                title: "Seta",
                price: "7 €",
                colors: ["red", "blue"]
            }
        ]
        const container = document.querySelector(".container");
        
        this.plushies.forEach(e => {
            let section = this.createSection(e);
            container.append(section);
        });
        
    }

    createSection(element) {
        var section = document.createElement("section");
        var img = document.createElement("img");
        var title = document.createElement("h3");
        var price = document.createElement("p");
        if(element.colors){

            var buttonContainer = document.createElement("div");
            buttonContainer.className = "buttonContainer";
            
            for(let i = 0; i < element.colors.length; i++) {
                buttonContainer.append(this.createColorButton(element.colors[i], img));
            }
            
        }
        title.innerText = element.title;
        img.src = element.img;
        img.alt = element.alt;
        price.innerText = element.price;

        section.append(img);
        section.append(title);
        if(element.colors)
            section.append(buttonContainer);
        section.append(price);
    
        return section;
    }

    createColorButton(color, img) {
        var button = document.createElement("input");
        button.type = "button";
        button.dataset.color = color;
        button.style.backgroundColor = color;
        button.addEventListener("click", this.switchColor.bind(img, button));


        return button;
    }

    switchColor(button) {
        var plushyName = this.src.split("_")[0];
        this.src =  plushyName + "_" + button.dataset.color + ".jpg";

        // console.log("Button pressed");
    }
}

const clothes = new Catalog();