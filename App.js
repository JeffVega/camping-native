import React from 'react';
import {StyleSheet, Text, View,TextInput,Image,ScrollView,ImageBackground} from 'react-native';
import {Button,Input} from 'react-native-elements';
import {CheckBox} from 'react-native-elements'
import Header from './components/header'
export default class App extends React.Component {
  state = {
    text:"",
    camper:[],
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
  checkedList =() =>{
    this.setState({
      checked: true
    })
  }
  renderTodos = () =>{
    return this.state.camper.map(camper => {
      return (
        <View>
<CheckBox
  key={camper}  
  containerStyle={styles.checkbox}
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  onPress={() => this.setState({checked: !this.state.checked})}
  checked={this.state.checked}
/>
        <Text style={styles.list}
        onLongPress={() =>{this.deleteCamper(camper)}}
        key={camper + "text"}>{camper}</Text>
        </View>
      )
    })
  }
    render() {
        return ( 
        <ImageBackground style={styles.backgroundImage} source={require('./imgs/backk.jpg')} >
       
          
          <Image style={styles.headerimg} source={require('./imgs/fireplace.gif')} />
        <View style={styles.container}>
                    
                    <Text style={styles.header}>Camping Remind</Text>
                        <TextInput 
                        style={styles.input}
                        onChangeText={(text)=>this.setState({text})}
                        value={this.state.text}/>
                    <Button buttonStyle={styles.button} color={"white"} onPress={this.addCamper} title='BUTTON'/>
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
        opacity: 0.7
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
      fontSize:25
    },
    checkbox:{
      marginLeft:10
    },
    button:{
      backgroundColor:"lightgreen",
      borderWidth:0,
      borderRadius: 5,

    }
});
