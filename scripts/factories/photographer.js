
function PhotographerMediaFactory(dataMedia) {
  
    const {  title, image,video, likes } = dataMedia; 
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

        return (article);
    }

    return {dataMedia, photographerBookDOM }
}