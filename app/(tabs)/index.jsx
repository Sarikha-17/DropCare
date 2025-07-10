import { View, Text ,StyleSheet, ImageBackground, TouchableOpacity, Pressable} from 'react-native'
import React from 'react'
 import back from "@/assets/images/background.png"
import { Link } from 'expo-router'
const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
      source={back}
      style={styles.image}
      resizeMode='cover'>
      
      <Text style={styles.texts}>DropCare</Text>
      <Text style={styles.sub}>Design for privacy,build for trust</Text>
     <View style={styles.buttonrow}>
      <Link href={"/explore"} style={{marginHorizontal:'auto'}} asChild>
     
      <Pressable style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>

      </Link>
      <Link href={"/explore"} style={{marginHorizontal:'auto'}} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Sign In</Text>
        </Pressable>
      </Link>
      </View>
    </ImageBackground>
    </View>
  )
}

export default app

const styles= StyleSheet. create({
  container:{
    flex:1,
    justifyContent:'center',
    flexDirection:'column',
  },
  texts:{
    color:'white',
    fontSize:35,
    fontWeight:'bold',
    textAlign:'center',
    top:350,
  },
  buttonrow:{
    flexDirection:'row',
    justifyContent:'space-around',
    gap:20,
    top:400,
    
   
  },
  button:{
   paddingVertical: 10,
    paddingHorizontal: 24,
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: 'pink',
    marginHorizontal: 10,
  },
  image:{
    width:'100%',
    height:'100%',
  },
  text:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: 1,
  },
  sub:{
    fontSize:20,
    fontStyle:'italic',
    color:'white',
    textAlign:'center',
    top:360,
  }

})