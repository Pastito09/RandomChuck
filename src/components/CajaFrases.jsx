import { Grid, Typography } from "@mui/material"
import { BotonBusqueda } from "./BotonBusqueda"
import { useContext } from "react";
import { EstadoContexto } from "../contexto/EstadoContexto";


export const CajaFrases = () => {

    const { newValue } = useContext(EstadoContexto);

  return (
    <>
        <Grid 
                container
                
                sx={{
                    backgroundColor: '#f0f0f0', 
                    padding: 3, 
                    borderRadius: 2,
                    marginTop: 1, 
                }}>
            <Grid 
                item 
                xs={ 12 }
                sx={{
                    color: "#606060",
                    textAlign: "center",
                }}
                >
                <Typography variant="h4">
                    {newValue}
                    </Typography>
            </Grid>
                <BotonBusqueda />
            </Grid>
    
       
    </>
  )
}
