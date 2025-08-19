import { Box, colors } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import { tokens } from "../../theme";
import { useTheme } from "@emotion/react";

const Geography = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    
    return (
        <Box m="20px">
            <Header title="Pie Chart" subtitle="Simple Pie Chart" />
            <Box height="75vh" border={`1px solid ${colors.gray[100]}`} borderRadius="4px">
                <GeographyChart/>
            </Box>
        </Box>
    )
}

export default Geography;
