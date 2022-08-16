import React, { useState } from "react";
import CardCities from "./CardCities";
import Error from "./Error"
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
// import axios from "axios";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux" 
import citiesActions from "../redux/actions/citiesActions"
import { View } from "native-base";

function CitiesFilter(){
    const [inputValue, setInputValue] = useState("") 
    const dispatch = useDispatch() 
    useEffect(()=>{
        dispatch(citiesActions.getCities())
        dispatch(citiesActions.filterCities(inputValue))
    }, [inputValue])
    const citiesfilter = useSelector(store=>store.citiesReducer.filterCity) 
    console.log(citiesfilter);
    return (
        <>
            <View>
            {/* <TextField id="outlined-basic" label="Search" variant="outlined" onKeyUp={(event) => setInputValue(event.target.value)}/> */}
            <TextInput 
                onChangeText={newText => setInputValue(newText)}
                // ={(event)=> setInputValue(event.target.value)}
                style={styles.input}
                placeholder="Search Cities"
            />
            </View>
        
        <View>
            {citiesfilter?.length> 0 ? (<CardCities cardFilter={citiesfilter} />) : (<Error />)}
        </View>
        </>
    )
}
export default CitiesFilter
const styles = StyleSheet.create({
    input: {
        borderColor: "#4287f5",
        padding: 10,
        borderWidth: 3,
        margin: 1,
    }
})