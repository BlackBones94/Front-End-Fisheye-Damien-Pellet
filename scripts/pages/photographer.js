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

    const paragrapheLikes = document.createElement('p');
    const paragraphePrice = document.createElement('p');
    const heartIcone = document.createElement('span');


    paragrapheLikes.setAttribute('class' , 'like-paragraphe');
    paragraphePrice.setAttribute('class' , 'price-paragraphe');
    heartIcone.setAttribute('class' , 'heart');

    const photographerLikes = document.querySelector(".price-container").appendChild(paragrapheLikes);
    const hearterIcone = document.querySelector('.price-container').appendChild(heartIcone);
    const photographerPrice = document.querySelector('.price-container').appendChild(paragraphePrice);
    // heartIcone.classList.add('heart');


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
    hearterIcone.innerHTML = `<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.125 18.35L7.85625 17.03C3.35 12.36 0.375 9.28 0.375 5.5C0.375 2.42 2.4925 0 5.1875 0C6.71 0 8.17125 0.81 9.125 2.09C10.0787 0.81 11.54 0 13.0625 0C15.7575 0 17.875 2.42 17.875 5.5C17.875 9.28 14.9 12.36 10.3938 17.04L9.125 18.35Z" fill="black"/>
    </svg>`
    

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
