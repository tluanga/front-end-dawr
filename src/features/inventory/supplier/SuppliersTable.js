import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch} from 'react-redux'
import { getSuppliersData, selectSuppliers } from './store/SuppliersSlice'
import {Link} from 'react-router-dom'

import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce
} from 'react-table'
import styled from "styled-components";
// Material
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TextField } from '@material-ui/core';


const Styles = styled.div`

  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

// Global Filter - Setup
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);

  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{""}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...mm`}
        style={{
          fontSize: "1.1rem",
          border: "0",
        }}
      />
    </span>
  );
};

//default columns object for customizing
// Cell Renderer




const defaultColumns = {
  Cell: ({ cell: { value }})=>value+'test'
}


function ReactTable({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    prepareRow,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable({
    columns,
    data,
    defaultColumns
  },
      useFilters,
      useGlobalFilter,
      
  );

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        <tr>
          <th
            colSpan={visibleColumns.length}
            style={{
              textAlign: "left",
            }}
          >
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            {/* <TextField 
                    placeholder='Search...' 
                    variant='outlined'
                    
                /> */}
          </th>
        </tr>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
            return (
              
                <tr {...row.getRowProps()}>                  
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              
            );
        })}
      </tbody>
    </table>
  );
}




const SuppliersTable = () => {
    
    // const suppliers = useSelector(selectSuppliers)
    const suppliers=[]
    const dispatch = useDispatch()
    useEffect(() => {
     dispatch(getSuppliersData())   
    },[dispatch])

    //Material
    
    //React Table
    const columns = React.useMemo(
      () => [
        {
          Header: "Sl.No",
          accessor: "id",         
        
        },
        {
          Header: "Name",
          accessor: "name",
          Cell: ({ cell: { value } }) => (
            // <Link to={`/book/${book.id}`}>Show details</Link>
            
            <Link to={`/suppliers/1`}>
              {value}
            </Link>
            )
        },
        {
          Header: "Address",
          accessor: "address",
        },
        {
          Header: "Contact",
          accessor: "contact",
        },
        {
          Header: "GST",
          accessor: "gst_no",
        },
        {
          Header: "Remarks",
          accessor: "remarks",
        },
      ],
      []
    );
   
    
    return (
      <div>
        <Styles>
          <ReactTable columns={columns} data={suppliers} />
        </Styles>
      </div>
    );
    
}


export default SuppliersTable
