import React, { useState } from 'react';
import {Text,View,Image,TextInput, Button ,TouchableOpacity,  } from 'react-native'
import { ScrollView, } from 'react-native-gesture-handler';
import database from "@react-native-firebase/database";






function DonateBlood (){

const [name,setName] = useState('');
const [lastName,setLastName] = useState('');
const [gender,setGender] = useState('');
const [lastDate,setLastDate] = useState('');
const [number,setNumber] = useState('');
const [bloodGroup,setbloodGroup] = useState('');
const [age,setAge] = useState('');
const [adress,setAdress] = useState('');
const [province,setProvince] = useState('');


    const set_data = () =>{

    let donor = {
        name ,
        lastName ,
        gender ,
        lastDate ,
        number ,
        bloodGroup , 
        age , 
        adress , 
        province ,
        
    }
   const donors = database().ref('donor');
   donors.push().set(donor).then(()=>{
       alert("Thanks For Donating Blood.!! We Have Added Your Details in Available Donors Check your details. ")
   })
   
    setAdress("")
    setAge("")
    setGender("")
    setLastDate("")
    setLastName("")
    setbloodGroup("")
    setName("")
    setNumber("")
    setNumber("")
    setProvince("")
    }
    

    



    return(
    <ScrollView style={{backgroundColor:'white'}}>
    <View style={{backgroundColor:'white', flex:1 , alignItems:'center',}}>

        
            <Image source={require('../../images/blooddonor.jpg')} style={{width:'100%', height:200}}/>

            <View style={{width:'80%' , height:30, backgroundColor:'#a30505', alignItems:'center', justifyContent:'center', margin:5}}>
                <Text  style={{color:'white', fontSize:20,color:'#c4c712'}}>Please Fill The From</Text>
            </View>

        <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder='First Name'   />
         </View>

         <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            <TextInput value={lastName} onChangeText={(text)=>setLastName(text)} placeholder='Last Name'   />
         </View>


         <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            <TextInput  value={gender} onChangeText={(text)=>setGender(text)} placeholder='Gender'   />
         </View>


         <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            <TextInput  value={lastDate} onChangeText={(text)=>setLastDate(text)} placeholder='Last Donation date'  />
         </View>




         <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            <TextInput  value={number} onChangeText={(text)=>setNumber(text)} placeholder='Phone Number'  keyboardType='phone-pad' />
         </View>

        <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            
            <TextInput  value={bloodGroup} onChangeText={(text)=>setbloodGroup(text)} placeholder='Blood Group'  />
        </View>

        <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            
            <TextInput  value={age} onChangeText={(text)=>setAge(text)} placeholder='Age'  keyboardType='phone-pad'/>
        </View>



        <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            
            <TextInput  value={adress} onChangeText={(text)=>setAdress(text)} placeholder='Adress'  />
        </View>


        <View style={{borderBottomWidth:1, width:'80%',margin:5}}>
            
            <TextInput  value={province} onChangeText={(text)=>setProvince(text)} placeholder='City'  />
        </View>

       
         <TouchableOpacity 
         onPress={set_data}
         style={{backgroundColor:'#a30505', width:100,height:30,
          alignItems:'center',justifyContent:'center',margin:5,borderRadius:5}}>
           <Text style={{color:'#b7bf17', fontSize:20}}>SUBMIT</Text>  
        </TouchableOpacity>
       
      
    </View>
    </ScrollView>
        
    )
}


export default DonateBlood