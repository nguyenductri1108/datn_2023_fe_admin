import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themes/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
