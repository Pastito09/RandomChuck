

export const RandomQuote = async() => {
    
    const resp = await fetch( "https://api.chucknorris.io/jokes/random" );
    const { value } = await resp.json();

    return value;

}
