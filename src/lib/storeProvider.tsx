"use client"
import React, {ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";


const StoreProvider = ({children}:{children:ReactNode}) => {
  
  return (
     <>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     {children}
     </PersistGate>
          </Provider>
     </>
  );
};

export default StoreProvider;
