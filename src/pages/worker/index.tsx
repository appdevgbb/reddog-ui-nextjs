// ** React Imports
import { useContext } from 'react'

// ** Context Imports
import { AbilityContext } from 'src/layouts/components/acl/Can'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TableServerSide from "../../views/table/data-grid/TableServerSide";

const VirtualWorkers = () => {
  // ** Hooks
  const ability = useContext(AbilityContext)

  return (
    <Grid container spacing={6}>
      <Grid item md={6} xs={12}>
        <TableServerSide />
      </Grid>
      {ability?.can('read', 'analytics') ? (
        <Grid item md={6} xs={12}>
          <TableServerSide />
        </Grid>
      ) : null}
    </Grid>
  )
}

VirtualWorkers.acl = {
  action: 'read',
  subject: 'acl-page'
}

export default VirtualWorkers
