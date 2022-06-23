//Mettre le code JavaScript lié à la page photographer.html
(async function() {
    const id = getPhotographersId();
    console.log(id)
    const photographer = await getPhotographers(id)
    photographer.photographers.forEach((photographer) => {
        if(photographer.id == id) {
            // this.imgSection(photographer);
            this.imgData(photographer);
            this.playData(photographer);
            console.log(photographer)
        }
    
    })
     const photographerMedia = photographer.media.filter(media => media.photographerId == id);

    photographerMedia.forEach((photographerMedia)=> {
        displayMedia(photographerMedia)
        console.log(photographerMedia)
    })
    })();
    

    
    function getPhotographersId() {
        return new URL(location.href).searchParams.get("id")
    }
    
    async function getPhotographers() {
        return fetch('./data/photographers.json')
            .then((response) =>
               response.json()
            )
            .catch(function(){
                console.log("Something not happened well")
            })
    }
    

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


//  FUNCTION POUR LES MEDIA
    
    async function displayMedia(photographerMedia){
        const photographerBook = document.querySelector(".photographer-book");
        const photographerBookModel = PhotographerMediaFactory(photographerMedia);
        const UserCard = photographerBookModel.photographerBookDOM();
        photographerBook.appendChild(UserCard);
    }
    

// CREATION DE DIV POUR LE PHOTOBOOK

document.addEventListener('DOMContentLoaded', function() {
    const photographerBook  = document.createElement('div');
    photographerBook .className = 'photographer-book';
 
    document.getElementById("main").appendChild(photographerBook );
});
