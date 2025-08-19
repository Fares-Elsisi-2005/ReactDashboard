import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import Paper from '@mui/material/Paper';

import {useState} from "react"
const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [paginationModel, setPaginationModel] = useState({
            page: 0,
            pageSize: 3,
            });


    const columns = [
        {
            field: "id",
            headerName: "ID",
            width: 90
        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 150,
            flex: 1,
            cellClassName:"name-column--cell"
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
            field: "access",
            headerName: "Access Level",
            flex: 1,
             minWidth: 200,
            renderCell: ({row:{access}}) => {
                return (<Box
                    width="60%"
                    m="0 auto"
                    p="5px"
                    display="flex"
                    justifyContent="center"
                    backgroundColor={
                        access === "admin"
                            ? colors.greenAccent[600] :
                            colors.greenAccent[700]
                    }
                    borderRadius="4px"
                
                >
                    {
                        access === "admin" && <AdminPanelSettingsOutlinedIcon/>
                    }
                    {
                        access === "manager" && <SecurityOutlinedIcon/>
                    }
                    {
                        access === "user" && <LockOpenOutlinedIcon/>
                    }

                    <Typography color={colors.gray[100]} sx={{ml:"5px"}}>
                        {access}
                    </Typography>
                    
                </Box>)
            }
        } 
    ]

    
    return (
        <Box m="20px">
            <Header title="TEAM" subtitle="Managing the Team Members" />
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
                <Paper sx={{ height: 600, width: '100%'  }}>
                    <DataGrid
                    checkboxSelection
                    rows={mockDataTeam}
                    columns={columns}
                    pagination
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[3, 5, 10]}
                    />
                </Paper>
            </Box>
        </Box>
    )
}

export default Team;