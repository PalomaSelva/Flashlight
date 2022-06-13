import React, { useState, useEffect } from 'react';
import {View, SafeAreaView,StatusBar,Image, StyleSheet, TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';
const App = () => {
  const [toggle, setToggle] = useState(false); 
  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle); //Alterna os containers

  useEffect(() => {
    // Liga flash do celular
    Torch.switchState(toggle); //Trocar o estado do flash 
  },[toggle]);

//Quando o celular for chacoalhado, o toggle irá mudar ---- Quando cachoalhar a lanterna vai ligar/desligar
  useEffect(()=>{
    const substription=RNShake.addListener(()=>{
      setToggle(oldToggle => !oldToggle)
    });
    return ()=>substription.remove()
});

  return  (
    <SafeAreaView style={ toggle ? style.container_light_on : style.container_light_off}>  
      <StatusBar barStyle='dark-content' translucent={true} backgroundColor={'transparent'}/>
      <View>
      
          <TouchableOpacity onPress={

            handleChangeToggle

          }>

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
       
           </TouchableOpacity>
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