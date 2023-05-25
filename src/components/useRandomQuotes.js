import { useEffect, useState } from "react";
import { RandomQuote } from "./RandomQuote";


export const useRandomQuotes = ( ) => {
    

  const [ newValue, setNewValue] = useState();
  


  const getFrase = async() => {
    const frase = await RandomQuote();
    setNewValue( frase );
    
  }

  
  useEffect(() => {
    getFrase();
  }, []);

  return {
    newValue,
    getFrase
  }
}