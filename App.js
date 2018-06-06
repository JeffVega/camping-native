import React from 'react';
import {StyleSheet, Text, View,TextInput,Image,ScrollView} from 'react-native';
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
        <Text 
        onPress={() =>{this.deleteCamper(camper)}}
        key={camper}>{camper}</Text>
      )
    })
  }
    render() {
        return (<View>
          <Image style={styles.headerimg} source={require('./imgs/campfire.png')} />
        <View style={styles.container}>
                    
                    <Text style={styles.header}>Camper Application</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}/>
                    <Button style={styles.bu}color={"blue"} onPress={this.addCamper} title='BUTTON'/>
                    <ScrollView contentContainerStyle={styles.contentContainer}>
  
                                {this.renderTodos()}
                                </ScrollView>
        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin:10
    },
    input: {
        width: 250,
        borderColor: "green",
        borderWidth: 2,
        marginBottom: 10,
    },
    header:{
      fontSize:30,
      color:"blue",
      fontWeight:'bold'
    }, contentContainer: {
      paddingVertical: 20
    }
});
