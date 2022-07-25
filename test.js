class MediaFactorie {
    constructor(data, type) {
        // Si le type correspond à l'ancienne API, alors retourne-moi l'ancien formatage
        if (type === 'img') {
            return new Img(data)
        // Sinon retourne-moi le nouveau formatage
        } else if (type === 'vid') {
            return new Vid(data)
        // Une bonne pratique est de déclencher une erreur si le format n'est pas reconnu
        } else {
            throw 'Unknown type format'
        }
    }
 }

 class Img {
    constructor(data) {
        this.id = data.id
        this.title = data.title
    }
    createHTML() {
        return `<article class="container-photo"> 
                    <img alt="" src="assets/newSamplePhotos/Travel_Lonesome.jpg" class="source-photographer">
                    <h2>${this.title}</h2><h3 id="likesNombers">88
                    <i class="fa-solid fa-heart"></i>
                    </h3>
                </article>`
    }
 }


            // "id": 342550,
			// "photographerId": 82,
			// "title": "Fashion Yellow Beach",
			// "image": "Fashion_Yellow_Beach.jpg",
			// "likes": 62,
			// "date": "2011-12-08",
			// "price": 55