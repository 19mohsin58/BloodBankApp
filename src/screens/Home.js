import { useLinkProps } from '@react-navigation/native';
import React from 'react';
import {View, Text,TouchableOpacity,StyleSheet, Image} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Slider from './Slider'
import FooterTabsIconTextExample from './Camera'




function Home(props){
    return(
      <View style={{flex:1 ,}}>
        <Slider />
        <View style={{flex:1 , display:'flex', flexDirection:'row' , flexWrap:'wrap' , backgroundColor:'white', justifyContent:'center', alignContent:'center' }}>

      

<View>
<TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate('Donate Blood')}
      >
          <FontAwesome name="plus-circle" style={{fontSize:50, color:'#a30505',}} />
        <Text>Donate Blood</Text>

      </TouchableOpacity>
</View>
    
    <View>
<TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate('Donors Details')}
      >
        <FontAwesome name="heart" style={{fontSize:50, color:'#a30505',}} />
        <Text>Available Donors</Text>

      </TouchableOpacity>
</View>


<View>
<TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate('Blood Types')}
      >
           <FontAwesome name="fire" style={{fontSize:50, color:'#a30505',}} />
        <Text>Blood Types</Text>

      </TouchableOpacity>
</View>
    
    <View>
<TouchableOpacity
        style={styles.button}
        onPress={()=>props.navigation.navigate('About us')}
      >
          <FontAwesome name="bookmark-o" style={{fontSize:50, color:'#a30505',}} />
        <Text>Who We Are?</Text>

      </TouchableOpacity>
</View>





</View>
<FooterTabsIconTextExample/>
</View>

)
    }


    const styles = StyleSheet.create({
  
  button: {
    
    backgroundColor: "#ffffff",
    width:140,
    height:100,
    padding: 10,
    alignItems:'center',
    margin:10,
    borderRadius:25,
    justifyContent:'center',
    shadowColor:'#dbdbdb',
    elevation: 8,
  },
  
});



export default Home;