import { createTheme } from "@mui/material/styles";

export default createTheme({
  palette: {
    background: {
      default: "#f2f2f2",
      paper: "#f2f2f2",
    },
    text: {
      secondary: "rgba(0,0,0,0.4)",
    },
  },
  typography: {
    fontFamily: `"Nunito", "sans-serif"`,
    fontSize: 14,
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },
    MuiAppBar: {
      defaultProps: {
        position: "relative",
        elevation: 0,
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#6b6b6b rgba(0,0,0,0.05)",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "rgba(0,0,0,0.05)",
            width: 6,
          },
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(0,0,0,.2)",
            minHeight: 24,
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
            {
              backgroundColor: "rgba(0,0,0,.3)",
            },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
            {
              backgroundColor: "rgba(0,0,0,.4)",
            },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
            {
              backgroundColor: "rgba(0,0,0,.3)",
            },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "rgba(0,0,0,0.05)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: "bold",
          boxShadow: "none",
          padding: 10,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&:not([data-shrink="true"])': {
            marginLeft: 10,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: "#ebebeb",
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(0,0,0,0.1)",
          },
        },
        notchedOutline: {
          borderColor: "rgba(0,0,0,0.04)",
        },
      },
    },
  },
});
