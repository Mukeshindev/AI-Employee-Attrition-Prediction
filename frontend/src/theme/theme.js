import { createTheme } from "@mui/material/styles";


const theme = createTheme({

    palette: {

        primary: {

            main: "#1976d2",

        },


        secondary: {

            main: "#9c27b0",

        },


        background: {

            default: "#f5f7fb",

            paper: "#ffffff"

        }

    },


    typography: {

        fontFamily: [

            "Roboto",

            "Arial",

            "sans-serif"

        ].join(","),



        h3: {

            fontWeight: 700

        },


        h4: {

            fontWeight: 700

        },


        h5: {

            fontWeight: 600

        }

    },


    shape: {

        borderRadius: 12

    },


    components: {


        MuiButton: {

            styleOverrides: {

                root: {

                    textTransform: "none",

                    fontWeight: 600,

                    borderRadius: 10,

                    padding: "10px 25px"

                }

            }

        },


        MuiCard: {

            styleOverrides: {

                root: {

                    borderRadius: 15

                }

            }

        },


        MuiTextField: {

            defaultProps: {

                variant: "outlined"

            }

        }

    }

});


export default theme;