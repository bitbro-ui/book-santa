import React,{Component} from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import Myheader from '../components/myheader';
import firebase from 'firebase';
import db from '../config';
import config from '../config';
import { TextInput } from 'react-native-gesture-handler';

export default class Bookrequest extends Component {
  constructor(){
    super();
    this.state={
      userid:firebase.auth().currentUser.email,bookname:'',reason:''
    }
  }
    render(){
  return (
    <View style={{flex:1}}>
      <Myheader title="request book"/>
      <KeyboardAvoidingView style ={styles.keyboardstyle}>
        <TextInput style = {styles.formTextInput} placeholder ={"enter book name"} onChangeText={(text)=>{this.setState({bookname:text})}}
        value ={this.state.bookname}/>
        </KeyboardAvoidingView>
    </View>
  );
}
}

const styles=StyleSheet.create({ formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:"50%", justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor:"#000", shadowOffset:{ width:0, height:8, }, shadowOpacity:0.44, shadowRadius:10.32, elevation:16, marginTop:20 }, })