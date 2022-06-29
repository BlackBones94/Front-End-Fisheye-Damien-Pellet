function priceLikesFactory (dataPrice){

    const { name, portrait, city, country, tagline, price ,id, likes} = dataPrice;

    function  priceModelDom(){
        const articlePrice = document.createElement('article');

            const p = document.createElement('p');
            p.innerHTML = `${price}`+ 'Є/jour';

            

            articlePrice.appendChild(p);

            return (articlePrice);
        } 

    
    return {dataPrice ,priceModelDom}
}