import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    ScrollView,
    ImageBackground
} from 'react-native';
import {Button, Input, List, ListItem} from 'react-native-elements';
import {CheckBox} from 'react-native-elements'
import Header from './components/header'
export default class App extends React.Component {
    state = {
        text: "",
        camper: [],
        checked:[]
    }
    addCamper = () => {
        let newText = this.state.text;
        let arr = this.state.camper;
        arr.push(newText);
        this.setState({camper:arr,text: ""})
    }
    deleteCamper = (del) => {
        let arr = this.state.camper;
        let pos = arr.indexOf(del)
        arr.splice(pos,1);
        this.setState({camper:arr})
    }

    // checkItem = item => {
    //   item = this.state.camper
    //   const { checked } = this.state;
  
    //   if (!checked.includes(item)) {
    //     this.setState({ checked: [...checked, item] });
    //   } else {
    //     this.setState({ checked: checked.filter(a => a !== item) });
    //   }
    // };
    renderTodos = () => {

        return this.state.camper.map((camper, index) => {
          const  {checked}  = this.state
          console.log("first",checked)
          checkItem = camper => {
            const  {checked}  = this.state
            console.log("in our loop",{checked})
            if (!checked.includes(camper)) {
              this.setState({ checked: [...checked, camper] });
            } else {
              this.setState({ checked: checked.filter(a => a !== camper) });
            }
          };
          console.log("last",{checked})
                return (
                    <View key={index}>
                        <CheckBox
                            title={camper}
                            containerStyle={styles.checkbox}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onLongPress={() => {
                              this.deleteCamper(camper)}}
                            onPress={() => checkItem(camper)}
                            checked={this.state.checked.includes(camper)}/>

                        {/* <Text
                            style={styles.list}
                            onLongPress={() => {
                            this.deleteCamper(camper)
                        }}>{camper}</Text> */}
                    </View>
                )
            })
    }
    render() {
        return (
            <ImageBackground
                style={styles.backgroundImage}
                source={require('./imgs/backk.jpg')}>
             <ScrollView contentContainerStyle={styles.contentContainer}>
                <Image style={styles.headerimg} source={require('./imgs/fireplace.gif')}/>
                <View style={styles.container}>

                    <Text style={styles.header}>Camping Remind</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text})}
                        value={this.state.text}/>
                    <Button
                        buttonStyle={styles.button}
                        color={"white"}
                        onPress={this.addCamper}
                        title='BUTTON'/>
                    

                        {this.renderTodos()}
                    
                </View>
              </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1
    },
    headerimg: {
        marginTop: 30,
        marginLeft: 150,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100
    },
    container: {
        marginTop: 10,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },
    input: {
        width: 250,
        backgroundColor: '#fff',
        borderColor: "grey",
        borderWidth: 2,
        marginBottom: 10,
        opacity: 0.7
    },
    header: {
        fontSize: 30,
        color: "lightgreen",
        fontWeight: 'bold'
    },
    contentContainer: {
        paddingVertical: 20
    },
    list: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    checkbox: {
        marginLeft: 10
    },
    button: {
        backgroundColor: "lightgreen",
        borderWidth: 0,
        borderRadius: 5
    }
});
