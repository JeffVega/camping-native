import React from 'react';
import {StyleSheet, Text, View,TextInput,Image,ScrollView,ImageBackground} from 'react-native';
import {Button,Input} from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import Header from './components/header'
export default class App extends React.Component {
  state = {
    text:"",
    camper:[]
  }
  addCamper = () => {
   let newText = this.state.text;
   let arr = this.state.camper;
   arr.push(newText);
   this.setState({camper:arr,text:""})
  }
  deleteCamper = (del) => {
    let arr = this.state.camper;
    let pos = arr.indexOf(del)
    arr.splice(pos,1);
    this.setState({camper:arr})
  }
  renderTodos = () =>{
    return this.state.camper.map(camper => {
      return (
        <Text style={styles.list}
        onPress={() =>{this.deleteCamper(camper)}}
        key={camper + "text"}>{camper}</Text>
      )
    })
  }
    render() {
        return ( 
        <ImageBackground style={styles.backgroundImage} source={require('./imgs/backk.jpg')} >
       
          
          <Image style={styles.headerimg} source={require('./imgs/fireplace.gif')} />
        <View style={styles.container}>
                    
                    <Text style={styles.header}>Camper Application</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}/>
                    <Button style={styles.button} color={"white"} onPress={this.addCamper} title='BUTTON'/>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
  
                                {this.renderTodos()}
                                </ScrollView>
        </View>
           
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
  backgroundImage:{
    flex: 1,
    resizeMode: 'cover'
  },
    headerimg:{
      marginTop:30,
      marginLeft: 150,
      alignItems: 'center',
      justifyContent: 'center',
      width: 100, 
      height: 100,
    },
    container: {
      marginTop: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    },
    input: {
        width: 250,
        backgroundColor: '#fff',
        borderColor: "grey",
        borderWidth: 2,
        marginBottom: 10,
    },
    header:{
      fontSize:30,
      color:"lightgreen",
      fontWeight:'bold'
    }, 
    contentContainer: {
      paddingVertical: 20
    },
    list:{
      color:'white',
      fontWeight:'bold',
      fontSize:45
    },
    button:{
      borderColor:"white"
    }
});
