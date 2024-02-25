import React from 'react';
import { Animated,ImageBackground, View ,Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const Progress=({step, steps, height,colorb}) =>{
    const animatedValue=React.useRef(new Animated.Value(-1000)).current;
    const reactive=React.useRef(new Animated.Value(-1000)).current;
    const [width, setWidth]=React.useState(0);
    React.useEffect(() =>{
        Animated.timing(animatedValue, {
          toValue:reactive,
          duration:400,
          useNativeDriver: true,
        }).start();
    }, []);
    React.useEffect(() => {
        reactive.setValue(-width +(width*step)/steps);
    }, [step, width]);
    

    return ( 
   
    <View   
      onLayout={(e) =>{
        const newWidth =e.nativeEvent.layout.width;
        setWidth(newWidth);
      }}
      style={styles.view1}
    >    
      <ImageBackground
        source={require('../images/tub.png')}
        style={styles.ImageBackground}
      />
      <Image   source={require('../images/bare.png')}
        style={styles.image}
      />
      <Animated.View  
        style={{
          height: wp('19%'),
          width: hp('36%'),
          backgroundColor: '#C2B49A',
          zIndex:1,
          position:'absolute',
          transform:[{translateX:animatedValue,},],
        }}
      />  
    </View>      

)}
const ProgressBarr=(props) => {

  return (
    <View style={styles.container}>
        <View style={styles.view}>
          <Image  source={require('../images/rectangle.png')}  style={styles.transformm}/>
        </View>   
        <Progress 
          step={props.dataa}  steps={15} 
          height={1} 
        />
    </View>
  );
}


;
export default ProgressBarr;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    transform: [{ rotate: "-90deg" },],
  },

  transformm:{
    width: '54@s',
    height: '120@s'
  },

  view:{
    marginLeft: hp("21%")
  },

  view1:{
    marginLeft: hp("-15%"),
    position:'absolute',
    width: hp("36%"),
    height: wp("19%"),
    backgroundColor:'#F2EAE4',
    overflow:"hidden",
  },

  ImageBackground:{
    position: 'absolute',
  },

  image:{
    height: wp("3%"),
    width: hp("41%"),
    zIndex:2,
    position:'absolute',
  },

});