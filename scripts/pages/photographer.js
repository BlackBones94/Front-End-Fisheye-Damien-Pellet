//Mettre le code JavaScript lié à la page photographer.html
(async function() {
    const id = getPhotographersId();
    console.log(id)
    const photographer = await getPhotographers(id)
    photographer.photographers.forEach((photographer) => {
        if(photographer.id == id) {
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
    