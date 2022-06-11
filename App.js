import React from 'react';
import {View, SafeAreaView,StatusBar,Text,Image, StyleSheet} from 'react-native';
const App = ()=>{
  const toggle = true;  
return  (
    <SafeAreaView style={ toggle ? style.container_light_on : style.container_light_off}>  
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'}/>
      <View>
        <Image style={ toggle ? style.img : style.img_Off} source={
          toggle 
          ? require('./assets/icons/eco-light.png') 
          : require('./assets/icons/eco-light-off.png')
        }/>

        <Image style={ toggle ? style.img : style.img_Off} source={
          toggle 
          ? require('./assets/icons/logo-dio.png') 
          : require('./assets/icons/logo-dio-white.png')
        }/>
       
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
    justifyContent: 'center',
    backgroundColor:'white',
},

container_light_off:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black'
},


  img:{
    resizeMode:'contain',
    alignSelf:'center',
    width:150,
    height:150,
},

  img_Off:{
    resizeMode:'contain',
    alignSelf:'center',
    tintColor:'white',
    width:150,
    height:150,
},

})