import { Provider } from "react-redux";
import { store } from "../redux/store";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themes/theme";

function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />; //{" "}
            </ChakraProvider>
        </Provider>
    );
}

export default MyApp;
