import { useContext, useEffect, useState } from "react"

import { EstadoContexto } from "../contexto/EstadoContexto";
import { Grid } from "@mui/material";

export const BotonBusqueda = () => {


  const { getFrase } = useContext(EstadoContexto);
 
   return (
    <>
    <Grid container >
      <Grid item>
          <button
            className="btn btn-primary btn-sm"
            
            onClick={getFrase}
          >
            Next
          </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="m-1 bi bi-arrow-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
            </svg>
          <small className="m-1"> Click for a new Quote </small>
          
              
      </Grid>
      
    </Grid>
        
      
    </>
  )
}
