
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import {InputBase} from "@mui/material";
import LightModeOutLinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutLinedIcon from "@mui/icons-material/DarkModeOutlined";
import  NotificationsOutLinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutLinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlined from '@mui/icons-material/PersonOutlined';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
 import useMediaQuery from '@mui/material/useMediaQuery';


import SearchIcon from "@mui/icons-material/Search";

 



const Tobbar = ({ isCollapsed, setIsCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);
    const isMobile = useMediaQuery('(max-width:600px)');

     
    return (
        <Box display="flex"
            justifyContent="space-between"
            p={2}
            sx={{
                position: "sticky",
                top: "0px",
                backgroundColor: colors.blueAccent[900]
                ,
                zIndex:"10"
            }}
        >
            {isMobile ?
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon/>
                            </IconButton>:undefined}
           
        {/* SEARCH BAR */}
        <Box display="flex"
            backgroundColor={theme.palette.mode === "dark" ? colors.primary[400] : colors.primary[900]} borderRadius="3px">
                
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" /> 
                
            <IconButton type="button" sx={{p:1}}>
                <SearchIcon/>
            </IconButton>
                
        </Box>

        {/* ICONS */}
        <Box display="flex">
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ?
                    (<DarkModeOutLinedIcon />) :
                    (<LightModeOutLinedIcon />)
                    
                }
            </IconButton>
            <IconButton> <NotificationsOutLinedIcon /> </IconButton>
            
            <IconButton> <SettingsOutLinedIcon/> </IconButton>
            <IconButton> <PersonOutlined/> </IconButton>

        </Box>
    </Box>)
}

export default Tobbar;
