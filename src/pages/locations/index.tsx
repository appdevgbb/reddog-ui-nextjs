// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../../@core/components/mapDynamicComponent'),
  {loading: () => <p>Loading React azure maps ...</p>, ssr: false}
)

const Locations = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Store Locations'></CardHeader>
          <CardContent>
            <DynamicComponentWithNoSSR/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Locations
