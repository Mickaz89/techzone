import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import DateFnsUtils from "@date-io/date-fns";

import { ThemeProvider } from "styled-components/macro";
import { create } from "jss";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import {
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
  jssPreset,
} from "@material-ui/core/styles";

import createTheme from "./theme";
import Routes from "./routes/Routes";
import { getSession } from "./redux/actions/authActions";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point"),
});

function App() {
  const theme = useSelector((state) => state.themeReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSession())
    
  }, []);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet
          titleTemplate="%s | Backstage Mickael"
          defaultTitle="Backstage Mickael"
        />
        <StylesProvider jss={jss}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <MuiThemeProvider theme={createTheme(theme.currentTheme)}>
              <ThemeProvider theme={createTheme(theme.currentTheme)}>
                <Routes />
              </ThemeProvider>
            </MuiThemeProvider>
          </MuiPickersUtilsProvider>
        </StylesProvider>
      </HelmetProvider>
    </React.Fragment>
  );
}

export default App;
