const getProducts = async (url) =>{
    /**
     * fetch(url)
     * .then((d)=> d.json())
     * .then((result) => console.log({result}))
     * .catch(error => console.log(error));
     */
    try {
        const d =  await fetch(url);
        const result = await d.json();
        console.log({result});
    } catch (error) {
        console.log(error);
    }
}

getProducts( 'https://dummyjson.com/products')
