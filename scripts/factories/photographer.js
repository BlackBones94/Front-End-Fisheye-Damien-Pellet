
function PhotographerMediaFactory(dataMedia) {
  
    const {  id, photographerId, title, image,video, likes } = dataMedia; 
    const photos = `assets/newSamplePhotos/${image}`;
    const vidéoPhotos = `assets/videos/${video}`;
    console.log(photos)

    function photographerBookDOM() {

        const article = document.createElement( 'article' );
        article.setAttribute('class' , 'container-photo')
        const img = document.createElement( 'img' );
        const vid = document.createElement('video');
        img.alt="";
        img.setAttribute("src", photos)
        img.setAttribute('class', 'source-photographer')
        
        const h2 = document.createElement( 'h2' );
        const h3 = document.createElement('h3');
        h2.innerHTML = title;
        h3.innerHTML = `${likes}`;

        const icone = document.createElement('i');
        icone.setAttribute('class', "fa-solid fa-heart")


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

        img.addEventListener('click' , function() {
            const divLightbox = document.createElement('div');
            const main = document.getElementById('main');
            const  closeBtn = document.createElement('button');
            const  nextBtn = document.createElement('button');
            const  previousBtn = document.createElement('button');
            const container = document.createElement('div');
            const image_lightbox = document.createElement('img');

            container.classList.add('lightbox__container');
            closeBtn.classList.add('lightbox__close');
            previousBtn.classList.add('lightbox__previous');
            nextBtn.classList.add('lightbox__next');

            main.appendChild(divLightbox);
            divLightbox.appendChild(closeBtn);
            divLightbox.appendChild(container);
            container.appendChild(nextBtn)
            container.appendChild(image_lightbox)
            container.appendChild(previousBtn)

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

            container.classList.add('lightbox__container');
            closeBtn.classList.add('lightbox__close');
            previousBtn.classList.add('lightbox__previous');
            nextBtn.classList.add('lightbox__next');

            main.appendChild(divLightbox);
            divLightbox.appendChild(closeBtn);
            divLightbox.appendChild(container);
            container.appendChild(nextBtn)
            container.appendChild(video_lightbox)
            container.appendChild(previousBtn)

            video_lightbox.setAttribute('src' , vidéoPhotos)
            video_lightbox.setAttribute('type' , "video/mp4")
            video_lightbox.controls = true;
            closeBtn.setAttribute('onclick' , 'closeLightBox()');

            divLightbox.setAttribute('id', 'lightbox');
            divLightbox.classList.add('lightbox');
        })
        return (article);
    }

    return {dataMedia, photographerBookDOM }
}
