import React from 'react';
import {View, Text, Image , ScrollView} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';





function About (){
    return(
        <ScrollView style={{backgroundColor:'#a30505'}}>


            <View style={{alignItems:'center',justifyContent:'center',width:'100%',height:180,}}>
            <Text style={{fontSize:30,fontWeight:'bold',color:'#ffff'}}> Who We Are?</Text>
            <Text style={{color:'#c4c712'}}> Saylani Blood Bank </Text>
            </View>



        <View  style={{flex:1, backgroundColor:'#ffff' , height:'100%',  borderRadius:20}}>
            <View style={{marginLeft:15,marginTop:10}}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#aba503',}}>INTRODUCTION</Text>
            </View>

            <View style={{marginLeft:10,width:'90%',alignItems:'center'}}>
                <Text style={{color:'black'}}> Alhamdollilah, Allah has accorded Saylani Welfare with the highest favor by sending those
                    people our way who follow the teachings of the Holy Quran and Hadith, give zakat, fidyah, fitrah, 
                    khairat and other donations to help us help those in need. The purpose of sending this message 
                    to you is so that you not only spread this message to others but also play your part in helping 
                    us to continue serving and helping the needy till the Day of Judgment</Text>
                </View>


                <View style={{marginLeft:10}}>                  
                    <Text style={{fontWeight:'bold',color:'#212121'}}>Muhammad Bashir Farooqi</Text>
                    <Text style={{fontWeight:'bold',color:'#212121'}}>Saylani Welfare International Trust</Text>
                    </View>

                    <View style={{marginTop:20,marginLeft:15}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#aba503',}}>ABOUT US</Text>
                    </View>

                    <View style={{flex:1 , display:'flex', flexDirection:'row' , flexWrap:'wrap',justifyContent:'space-around',}}>
                        <View style={{width:'40%',margin:5,height:200}}>
                            <Text style={{borderRadius:5,width:'100%',backgroundColor:'#a30505',color:'#c4c712',fontWeight:'bold'}}>Our Mission</Text>
                            <Text>Our Road Map start with our Mission which is enduring.it declares our purpose as a company and services as the standard against.</Text>
                        </View>

                        <View style={{width:'40%',margin:5,height:200,}}>
                            <Text style={{borderRadius:5,width:'100%',backgroundColor:'#a30505',color:'#c4c712',fontWeight:'bold'}}>Our Vision</Text>
                            <Text>Our Road Map start with our Mission which is enduring.it declares our purpose as a company and services as the standard against.</Text>
                        </View>

                        <View style={{width:'40%',margin:5,height:200}}>
                            <Text style={{borderRadius:5,width:'100%',backgroundColor:'#a30505',color:'#c4c712',fontWeight:'bold'}}>Our Culture</Text>
                            <Text>Our Road Map start with our Mission which is enduring.it declares our purpose as a company and services as the standard against.</Text>
                        </View>

                        <View style={{width:'40%',height:200,margin:5}}>
                            <Text style={{borderRadius:5,width:'100%',backgroundColor:'#a30505',color:'#c4c712',fontWeight:'bold'}}>Live our values</Text>
                            <Text>Our Road Map start with our Mission which is enduring.it declares our purpose as a company and services as the standard against.</Text>
                        </View>

                    </View>

                    <View style={{marginLeft:15}}>
                        <Text style={{fontSize:18,fontWeight:'bold',color:'#aba503',}}>Follow us:</Text>
                    </View> 
                    <View style={{margin:10,flex:1 , display:'flex', flexDirection:'row' , flexWrap:'wrap',justifyContent:'space-around',}}>
                    <FontAwesome name="twitter" style={{fontSize:30,color:'#78b5e3' }} />
                    <FontAwesome name="facebook" style={{fontSize:30,color:'#2459a3'}} />
                    <FontAwesome name="instagram" style={{fontSize:30,color:'#8f285f' }} />
                    <FontAwesome name="snapchat" style={{fontSize:30, color:'#eaf51d',}} />
                    </View>

                        
                        

                    
    
                   
            
        </View>
        </ScrollView>
    )
}

export default About