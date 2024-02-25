import React,{useContext} from 'react'
import { Image, Text,View} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';


const Pluie=(props) =>{    
  const {state,signin} =useContext(AuthContext);
  return ( 
    <View style={styles.container}>
      <Image  style={styles.picture} source={props.picture}  />
      <Text style={styles.text}>{props.daata}</Text>
    </View>
  );
}

export default Pluie;

const styles = ScaledSheet.create({   
    text:{ 
      fontSize: '40@vs',
      paddingTop: hp("10%"),
      paddingBottom: hp("3%"),
      marginLeft: wp("28%"),
      position:'absolute',
    },

    picture:{
      position:'absolute',
      marginLeft: wp("1%"),
      width: '240@s',
      height: '183@s'
    },   
});
