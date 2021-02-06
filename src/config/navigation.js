import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import DonateBlood from '../screens/DonateBlood'
import DonorsDetails from '../screens/DonorsDetails'
// import login from '../screens/login
import BloodTypes from '../screens/BloodTypes'
import About from '../screens/About'

const Stack = createStackNavigator();



function AppNavigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

        {/* <Stack.Screen name="login"  component={login} /> */}



          <Stack.Screen name="Home"  component={Home} options={{
              title:'Dashboard',
              headerStyle:{
                backgroundColor:'#a30505',
              },
              headerTintColor: '#ffffff',
              headerTitleStyle: {
                fontWeight: 'bold',
                fontFamily:'',
                
              },

              
          }} />
          <Stack.Screen name="Donate Blood" component={DonateBlood} 
          options={{
            title:'Donate Blood',
            headerStyle:{
              backgroundColor:'#a30505',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily:''
            },

            
        }}/>

<Stack.Screen name="Donors Details" component={DonorsDetails} 
          options={{
            title:'Donors Details',
            headerStyle:{
              backgroundColor:'#a30505',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily:''
            },

            
        }}/>


<Stack.Screen name="Blood Types" component={BloodTypes} 
          options={{
            title:'Blood Types',
            headerStyle:{
              backgroundColor:'#a30505',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily:''
            },      
        }}/>


<Stack.Screen name="About us" component={About} 
          options={{
            title:'About us',
            headerStyle:{
              backgroundColor:'#a30505',
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamily:''
            },      
        }}/>


        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default AppNavigation;