// ** Next Import
// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import {GridRowId} from '@mui/x-data-grid'

interface InflightOrderHeaderProps {
  selectedRows: GridRowId[]
}

const InflightOrderHeader = (props: InflightOrderHeaderProps) => {
  // ** Props
  const { selectedRows } = props

  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}
    >
      <Button
        sx={{ mb: 2 }}
        variant='contained'
        disabled={selectedRows && selectedRows.length === 0}>
        Complete Selected Order(s)
      </Button>
    </Box>
  )
}

export default InflightOrderHeader
