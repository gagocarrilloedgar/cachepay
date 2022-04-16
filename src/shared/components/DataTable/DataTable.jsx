import React, { useMemo } from 'react'
import { DataGrid, GridToolbarFilterButton } from '@mui/x-data-grid'
import { PropTypes } from 'prop-types'

const DataTable = ({ columns, data }) => {
  const rows = useMemo(() => data, [data])
  return (
    <div style={{ height: 600, width: '95%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbarFilterButton
        }}
      />
    </div>
  )
}

DataTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired
}

export default DataTable
