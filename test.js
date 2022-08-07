class MediaFactorie  {
    constructor(data) {
        if(data.type =="image") {
            return new Image(data);
        }
        else if(data.type == "video") {
            return new Video(data)
        }
    }
}


class Image{
    constructor (data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.image = data.image
        this.likes = data.likes
        this.date = data.date
        this.price = data.price
    }

    getMediaCardDOM() {
        return  `
        <div class ="media-card" data-id="${id}" data-title= "${title}" data-date="${date}" tabindex="0">
            <img class="media-${type}-img lb-target" src="assets/newSamplePhotos/${image}" alt="intitulé du média ! ${title}"/>
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
        `
    }
}

class Video {
    constructor (data) {
        this.id = data.id
        this.photographerId = data.photographerId
        this.title = data.title
        this.video = data.video
        this.likes = data.likes
        this.date = data.date
        this.price = data.pric
    }

    getMediaCardDOM() {
        return  `
        <div class ="media-card" data-id="${id}" data-title= "${title}" data-date="${date}" tabindex="0">
            <video controls preload='metadata' id="ctrls-vid" class="media-${type}-img lb-target" aria-label="intitulé du média ${title}">
                <source src="assets/videos/${video}" type = "video/mp4">
            </video>
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
        `
    }

    getMediaSlidesDOM() {
        return `
        <div class ="media-card" data-id="${id}" data-title= "${title}" data-date="${date}" tabindex="0">
            <video controls preload='metadata' id="ctrls-vid" class="media-${type}-img lb-target" aria-label="intitulé du média ${title}">
                <source src="assets/videos/${video}" type = "video/mp4">
            </video>
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
        `
    }
}



// autre fichier JS 

async function getData(photographerId) {
    const data = JSON.parse(localStorage.getItem("data"));
    console.log(data);
  
    //photographer par id
    const photographer = data.photographers.find((p) => p.id === photographerId);
  
    //data media
    const portfolio = data.media
      .filter((obj) => obj.photographerId === photographerId)
      .map((obj) => obj);
    // console.log(portfolio);
  
    //data name

    const pathName = photographer.name;
  
    //likes box
    const totalLikes = portfolio.reduce((acc, curr) => {
      return acc + curr.likes;
    }, 0);


    //price box
    const dayPrice = photographer.price;
    
    return {
      photographer,
      portfolio,
      pathName,
      totalLikes,
      dayPrice,
    };
  }


  function displayMedia(photographer) {
    const portfolioSection = document.querySelector(".portfolio-section");
    const lightboxSection = document.querySelector(".slider-modal");
    portfolioSection.innerHTML = "";
    photographer.forEach((media) => {
        const mediaModel = new Media(media, photographer);
        const mediaCardDOM = mediaModel.getMediaCardDOM(media);
        portfolioSection.appendChild(mediaCardDOM);
    })
  }

function displayMedia(portfolioArray, photographer) {
    const portfolioSection = document.querySelector(".portfolio-section");
    const lightboxSection = document.querySelector(".slider-modal");
    portfolioSection.innerHTML = "";
    portfolioArray.forEach((portfolioItem) => {
      const mediaModel = new Media (portfolioItem, photographer);
      const mediaCardDOM = mediaModel.getMediaCardDOM();
      const mediaSlidesDOM = mediaModel.getMediaSlidesDOM();
      portfolioSection.appendChild(mediaCardDOM);
      lightboxSection.appendChild(mediaSlidesDOM);
    });
  }
  