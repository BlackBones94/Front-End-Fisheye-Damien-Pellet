// fetch du json 

async function getPhotographers() {
    return fetch('./data/photographers.json')
        .then((response) =>
           response.json()
        )
        .catch(function(){
            console.log("Something not happened well")
        })
}

function getPhotographersId() {
    return new URL(location.href).searchParams.get("id")
}


(async function() {
    const id = getPhotographersId();
    console.log(id)
    const photographer = await getPhotographers(id)

    const heartIcone  = document.createElement('i');
    heartIcone.setAttribute('class', "fa-solid fa-heart");

    const paragrapheLikes = document.createElement('p');
    paragrapheLikes.setAttribute('class' , 'like-paragraphe');
    const photographerLikes = document.querySelector(".price-container").appendChild(paragrapheLikes);
    // document.querySelector('.price-container').appendChild(heartIcone)
    const paragraphePrice = document.createElement('p');
    paragraphePrice.setAttribute('class' , 'price-paragraphe');
    const photographerPrice = document.querySelector('.price-container').appendChild(paragraphePrice);

    let mediaPriceTable =[];
    let totalPrice = 0;

   


    photographer.photographers.forEach((photographer) => {
        if(photographer.id == id) {
            // recuperation et implentation du name dans la modal 
            const modal = document.getElementById("modalTitle");
            const div = document.createElement('div')
            modal.appendChild(div);
            div.innerHTML = photographer.name;

            this.imgData(photographer);
            this.playData(photographer);
            this.priceData(photographer);
            mediaPriceTable.push(photographer.price);
            totalPrice += photographer.price;
        }
        photographerPrice.innerHTML =`${totalPrice}`+ '€ / jour';
      
    })


    const photographerMedia = photographer.media.filter(media => media.photographerId == id);
    let mediaLikesTable = [];
    let totalLikes = 0;

    photographerMedia.forEach((photographerMedia)=> {
        this.displayMedia(photographerMedia);
        mediaLikesTable.push(photographerMedia.likes);
        totalLikes += photographerMedia.likes;
    })
    photographerLikes.innerHTML = `${totalLikes}`;

    console.log(heartIcone)
})();



    async function playData(photographer){
        console.log(photographer);
        const photographeHeader = document.querySelector(".photograph-header");

            const modelHeader = photographerFactory(photographer);
            const userCardHeader = modelHeader.getUserCardHeader(photographer);
            photographeHeader.appendChild(userCardHeader);
            return photographer;
        }        

    async function imgData(photographer){
        const headerImg = document.querySelector(".photograph-header");

        const modelImg = photographerFactory(photographer);
        const userImgHeader = modelImg.getUserImgHeader(photographer);
        headerImg.appendChild(userImgHeader);
        return photographer;
    }


// CREATION DE DIV POUR LE PHOTOBOOK

const photographerBook  = document.createElement('div');
photographerBook.className = 'photographer-book';

document.getElementById("main").appendChild(photographerBook);
//  FUNCTION POUR LES MEDIA
    
async function displayMedia(photographerMedia){
    const photographerBook = document.querySelector(".photographer-book");
    const photographerBookModel = PhotographerMediaFactory(photographerMedia);
    const UserCard = photographerBookModel.photographerBookDOM();
    photographerBook.appendChild(UserCard);
}

// creation d'une div pour le static price 

    const staticPrice = document.createElement('div');
    staticPrice.className= 'price-container';
    document.getElementById('main').appendChild(staticPrice);


 async function priceData(photographer){
    
    const staticPrice = document.querySelector('.price-container');
    const priceModel = priceLikesFactory(photographer);
    const priceCard = priceModel.priceModelDom();
    staticPrice.appendChild(priceCard);
 }

