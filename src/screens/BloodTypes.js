import React from 'react'
import {Text , View , StyleSheet, ScrollView, Image} from 'react-native'


function BloodTypes (){
    return(
        <View style={{flex:1, backgroundColor:'#ffff'}}>
        <ScrollView>
        <Image source={require('../../images/blood-types-pic.png')} style={{width:'100%', height:180}}/>
        
      <View style={{margin:10}}>
          <Text selectable 
          style={{fontSize:18, backgroundColor:'#f0efed', width:'70%',
           height:30, borderRadius:8,fontWeight:'bold'}}>Blood Group System :</Text>
          <Text>There are 4 main blood groups defined by the ABO system: 
              blood group A – has A antigens on the red blood cells with anti-B antibodies in the plasma.
               blood group B – has B antigens with anti-A antibodies in the plasma.
               blood group O – has no antigens, but both anti-A and anti-B antibodies in the plasma.</Text>
      </View>


      <View style={{margin:5}}>
          <Text selectable style={{fontSize:20, backgroundColor:'#f0efed', width:'50%', height:30, borderRadius:8,fontWeight:'bold'}}>Blood Types :</Text>
          <Text>Although all blood is made of the same basic elements, not all blood is alike. Infect, there are
eight different common blood types, which are determined by the presence or absence of certain
antigens–substances that can trigger an immune response if they are foreign to the body. Since
some antigens can trigger patient’s immune system to attack the transfused blood, safe blood
transfusions depend on careful blood typing and cross-matching. There are four major blood
groups determined by the presence or absence of two antigens–A and B–on the surface of red
blood cells:
</Text>
      </View>
           
           <View style={{margin:5,justifyContent:'center',alignItems:'center'}}>
               <Text style={{fontWeight:'bold', width:'100%' , height:45, fontSize:16, backgroundColor:'#e3e3e3',padding:2,borderRadius:8,margin:5}}>Group A – has only the A antigen on red cells (and B antibody in the plasma)</Text>
               <Text style={{fontWeight:'bold', width:'100%' , height:45, fontSize:16, backgroundColor:'#e3e3e3',padding:2,borderRadius:8,margin:5}}>Group B – has only the B antigen on red cells (and A antibody in the plasma)</Text>
               <Text style={{fontWeight:'bold', width:'100%' , height:45, fontSize:16, backgroundColor:'#e3e3e3',padding:2,borderRadius:8,margin:5}}>Group AB – has both A and B antigens on red cells (but neither A nor B antibody in the plasma)</Text>
               <Text style={{fontWeight:'bold', width:'100%' , height:45, fontSize:16, backgroundColor:'#e3e3e3',padding:2,borderRadius:8,margin:5}}>Group O – has neither A nor B antigens on red cells (but both A and B antibody are in the plasma)</Text>
           </View>


           <View style={{margin:5,justifyContent:'center',alignItems:'center'}} >
               <Text style={{fontWeight:'bold'}}>There are very specific ways in which blood types must be matched for a safe transfusion.</Text>
               <Text style={{fontWeight:'bold'}}>See The Chart Below:</Text>
               <Image source={require('../../images/blootypes.png')} style={{marginTop:10,width:'100%', height:120}} />
               <Text style={{fontWeight:'bold',marginTop:10}}>In addition to the A and B antigens, there is a third antigen called the Rh factor, which can be
                either present (+) or absent ( – ). In general, Rh negative blood is given to Rh-negative patients,
                and Rh positive blood or Rh negative blood may be given to Rh positive patients.</Text>


                <Text style={{fontWeight:'bold',marginTop:10}}>The universal red cell donor has Type O negative blood type. The universal plasma donor has
                Type AB blood type.
                </Text>


           </View>
         


     


           </ScrollView>
      </View>
    )

}

export default BloodTypes