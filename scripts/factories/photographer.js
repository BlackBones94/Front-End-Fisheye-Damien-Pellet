function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

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
        article.appendChild(linkName);

        //  city et country  

        const h3 = document.createElement('h3');
        h3.textContent = city + ', ' + country;
        h3.setAttribute('aria-label', `${city + country}`)
        article.appendChild(h3);

        //  TAGLINE

        const tag = document.createElement('h5');
        tag.textContent = tagline;6
        tag.setAttribute('aria-label', `${tagline}`)
        article.appendChild(tag);

        // Price

        const prix = document.createElement('h6');
        prix.textContent = price + 'Є/jour';
        prix.setAttribute('aria-label' , `${price}`)
        article.appendChild(prix);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}