// ** React Imports
// ** MUI Imports
import Box from '@mui/material/Box'
import {styled} from '@mui/material/styles'
import Button from '@mui/material/Button'
import {GridToolbarContainer} from '@mui/x-data-grid'

// ** Icons Imports
import {Reload} from "mdi-material-ui";
import Grid from "@mui/material/Grid";


const StyledGridToolbarContainer = styled(GridToolbarContainer)({
  p: 2,
  pb: 0,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  justifyContent: 'space-between'
})

const ProductsToolbar = () => {
  return (
    <StyledGridToolbarContainer>
      <Grid item xs={3}>
        <Button variant='contained' startIcon={<Reload/>}>
          Generate Product Name
        </Button>
      </Grid>
      <Grid item xs={3}>
        <Button variant='contained' startIcon={<Reload/>}>
          Translate Product Name
        </Button>
      </Grid>
    </StyledGridToolbarContainer>
  )
}

export default ProductsToolbar
