import React, { useState } from "react";
import {Text, View, Image, AspectRatio, Box} from "native-base"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import CitiesFilter from "./CitiesFilter";
function Cities(){
  

    return(
      <CitiesFilter />
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Cities 