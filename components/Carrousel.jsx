import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, FlatList, Dimensions, Animated, SafeAreaView } from "react-native";
import { Text, View, Image } from "native-base"
import Data from "../data.json"

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ESPACIO_CONTNEDOR = width * 0.7
const ESPACIO = 10;

export default function Carrousel(){
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar hidden/>
            <FlatList 
                data={Data}
                horizontal= {true}
                showsHorizontalScrollIndicator={false}
                key={(item)=> item.id}
                renderItem={({item, index}) => {
                    return <View style={{width: ESPACIO_CONTNEDOR}}>
                        <View style={{
                            marginHorizontal: ESPACIO,
                            padding: ESPACIO,
                            borderRadius: 34, 
                            backgroundColor: "#4287f5",
                            alignItems: "center",
                        }}>
                            <Image source={{ uri: item.image }} style={styles.imagecarrousel} alt="imagecarrousel"/>
                            <Text style={styles.name}>{item.name}</Text>
                        </View>
                    </View>
                }}
            />
        </SafeAreaView>
    )   
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "#cfa32b"
        marginTop: 120,
    }
    ,
    imagecarrousel: {
        width: "100%",
        height: ESPACIO_CONTNEDOR * 1.2,
        resizeMode: "cover",
        borderRadius: 20,
        marginBottom: 10,
    },
    name: {
        color: "#fff",
    }
})
