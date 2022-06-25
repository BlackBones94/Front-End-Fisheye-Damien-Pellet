//Mettre le code JavaScript lié à la page photographer.html
(async function() {
    const id = getPhotographersId();
    console.log(id)
    const photographer = await getPhotographers(id)

    photographer.photographers.forEach((photographer) => {
        if(photographer.id == id) {
            this.imgData(photographer);
            this.playData(photographer);
            priceData(photographer)
            // console.log(photographer)
        }
    
    })
     const photographerMedia = photographer.media.filter(media => media.photographerId == id);

    photographerMedia.forEach((photographerMedia)=> {
        this.displayMedia(photographerMedia)
        // priceData(photographerMedia)
        // this.MonFiltre(photographerMedia)
        // console.log(photographerMedia)
    })

    const photographerVideos = photographer.media.filter(media => media.video != null)
    photographerVideos.forEach((value)  =>{
        if(value.photographerId == value.id){
            console.log(value.id)
        }
    })

    console.log(testVideo)
    photographerVideos.forEach((photographerVideos) => {
        this.displayVideo(photographerVideos);
    })
    console.log(photographerVideos);
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

// FUNCTION POUR LES VIDEOS 
 async function displayVideo(photographerVideos) {
    const videoBook = document.querySelector('.photographer-book');
    const videoBookModel = PhotographerMediaFactory(photographerVideos);
    const videoCard = videoBookModel.videoBookDOM();
    videoBook.appendChild(videoCard);
 }

    

// CREATION DE DIV POUR LE MENU TRIER ET TITLE MENU  ET SELECT OPTION

const dropMenu = document.createElement('div');
dropMenu.className= 'drop-menu';
document.getElementById("main").appendChild(dropMenu);

const titleMenu = document.createElement('h5');
titleMenu.setAttribute('class', 'title-menu')
titleMenu.textContent = 'Trier par';

const selectMenu = document.createElement('select');
selectMenu.setAttribute('class', 'drop-down');

const optionSelectOne = document.createElement('option');
optionSelectOne.setAttribute('value', 'Popularité');
optionSelectOne.textContent = 'Popularité';

const optionSelectTwo = document.createElement('option');
optionSelectTwo.setAttribute('value', 'Date');
optionSelectTwo.textContent = 'Date';

const optionSelectThree = document.createElement('option');
optionSelectThree.setAttribute('value', 'Titre');
optionSelectThree.textContent = 'Titre';


dropMenu.appendChild(titleMenu);
dropMenu.appendChild(selectMenu);

selectMenu.appendChild(optionSelectOne);
selectMenu.appendChild(optionSelectTwo);
selectMenu.appendChild(optionSelectThree);

// CREATION DE DIV POUR LE PHOTOBOOK

const photographerBook  = document.createElement('div');
photographerBook .className = 'photographer-book';

document.getElementById("main").appendChild(photographerBook);


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


 const arrayLikes = []
