import React, { useState ,useEffect,useContext} from 'react';
import {
  Alert, 
  Modal,
  Pressable, 
  Text,
  StyleSheet, 
  Button,
  View,
  ScrollView,
  Image,
  ImageBackground,
  Picker,
  StatusBar,
  ActivityIndicator,
  Linking} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {Context as AuthContext} from '../context/AuthContext';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Footer =(props) => { 

  const {state,signin} =useContext(AuthContext);
  const handleWebPress =() => {
    Linking.openURL("http://www.yobeen.com");
  }
 
return(
  <View style={styles.container}>
    <TouchableOpacity  onPress={handleWebPress}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>&copy;Powered by </Text>
        <Text style={styles.text2}>Yobeen</Text>
      </View>
    </TouchableOpacity>
  </View>
);
};

export default Footer;

const styles = ScaledSheet.create({

  container:{
    flexDirection:'row'
  },

  textContainer:{
    flexDirection:'row',
    marginLeft: '200@s'
  },

  text1:{
    fontSize: '14@s',
    color:"black",               
  },

  text2:{
    fontSize: '14@s',
    color:'#f5af19',
    fontWeight:'bold',
  },
  
});