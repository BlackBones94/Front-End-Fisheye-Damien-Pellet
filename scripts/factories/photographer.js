function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price ,id} = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        // article.setAttribute("id" , "articleId")
        // article.setAttribute('href', "photographer.html")
        // For portrait

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute('ariel-label', `${name}` )
        img.setAttribute('alt', 'Photographes')
        img.setAttribute('role', 'img')
        article.appendChild(img);
        
        // For name

        const linkName = document.createElement( 'a' );
        linkName.textContent = name;
        linkName.setAttribute("aria-label", `${name}`)
        linkName.setAttribute("role", "link")
        linkName.setAttribute('href', "photographer.html")
        article.appendChild(linkName).href += `?id=${data.id}`;

        //  city et country  

        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        h3.setAttribute('aria-label', `${city + country}`)
        article.appendChild(h3);

        //  TAGLINE

        const tag = document.createElement('h5');
        tag.textContent = tagline;
        tag.setAttribute('aria-label', `${tagline}`)
        article.appendChild(tag);

        // Price

        const prix = document.createElement('h6');
        prix.textContent = price + 'Є/jour';
        prix.setAttribute('aria-label' , `${price}`)
        article.appendChild(prix);

        return (article);
    }
   

    function getUserCardHeader (photographer){

        const articleModel = document.createElement("article");
        articleModel.setAttribute('class' , 'articleTxt');
        console.log(photographer);


        
        
        // For name

        const linkNameModel = document.createElement( 'a' );
        linkNameModel.textContent = name;
        linkNameModel.setAttribute("aria-label", `${name}`)
        linkNameModel.setAttribute("role", "link")
        linkNameModel.setAttribute('href', "photographer.html")
        articleModel.appendChild(linkNameModel).href += `?id=${data.id}`;

        //  city et country  

        const h3Model = document.createElement('h3');
        h3Model.textContent = city + ', ' + country;
        h3Model.setAttribute('aria-label', `${city + country}`)
        articleModel.appendChild(h3Model);

        //  TAGLINE

        const tagModel = document.createElement('h5');
        tagModel.textContent = tagline;
        tagModel.setAttribute('aria-label', `${tagline}`)
        articleModel.appendChild(tagModel);

        return (articleModel)
    
    }

    function getUserImgHeader (){
        const articleImg = document.createElement("article");
        articleImg.setAttribute('class' , 'imgArticle');


        const imgModel = document.createElement( 'img' );
        imgModel.setAttribute("src", picture)
        imgModel.setAttribute('ariel-label', `${name}` )
        imgModel.setAttribute('alt', 'Photographes')
        imgModel.setAttribute('role', 'img')
        articleImg.appendChild(imgModel);

        return (articleImg);
    }



    return { name, picture, city, country, tagline, price, id, getUserCardDOM, getUserCardHeader,getUserImgHeader  }

}