import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { mockTransactions } from "../../data/mockData";
import DownloadOutLinedIcon from "@mui/icons-material/DownloadOutlined"
import EmailIcon from "@mui/icons-material/Email"
import PointOfSaleIcon from "@mui/icons-material/PointOfSale"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import TrafficIcon from "@mui/icons-material/Traffic"
import LineChart from "../../components/LineChart"
import BarChart from  "../../components/BarChart"
import GeographyChart from  "../../components/GeographyChart"
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircl";
 import useMediaQuery from '@mui/material/useMediaQuery';



const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
     const isMobile = useMediaQuery('(max-width:600px)');
     const isTablet = useMediaQuery('(max-width:1100px)');


    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
                 <Box>
                <Button
                    sx={{
                        backgroundColor: colors.blueAccent[500],
                        color: colors.gray[100],
                        fontWeight: "bold",
                        fontSize: "14px",
                        padding:isMobile?"5px 10px":"10px 20px"

                        
                    }}
                >
                        <DownloadOutLinedIcon sx={{
                            mr: isMobile ? "5px" : "10px" 
                     }} />
                    Download Reports
                </Button>
            </Box>
            </Box>
           
            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12,1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                {/* ROW 1 */}
                <Box gridColumn={isMobile?"span 12":"span 3"}
                    backgroundColor={colors.blueAccent[800]}
                    display="flex" alignItems="center"
                    justifyContent="center"
                    borderRadius={"10px"}
                     
                > 
                    <StatBox
                        title="12,356"
                        subtitle="Emails Sent"
                        progress="0.75"
                        increase="+14%"
                        icon={
                            <EmailIcon
                                sx={{
                                    color: colors.greenAccent[400],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                    

                </Box>
                <Box gridColumn={isMobile?"span 12":"span 3"} 
                    backgroundColor={colors.blueAccent[800]}
                    display="flex" alignItems="center"
                    justifyContent="center"
                     borderRadius={"10px"}
                > 
                    <StatBox
                        title="59.599"
                        subtitle="Sales obtained"
                        progress="0.5"
                        increase="+21%"
                        icon={
                            <PointOfSaleIcon
                                sx={{
                                    color: colors.greenAccent[400],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                    

                </Box>
                <Box gridColumn={isMobile?"span 12":"span 3"}
                    backgroundColor={colors.blueAccent[800]}
                    display="flex" alignItems="center"
                    justifyContent="center"
                     borderRadius={"10px"}
                > 
                    <StatBox
                        title="56,887"
                        subtitle="New clients"
                        progress="0.30"
                        increase="+5%"
                        icon={
                            <PersonAddIcon
                                sx={{
                                    color: colors.greenAccent[400],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                    

                </Box>
                <Box gridColumn={isMobile?"span 12":"span 3"}
                    backgroundColor={colors.blueAccent[800]}
                    display="flex" alignItems="center"
                    justifyContent="center"
                     borderRadius={"10px"}
                > 
                    <StatBox
                        title="45,764"
                        subtitle="Traffic Inbound"
                        progress="0.80"
                        increase="+43%"
                        icon={
                            <TrafficIcon
                                sx={{
                                    color: colors.greenAccent[400],
                                    fontSize:"26px"
                                }}
                            />
                        }
                    />
                    

                </Box>

                {/* ROW 2 */}
                <Box
                    gridColumn={ "span 12" }
                    gridRow="span 2"
                    backgroundColor={colors.blueAccent[800]}
                     borderRadius={"10px"}
                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        
                          
                    >
                        <Box>
                            <Typography variant="h5"
                                fontWeight="600"
                                color={colors.gray[100]}
                                
                            >
                                Revenue Generated
                            </Typography>
                            <Typography variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[400]}
                                
                            >
                                $59,342,32
                            </Typography>
                        </Box>


                    </Box>
                    <Box>
                        <IconButton>
                            <DownloadOutLinedIcon
                                sx={{
                                    fontSize: "26px",
                                    color: colors.greenAccent[400]
                                    
                                }}
                            
                            />
                        </IconButton>
                    </Box>
                    <Box height="250px" mt="-50px">
                        <LineChart isDashboard={ true} />
                    </Box>
                   

                </Box>

                 {/* TRANSACTIONS */}
                <Box
                    gridColumn={isMobile?"span 12":"span 6"}
                    gridRow="span 2"
                    backgroundColor={colors.blueAccent[800]}
                    overflow="auto"
                     borderRadius={"10px"}
                >
                    <Box
                        display="flex"
                        justifyContent="space-between"
                       
                        borderBottom={`4px solid ${colors.primary[500]}`}
                        color={colors.gray[100]}
                        p={"15px"}
                        flexDirection={"column"}
                    >
                        <Typography
                            color={colors.gray[100]}
                            variant="h5"
                            fontWeight={"600"}>
                            Recent Transactions
                        </Typography>
                        {mockTransactions.map((transaction, i) => ( 
                            <Box
                                key={`${transaction.txId}-${i}`}
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                                
                                borderBottom={`4px solid ${colors.primary[500]}`}
                                p={"15px"}
                                
                            >
                                <Box>
                                    <Typography
                                        color={colors.greenAccent[400]}
                                        variant="h5"
                                        fontWeight={"600"}>
                                         {transaction.txId}
                                    </Typography>
                                    <Typography
                                        color={colors.gray[100]}
                                         >
                                         {transaction.user}
                                    </Typography>
                                </Box>
                                <Box color={colors.gray[100]}>
                                    {transaction.date}
                                </Box>
                                <Box
                                    backgroundColor={colors.greenAccent[400]}
                                    p={"5px 10px"}
                                    borderRadius={"4px"}
                                >
                                    {transaction.cost}
                                </Box>
                            </Box>
                        ))}

                    </Box>
                    
                </Box>

                {/* ROW 3 */}
                <Box
                    gridColumn={isMobile?"span 12":"span 6"}
                    gridRow={"span 2"}
                    backgroundColor={colors.blueAccent[800]}
                    p={"30px"}
                     borderRadius={"10px"}
                >
                    <Typography variant="5" fontWeight={"600"}>
                        Campaign
                    </Typography>
                    <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        mt={"25px"}
                    >
                        <ProgressCircle size="125" />
                        <Typography
                            variant="h5" color={colors.greenAccent[400]}
                            sx={{mt:"15px"}}
                        >
                            $45,644 revenue generated
                        </Typography>
                         <Typography  >
                            Includes extra misc expenditures and costs
                        </Typography>
                    </Box>
                     
                    

                </Box>

                {/* ================= */}
                <Box
                    gridColumn={ "span 12" }
                    gridRow={"span 2"}
                    backgroundColor={colors.blueAccent[800]}
                     borderRadius={"10px"}
                >
                    <Typography variant="5" fontWeight={"600"} sx={{p:"30px 30px 0 30px "}}>
                        Sales Quantity
                    </Typography>
                    <Box
                        height={"250px"}
                        mt={"-20px"}
                    >
                        <BarChart isDashboard={ true} />
                        
                    </Box>
                    {/* ------------- */}
                    

                </Box>
                 
                {/* ======================== */}
                 <Box
                    gridColumn={ "span 12" }
                    gridRow={"span 2"}
                    backgroundColor={colors.blueAccent[800]}
                    p={"30px"}
                     borderRadius={"10px"}
                >
                    <Typography variant="5" fontWeight={"600"} sx={{mb:"15px"}}>
                        Geography Based Traffic
                    </Typography>
                    <Box
                        height={"200px"}
                    >
                        <GeographyChart isDashboard={ true} />
                        
                    </Box>
                     

                </Box>


            </Box>
        </Box>
    )
}

export default Dashboard;