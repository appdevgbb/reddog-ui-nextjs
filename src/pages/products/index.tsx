// ** MUI Imports
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports
import ProductsTable from "../../views/table/data-grid/ProductsTable";

const Products = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={
          <Typography variant='h5'>
            <Link href='https://mui.com/x/react-data-grid/' target='_blank'>
              Products
            </Link>
          </Typography>
        }
        subtitle={
          <Typography variant='body2'>
            Todo: Create OpenAI and HuggingFace integration to generate product descriptions and translations
          </Typography>
        }
      />
      <Grid item xs={12}>
        <ProductsTable />
      </Grid>
    </Grid>
  )
}

export default Products
