import { Box} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import { useTheme } from "@emotion/react";
import Header from "../../components/Header";
import { useState } from "react";

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            width: 90
        },
        {
            field: "registrarId",
            headerName: "Registrar Id",
            width: 150

             
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
            field: "age",
            headerName: "Age",
            type: "number",
            haderAlign: "left",
            align: "left",
            width: 100
            
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
            field: "address",
            headerName: "Address",
            flex: 1,
            minWidth: 300
        } 
        ,
        {
            field: "city",
            headerName: "city",
            flex: 1,
            minWidth: 150
        } 
        ,
        {
            field: "zipCode",
            headerName: "ZipCode",
            flex: 1,
            minWidth: 200
        } 
        ,
         
    ]
    const [paginationModel, setPaginationModel] = useState({
                page: 0,
                pageSize: 6,
                });
    

    return (
        <Box m="20px">
            <Header title="CONTACTS" subtitle="List of Contacts for Future Refrence" />
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
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color:`${colors.gray[100]} !important`
                    }
                }}
            >
               <DataGrid
                checkboxSelection
                rows={mockDataContacts}
                columns={columns}
                showToolbar
                pagination
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[3, 5, 10]}
                sx={{
                '& .MuiDataGrid-toolbar': {
                justifyContent: 'start',
                },
            }}
                />
            </Box>
        </Box>
    )
}

export default Contacts;