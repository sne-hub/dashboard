import { useState } from "react";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { Button, CssBaseline } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: "#90caf9",
      },
      secondary: {
        main: "#f48fb1",
        contrastText: "#47008F",
      },
    },
    typography: {
      fontFamily: ["roboto", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 36,
      },
      h3: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 30,
      },
      h4: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 24,
      },
      h5: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 20,
      },
      h6: {
        fontFamily: ["roboto", "sans-serif"].join(","),
        fontSize: 16,
      },
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DarkModeIcon onClick={toggleTheme} />
    </ThemeProvider>
  );
};

export default Theme;
