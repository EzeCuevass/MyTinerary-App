import * as React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { NativeBaseProvider, Box, Text } from "native-base";
import {configureStore as createStore} from "@reduxjs/toolkit"
import Navbar from "./components/Navbar"
import mainReducer from './redux/reducers/mainReducers';
import { Provider } from 'react-redux';
export default function App() {

  const reduxStore = createStore({ reducer: mainReducer })


  return (
    <Provider store={reduxStore}>
    <NavigationContainer>
      <NativeBaseProvider>
        <Navbar />
      </NativeBaseProvider>
    </NavigationContainer>
    </Provider>
  );
}
