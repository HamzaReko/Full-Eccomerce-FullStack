import {grey,teal} from '@mui/material/colors';



const getDesignTokens = (mode) => ({
  palette: {
    // @ts-ignore
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          ali: {
            main: "#64748B",
          },

          favColor: {
            main: grey[300],
          },
          hamzaColor: {
            main: grey[200],
            bgcolorwhite:grey[300]
          },
        }
      : {
          // palette values for dark mode
          ali: {
            main: "#008080",
          },

          favColor: {
            main: grey[800],
          },
          hamzaColor: {
            main: grey[900],
            bgcolorwhite:"white"
          },
        }),
  },
});


export default getDesignTokens;
