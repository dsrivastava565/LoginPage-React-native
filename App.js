import React, { Component } from 'react';
import { Alert,Text, View ,Button,StyleSheet,TextInput,AppRegistry,TouchableOpacity} from 'react-native';
// import Card from 'react-native-card-view';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HelloWorldApp extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }
  render() {
    return (
     <View style = {styles.container}>
     <Text style = {{fontSize: 40,marginBottom:85,color:"#fff",fontFamily:'sans-serif-light',fontStyle:'italic',alignItems:'center'}}>My Test App</Text>
     <View style={{ width: 300, height: 220, flexDirection: 'column', backgroundColor:'white',justifyContent:'center',alignItems:'center', borderColor: '#fff',
  borderRadius: 10,elevation: 10}}>
     <View>
     <Text style={{color:'#31625c',fontSize:22}}>Login/SignUp</Text>
     </View>
     <View style={styles.loginContainer}>
            <View style ={styles.inputbar}>
          <View style={{height:30,width: 30,marginTop:4,alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#ebebeb'}}> 
          <Icon name="at" size={16} color="#4c4c4c" />
            </View>
          <TextInput 
                  style ={{
                    backgroundColor:'#fff',
                    color: '#000',
                    width: 200,
                    paddingTop: 5,
                    paddingLeft: 10,
                    height:30,
                    paddingBottom: 5,
                    paddingRight: 10,
                    margin: 10,
                    marginTop: 1
                    
                  }}
                   placeholder='Your Email Address'/>
            </View>
            <View style={styles.seperator}></View>
            <View style ={styles.inputbar}>
            <View style={{height:30,width: 30,marginTop:4,alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:'#ebebeb'}}> 
            <Icon name="lock" size={16} color="#4c4c4c"/>
            </View>
              <TextInput
              style ={{
                backgroundColor:'#fff',
                color: '#000',
                width: 200,
                paddingTop: 5,
                height:40,
                paddingLeft: 10,
                paddingBottom: 5,
                paddingRight: 10,
              
              }}
              placeholder='Your password' />
              </View>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <View style={styles.buttonContainerLogin}>
              <Button 
              onPress ={this._onPressButton}
              title= "Login"
              color = "#31625c"
              ></Button>
           </View>
           <View style={styles.buttonContainerRegister}>
              <Button 
              onPress ={this._onPressButton}
              title = "Register"
              color = "#31625c"
              
              ></Button>
           </View>
            
          </View>
          </View>
       </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#31625c'
  },loginContainer:{
    padding: 5,
    height:90.8,
    marginTop:15,
    backgroundColor: 'white',
    marginBottom:10

  },seperator:{
    borderWidth:0.8,
    borderBottomColor:'#ebebeb',
    marginBottom: 5,
    marginTop: 5
  },
  buttonContainerLogin:{
    
    padding:5,
    fontSize: 16,
    width:115,
    alignItems:'center',
    textAlign:'center',
    marginRight:10,
    height:40,
    color: '#fff'
  },
  buttonContainerRegister:{
    
    padding:5,
    fontSize: 16,
    width:115,
    alignItems:'center',
    textAlign:'center',
    marginRight:10,
    height:40,
    color: '#31625c'
  },

inputbar: {
  flex: 1,
  justifyContent:'space-between',
  flexDirection: 'row'
}}
);

AppRegistry.registerComponent('HelloWorldApp', () => HelloWorldApp);