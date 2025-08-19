import { Box, Typography, useTheme} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices} from "../../data/mockData";
import Header from "../../components/Header";
import { useState } from "react";

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const columns = [
        {
            field: "id",
            headerName: "ID",
             width: 90
            
        },
         
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
            minWidth: 150,
            
        }
         
        ,
        {
            field: "phone",
            headerName: "Phone",
            flex: 1,
             minWidth: 200
            
        }
        ,
        {
            field: "email",
            headerName: "Email",
            flex: 1,
             minWidth: 250
        } 
        ,
        {
            field: "cost",
            headerName: "Cost",
            flex: 1,
             minWidth: 200,
            renderCell: (params) => (
                <Typography color={colors.greenAccent[500]}>
                    ${params.row.cost}
                </Typography>
            )
        } 
        
        ,
        {
            field: "date",
            headerName: "Date",
            flex: 1,
             minWidth: 100
        } 
        ,
         
    ]
    const [paginationModel, setPaginationModel] = useState({
            page: 0,
            pageSize: 4,
            });

    return (
        <Box m="20px">
            <Header title="INVOICES" subtitle="List of Invoice Balances" />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border:"none"
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom:"none"
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300]
                    },
                    "& .MuiDataGrid-columnHeader": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom:"none"
                    },
                    "& .MuiDataGrid-virtualScroll": {
                        backgroundColor: colors.primary[400]
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor:colors.blueAccent[700]
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    } 
                }}
            >
               <DataGrid
                checkboxSelection
                rows={mockDataInvoices}
                columns={columns}
                pagination
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[3, 5, 10]}
                
                sx={{
                '& .MuiCheckbox-root': {
                color: `${colors.greenAccent[200]} !important`
                },
            }}
                />
            </Box>
        </Box>
    )
}

export default Invoices;