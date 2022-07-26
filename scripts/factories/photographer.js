// facto pour media 

// creation et utilisation de class avec la methode static 

// video 
class VideoMediaSubFactory {
    static elt (video, title, type) {
        return `
        <video controls preload='metadata' id="ctrls-vid" class="media-${type}-img lb-target" aria-label="intitulé du média ${title}">
            <source src="assets/videos/${video}" type = "video/mp4">
        </video>
        `;
    }
}
// images
class ImageMediaSubFactory {
   static elt (image, title, type) {
        return `
        <img class="media-${type}-img lb-target" src="assets/newSamplePhotos/${image}" alt="intitulé du média ! ${title}"/>
        `;
    }
}

// construcvtion des media 

function mediaFactory(data, photographer) {
    const { id, date, image, likes, title, video } = data;
    const { name } = photographer;

    function getMediaCardDOM() {
        const article = document.createElement('article');
        article.innerHTML = `
        <div class ="media-card" data-id="${id}" data-title= "${title}" data-date="${date}" tabindex="0">


        ${
            image
            // si contient image retourner les image 
            ? ImageMediaSubFactory.elt(image,title,"card", name)
            // sinon la video 
            : VideoMediaSubFactory.elt(video, title , "card", name)
        }
            <div class="media-card-text">
                <span class="media-card-title">${title}</span>
                <div class="likesByMedia">
                    <i class="infos-Likes-Icon" >
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>
                        </svg>
                    </i>
                    <i class="far fa-heart  infos-Likes-Icon1" aria-label="Cliquer pour liker"></i>    
                    <p class="media-card-likes" aria-label="Ce média a ${likes} likes" >${likes}</p>  
                </div>
            </div>
        `;

        return article;
    }



    // lightbox 


    function getMediaSlidesDOM() {
        const article = document.createElement('article');
        article.innerHTML = ` 
        <div  class="slide hide-slide" data-id="${id}" data-title="${title}" data-date="${date}">
            <div class="slide-container">
                <div class="slide-media-container">
                    <span class="media-slide-title">${title}</span>
         
         
        ${
          image
            // si contient image retourner les image 
            ? ImageMediaSubFactory.elt(image, title, "slide", name)
            // sinon vidéo 
            : VideoMediaSubFactory.elt(video, title, "slide", name)
        } 
          
                </div>
           </div>
        </div>
        `;

        return article;

    }
    
    return {getMediaCardDOM, getMediaSlidesDOM}
}
