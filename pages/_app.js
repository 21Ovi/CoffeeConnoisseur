import { createContext } from "react";
import "../styles/globals.css";
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const initailState = {
    latLong: "",
    coffeeStore: [],
  };
  return (
    <StoreContext.Provider value={{ state: initailState }}>
      {children}
    </StoreContext.Provider>
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;
