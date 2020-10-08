import React from 'react'
import {View,Text}from 'react-native'

const App=()=>{
  return(
    <View style={{
      flex:1,
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'stretch',
    }}>
  <View style={{width:50,height:50,backgroundColor:'#f08080'}}></View>
  <View style={{width:50,height:100,backgroundColor:'#e0ffff'}}></View>
  <View style={{width:50,height:200,backgroundColor:'#ffb6c1'}}></View>
  </View>
  )
}
export default App