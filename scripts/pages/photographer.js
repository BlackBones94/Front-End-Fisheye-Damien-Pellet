//Mettre le code JavaScript lié à la page photographer.html
(async function() {
    const id = getPhotographersId();
    console.log(id)
    const photographer = await getPhotographers(id)
    photographer.photographers.forEach((photographer) => {
        if(photographer.id == id) {
            this.imgData(photographer);
            this.playData(photographer);
            console.log(photographer)
        }
    
    })
     const PhotographerMedia = photographer.media.filter(media => media.photographerId == id);
     console.log(PhotographerMedia);
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



    // async function initBis() {
    //     // Récupère les datas des photographes
    //     const { photographer } = await getPhotographers();
    //     imgData(photographer);
    //     playData(photographer);
    // };



    // initBis();
    