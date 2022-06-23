// function mediaFactory (dataPhoto){
//     const { photographerId ,likes, title , image } =  dataPhoto;

//     const photographPicture = `assets/samplePhotos/${photos}`;

//     function getUserListImg (){
//         const divOne = document.createElement('article');
//         divOne.setAttribute('class', 'photographParagrapher');

//         //  MEDIA afficher dans photographer 

//         const imgPhotographer = document.createElement('img');
//         imgPhotographer.setAttribute('src', photographPicture)
//         imgPhotographer.setAttribute('alt', `${image}`)
//         imgPhotographer.setAttribute('role', 'img')
//         divOne.appendChild(imgPhotographer);

//         const titleImg = document.createElement('h6');
//         titleImg.textContent = title;
//         titleImg.setAttribute("aria-label", `${title}`)
//         divOne.appendChild(titleImg);

//         const likesImg = document.createElement('p');
//         likesImg.textContent = likes;
//         likesImg.setAttribute("aria-label" , `${likes}` )
//         likesImg.setAttribute("role" ,'likes')
//         divOne.appendChild(likesImg);
        
//         return (divOne);
//     }

//     return { likes, title , image , getUserListImg  }
// }
