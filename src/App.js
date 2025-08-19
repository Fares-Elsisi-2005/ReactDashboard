 
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import Calender from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";
import { useState } from "react";

import  {SideBarBarCollapsedContext} from "./contexts/SidebarBarCollapsedContext";


/* 
 
 
 */


function App() {
  const [theme, colorMode] = useMode();
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
 
          <div className="app" style={{
          display: 'flex',
          height: '100vh',
          overflow: 'hidden'
        }}>
         <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />


          <main className="content" style={{
            flex: 1,
            overflowY: 'auto'
          }}>
            <Topbar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
            <Routes>
              <Route path="/" element={ <Dashboard/>} /> 
              <Route path="/team" element={ <Team/>} /> 
              <Route path="/contacts" element={ <Contacts/>} /> 
              <Route path="/invoices" element={ <Invoices/>} /> 
              <Route path="/form" element={<Form />} /> 
              <Route path="/calender" element={<Calender />} />
              <Route path="/faq" element={ <FAQ/>} /> 
              
              <Route path="/bar" element={ <Bar/>} /> 
              <Route path="/pie" element={ <Pie/>} /> 
              <Route path="/line" element={ <Line/>} /> 
              <Route path="/geography" element={ <Geography/>} /> 
               
            </Routes>
          </main>

        </div>
        
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
  
  
}

export default App;
