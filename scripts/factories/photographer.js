
function PhotographerMediaFactory(dataMedia) {
  
    const {  id, photographerId, title, image,video, likes } = dataMedia; 
    const photos = `assets/newSamplePhotos/${image}`;
    const vidéoPhotos = `assets/videos/${video}`;
    console.log(photos)

    function photographerBookDOM() {

        const article = document.createElement( 'article' );
        const totalLikes = document.querySelector('.like-paragraphe');
        article.setAttribute('class' , 'container-photo')
        const img = document.createElement( 'img' );
        const vid = document.createElement('video');
        img.alt="";
        img.setAttribute("src", photos)
        img.setAttribute('class', 'source-photographer')
        
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');

        h3.setAttribute('id' , 'likesNombers');

        h2.innerHTML = title;
        h3.innerHTML = `${likes}`;

        const icone = document.createElement('i');
        icone.setAttribute('class', "fa-solid fa-heart")
        // icone.setAttribute('id' , 'iconeHeart');


        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
      
        h3.appendChild(icone)


        if(!image){
            article.removeChild(img)
            article.removeChild(h2)
            article.removeChild(h3)

            article.appendChild(vid)
            article.appendChild(h2)
            article.appendChild(h3)

            const source = document.createElement('source');
            vid.appendChild(source);
            vid.controls = true;
            source.setAttribute("type", "video/mp4")
            source.setAttribute("src", vidéoPhotos)
        }

        h3.addEventListener('click', function() {
            let compteurLikes = `${likes}`
            compteurLikes++;
            h3.innerHTML= compteurLikes;
            h3.appendChild(icone)
            totalLikes.innerHTML++
        })


        img.addEventListener('click' , function() {
            const divLightbox = document.createElement('div');
            const main = document.getElementById('main');
            const  closeBtn = document.createElement('button');
            const  nextBtn = document.createElement('button');
            const  previousBtn = document.createElement('button');
            const container = document.createElement('div');
            const image_lightbox = document.createElement('img');
            const textPhoto = document.createElement('h2');
            const containerText = document.createElement('div');
            textPhoto.innerHTML = title;

            containerText.classList.add('lightbox__text')
            container.classList.add('lightbox__container');
            closeBtn.classList.add('lightbox__close');
            previousBtn.classList.add('lightbox__previous');
            nextBtn.classList.add('lightbox__next');
            textPhoto.classList.add('lightbox__name');


            main.appendChild(divLightbox);
            divLightbox.appendChild(closeBtn);
            divLightbox.appendChild(container);
            divLightbox.appendChild(containerText);
            container.appendChild(nextBtn)
            container.appendChild(image_lightbox)
            container.appendChild(previousBtn)
            containerText.appendChild(textPhoto);


            image_lightbox.setAttribute('src' , photos)
            image_lightbox.setAttribute('alt' , "")
            
            closeBtn.setAttribute('onclick' , 'closeLightBox()');

            divLightbox.setAttribute('id', 'lightbox');
            divLightbox.classList.add('lightbox');
        })

        vid.addEventListener('click' , function() {
            const divLightbox = document.createElement('div');
            const main = document.getElementById('main');
            const  closeBtn = document.createElement('button');
            const  nextBtn = document.createElement('button');
            const  previousBtn = document.createElement('button');
            const container = document.createElement('div');
            const video_lightbox = document.createElement('video');
            const textPhoto = document.createElement('h2');
            const containerText = document.createElement('div');
            textPhoto.innerHTML = title;

            containerText.classList.add('lightbox__text')
            container.classList.add('lightbox__container');
            closeBtn.classList.add('lightbox__close');
            previousBtn.classList.add('lightbox__previous');
            nextBtn.classList.add('lightbox__next');
            textPhoto.classList.add('lightbox__name');

            main.appendChild(divLightbox);
            divLightbox.appendChild(closeBtn);
            divLightbox.appendChild(container);
            divLightbox.appendChild(containerText);
            container.appendChild(nextBtn);
            container.appendChild(video_lightbox);
            container.appendChild(previousBtn);
            containerText.appendChild(textPhoto);

            
            video_lightbox.setAttribute('src' , vidéoPhotos)
            video_lightbox.setAttribute('type' , "video/mp4")
            video_lightbox.controls = true;
            closeBtn.setAttribute('onclick' , 'closeLightBox()');

            divLightbox.setAttribute('id', 'lightbox');
            divLightbox.classList.add('lightbox');

        })

    //     const likesCompteur = `${likes}`

    //     function comptage() {
    //         likesCompteur++;
    //         document.getElementById("likesNombers");
            
    //     }

    //    console.log(likesCompteur);

        // document.getElementById("likesNombers").addEventListener("click", comptage);
        
 
        return (article);
    }


    
    return {dataMedia, photographerBookDOM }
}
