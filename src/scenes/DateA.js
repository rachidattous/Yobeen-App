import React from 'react'
import { 
  Text, 
  View
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs} from 'react-native-size-matters';


  export default class Date extends React.Component{
    constructor() {
        super();
    }
    
    render() {
      return (
        <View > 
          <Text 
            style={styles.text}
          >
            {this.props.date2}
          </Text>
        </View>
      );
    }
  }

  const styles = ScaledSheet.create({
    text:{
        fontSize: '11@s',
        marginLeft: wp("6.5%"),
        color:'#4A54A4',
        fontWeight:"bold"
    }
  });