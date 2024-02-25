import React from 'react'
import {StyleSheet,SafeAreaView} from 'react-native'
import RNSpeedometer from 'react-native-speedometer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const Rayon=(props) =>{
 State={
value:70,
 };
 onchange=value=>this.setState({value:parseInt(value)});
 
   const Tab=[
     {name:'',
   labelColor:'black',
   activeBarColor:'#fceabb',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#fceabb',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#fceabb',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#fceabb',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   
   {name:'',
   labelColor:'black',
   activeBarColor:'#FFD200',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#FFD200',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#FFD200',

   },
   {name:'',
   labelColor:'transparent',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#FFD200',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#FDC830',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#FDC830',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F0CB35',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F0CB35',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F0CB35',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F0CB35',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#f8b500',

   },
   
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#f8b500',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },

  
   {name:'',
   labelColor:'black',
   activeBarColor:'#fe8c00',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#fe8c00',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F16529',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F16529',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F15A29',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F15A29',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F15A29',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F15A29',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#F15A29',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#E44D26',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#E44D26',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#f83600',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'white',

   },
   {name:'',
   labelColor:'black',
   activeBarColor:'#f83600',

   },
  ]
 
 
 return (
  <SafeAreaView style={styles.container}>
    <RNSpeedometer
      defaultValue={0}
      value={props.dataa}
      size={ wp("70%")}
      minValue={0}
      maxValue={3000}
      needleImage={require('../images/sped.png')}
      labels={Tab}
      allowedDecimals={3}
      labelStyle={styles.aaa}
      innerCircleStyle={styles.half}
    />
  </SafeAreaView>

   );
}
export default Rayon;

const styles = StyleSheet.create({
  container:{
    marginLeft: wp("2%"),
    flex: 1, 
  },

  half:{
    color:'black',
    width: hp("27%"),
    height: wp("27%")
  },

  aaa:{
    color:'transparent'
  },

  needleImage:{
    height:150,
    width:100
  },

  innerCircle:{
    backgroundColor:'black'
  },

  textInput:{
    borderBottomWidth:0.3,
    borderBottomColor:'black',
    height:50,
    fontSize:16,
    marginVertical:50,
    marginHorizontal:20
  },
}
);