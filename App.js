import React from 'react';
import {View, SafeAreaView,StatusBar,Text,Image, StyleSheet} from 'react-native';
const App = ()=>{
  return  (
    <SafeAreaView style={style.container_light_off}>  
      <StatusBar backgroundColor={'black'}/>
      <View>
        
       
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
container_light_on:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white',
},

container_light_off:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
},

  texto:{
    fontSize:70,
    color:'white',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: {width: 1, height: 2},
    textShadowRadius: 5,
    

  },
})