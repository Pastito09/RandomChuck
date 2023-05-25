import { Grid, Link, Typography } from "@mui/material"
import { CajaFrases } from "./CajaFrases"


export const BuscadorDeFrases = () => {
  return (
    <>
        <Grid            
            container
            spacing={ 0 }
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '100vh', backgroundColor: '#262254', padding: 4 }}
        >
        <Grid 
            item
            className="box-shadow"

            xs={ 12 }
            sx={{
                minWidth: '-webkit-fill-available',
                display: 'block',
                backgroundColor: 'white', 
                padding: 3, 
                borderRadius: 2 
            }}>

            <Typography variant="h5" sx={{ mb: 2, textAlign: "center", color: "#3f51b5", fontFamily: "Franklin Gothic Medium" }}>Buscador De Frases de Chuck Norris</Typography>

            <CajaFrases />
  </Grid>
  <Grid 
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="center"
    margin="inherit">
    <Grid
    item
    sx={{
      color: "aliceblue"
    }}>
      <small>Developed by <Link  href="https://www.linkedin.com/in/patricio-hogan-828484a5/" underline="hover" target="_blank">Patricio Augusto Zienka Hogan</Link></small></Grid>

  </Grid>
 </Grid>

    </>
  )
}
