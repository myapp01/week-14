import React from 'react'
import {View,Text,Image} from 'react-native'

const App=()=>{
  return(
    <View>
      <Image
        style={{width:'100%',height:200}}
        source={require('./images/Wolf.jpg')}
        />
        <Image
        style={{width:'100%',height:200}}
        source={{uri:'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80'}}
        />
        <Image
        style={{width:'100%',height:200}}
        source={{uri:'https://images.unsplash.com/photo-1472491235688-bdc81a63246e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'}}
        />
    </View>
  )
}
export default App