import React ,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header,Icon} from 'react-native-elements';

const Myheader=props=>{return(
    <Header centerComponent={{text:props.title,style:{color:'orange',fontWeight:'bold',fontSize:16}}} backgroundColor="skyblue"/>
)}

export default Myheader;





















