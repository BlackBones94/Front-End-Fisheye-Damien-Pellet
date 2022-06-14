function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const prix = document.createElement('h6');
        const tag = document.createElement('h5');
        const h3 = document.createElement('h3');
        const h2 = document.createElement( 'h2' );
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)


        h2.textContent = name;
        h2.setAttribute("aria-label", `${name}`)
        h2.setAttribute("role", "link")
        h3.textContent = city + ', ' + country;
        // pays.textContent = country;
        tag.textContent = tagline;
        prix.textContent = price;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        // article.appendChild(pays);
        article.appendChild(tag);
        article.appendChild(prix);

        return (article);
    }
    return { name, picture, city, country, tagline, price, getUserCardDOM }
}