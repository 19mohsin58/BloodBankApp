import React from 'react'
import useState from 'react'
import {View , Text , TouchableOpacity,TextInput, Button,StyleSheet,ToastAndroid} from 'react-native';
import { LoginManager, AccessToken } from 'react-native-fbsdk';
import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
import {icon} from 'react-native-elements';
import Home from '../screens/Home' 
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';





class login extends React.Component{
  
  render(){

      // const [email , setEmail] = useState('')
      // const [passwordSecured, setPasswordSecured] = useState(true);

      // function isEmailValid(email){
      //   const re = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3]\.[0-9]{1,3]\.[0-9]{1,3]\.[0-9]{1,3]\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
      //   return re.test(String(email).toLowerCase())

      // }




      GoogleSignin.configure({
        webClientId: '533157199199-8f8dmhfr8cvb3vag0d88as209tutri23.apps.googleusercontent.com',
      });




      async function onGoogleButtonPress() {
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
      
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential).then(()=>{ ToastAndroid.show('Successfully Signed in with Google!',2000);     })
        
      }
      




        const facebook_login = () =>{
            // Attempt a login using the Facebook login dialog asking for default permissions.
LoginManager.logInWithPermissions(["public_profile"]).then(
    function(result) {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
            result.grantedPermissions.toString()
        );
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );
        
        }
        return(
            <View style={{flex:1}}>

{/* 
<TextInput 
style={{width:'100', height:44,backgroundColor:'#f1f3f6',borderRadius:6,paddingHorizontal:10}}
placeholder={'Email'}
keyboardType='email-address'
textContentType='emailAddress'
autoCapitalize={false}
onChangeText={(text)=>setEmail(text)}
/>

{
  !isEmailValid(email) && email.length > 0 && (
    <Text style={{marginTop:10, color:'red'}}>Email Adress is not Valid.</Text>
  )
}


<View style={styles.inputView}>
 <Icon color='#333' name='lock' type='font-awesome' size={20}/>
</View> */}




<Container>
        
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
        </Content>
      </Container>






            <Button title="Login With Facebook" onPress={facebook_login} />
            <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress()}
    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  inputView:{
    width:'100%',
    height:44,
    backgroundColor:'#f1f2f6',
    borderRadius:8,
    paddingHorizontal:10,
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }

})

export default login;