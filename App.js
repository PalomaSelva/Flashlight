import React from 'react';
import {View, SafeAreaView,StatusBar,Text,Image, StyleSheet} from 'react-native';
const App = ()=>{
  return  (
    <SafeAreaView style={style.container}>  
      <StatusBar backgroundColor={'#DCC3B3'}/>
      <View>
        <Text style={style.texto}>FlashLight</Text>
        <Image></Image>
      </View>
    </SafeAreaView> 
)
}

export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#DCC3B3',
},
  texto:{
    fontSize:70,
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
    

  },
})