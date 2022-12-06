import React from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { useRoutes } from "react-router-dom";
import theme from "./component/theme";
import GlobalStyles from "./component/GlobalStyles";
import routes from "./component/routes";

const App = ()=>{
  const renderContent = useRoutes(routes());
  return(
  <StyledEngineProvider injectFirst>
  <ThemeProvider theme={theme}>
    <GlobalStyles />
      {renderContent}
  </ThemeProvider>
</StyledEngineProvider>
)
  }


export default App;
