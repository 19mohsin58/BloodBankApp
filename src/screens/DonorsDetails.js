import React from 'react'
import {View , Text,Button , Image} from 'react-native'
import database from "@react-native-firebase/database"
import {connect } from 'react-redux'
import set_data from '../../store/actions/actions'
import useColorScheme from 'react-native/Libraries/Utilities/useColorScheme'
import { Container, Header, Content, List, ListItem,  } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler'



class  DonorsDetails extends React.Component{

  state={
    myList : []
  }

  componentDidMount(){
    database().ref('donor').on("value", dataSnap=>{
       this.setState({myList:Object.values(dataSnap.val())})
   })}
   
  

render(){
   
    const myData =this.state.myList.map((item,index )=>{
      return(
        <List key={index} style={{ padding:5, borderRadius:25, alignItems:'center',shadowColor:'#dbdbdb', backgroundColor:'#a30505', margin:5}}>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Name:{item.name}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Last Name:{item.lastName}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Gender:{item.gender}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Number:{item.number}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Age:{item.age}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>City:{item.province}</Text>
        <Text style={{color:'#b7bf17',fontWeight:'bold'}}>Blood Group:{item.bloodGroup}</Text>
      </List>
      )
    }) 
return(
<View style={{flex:1}}>
  <ScrollView>
  <Image source={require('../../images/d1.png')} style={{width:'100%', height:180}}/>
  

     {myData}
   
     </ScrollView>
</View>
)
}}


  
  //for functional use you have to install redux-thunk and applymiddleware method
  
  export default DonorsDetails