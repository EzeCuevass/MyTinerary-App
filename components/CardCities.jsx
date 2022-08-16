import React from "react"
import { FlatList, ScrollView, View } from "native-base"
import { StyleSheet } from "react-native"
import { Box } from "native-base";
import { Image } from "native-base";
import { Text, Button } from "native-base";
import { SafeAreaView } from "react-native";
export default function CardCities({cardFilter}){
    // console.log(cardFilter);
    return (
    <SafeAreaView style={styles.cardscontainer}>
        <FlatList 
            data={cardFilter}
            key={(item)=>item._id}
            renderItem={({item, index}) => {
                return (<View style={styles.container}>
                    <View style={styles.city}>
                        <Image source={{ uri: item.photo }} alt="photo" style={styles.photos}/>
                        <Text style={styles.texts}>{item.cityname}</Text>
                        <Button size="lg" colorScheme="primary">
                            Go to the city!
                        </Button>
                    </View>
                </View> )
            }}
        />
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    cardscontainer: {
        backgroundColor: "#cfa32b",
        color: "#fff",
        justifyContent: "center",
        paddingBottom: 80,
    },
    photos: {
        width: 500,
        height: 200,
        borderRadius: 20,
    },
    texts: {
        color: "#fff",
        
    },
    city: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
    },
    
})