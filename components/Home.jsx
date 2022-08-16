import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground } from 'react-native';
import {Text, View, Image, AspectRatio, Box, Button} from "native-base"
import Carrousel from './Carrousel';
import Cities from "./Cities"
function Home(){
  const img = require("../images/playa.webp")
  return (<>
    <View style={styles.container}>
          <ImageBackground source={img} resizeMode="cover" style={styles.image}>
            <Box style={styles.box}>
              <Text style={styles.title}>MyTinerary</Text>
            </Box>
            <Box style={styles.boxtwo}>
              <Text style={styles.textbutton}>Click here to see our Cities!</Text>
              <Button size="lg" colorScheme="primary"
              component={Cities}>
                Go to Cities!
              </Button>
            </Box>
            <Carrousel />
          </ImageBackground>
      <StatusBar style="auto" />
    </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      // justifyContent: "center",
      alignItems: "center",
      width: "100%"
    },
    title: {
      fontSize: 50,
      paddingTop: 50,
      color: "#fff"
    },
    boxtwo: {
      marginTop: 40,
    },
    textbutton: {
      fontSize: 18,
      color: "#fff",
      marginBottom: 10,
    } 
  });
export default Home