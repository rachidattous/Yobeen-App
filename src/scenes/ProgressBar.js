import React,{useContext} from 'react';
import { Animated,Text, View ,Image, Dimensions} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {Context as AuthContext} from '../context/AuthContext';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

const { width, height } = Dimensions.get("window");

const Progress=({step, steps, height,colorb}) =>{

    const animatedValue=React.useRef(new Animated.Value(-1000)).current;
    const reactive=React.useRef(new Animated.Value(-1000)).current;
    const [width, setWidth]=React.useState(0);
    React.useEffect(() =>{
        Animated.timing(animatedValue, {
          toValue:reactive,
          duration:500,
          useNativeDriver: true,
        }).start();
    }, []);
    React.useEffect(() => {
        reactive.setValue(-width +(width*step)/steps+(width*8)/steps);
    }, [step, width]);
    
    return ( 
    <View style={styles.cont}> 
      <View style={styles.textContainer}>
        <Text  style={styles.text}>{step}°C</Text>
      </View>
      <View 
        onLayout={(e) =>{
          const newWidth =e.nativeEvent.layout.width;
          setWidth(newWidth);
        }}
        style={[styles.animatedViewContainer, { height, borderRadius: height,}]}
      >
        <Animated.View  
          style={[styles.animatedView, {
            borderRadius: height,
            height,
            transform:[{translateX:animatedValue,  /*animatedValue*/ },],
          }]}
        >
          <LinearGradient  /*Animated.View*/ colors={colorb}>
            <Text style={styles.text2}></Text>
          </LinearGradient>
        </Animated.View>
      </View>
    </View>
  )
}

const ProgressBar=(props) => {
  const {state,signin} =useContext(AuthContext);

  return (
      <View style={styles.container}>
        <Image
          style={styles.barsImage}
          source={require('../images/bars.png')}
        />
        <View style={styles.transform} >
          <Progress 
            step={props.dataMin}  steps={67} 
            height={hp('9%')} colorb={['#27AAE1','#F7941D']}
          />
          <Progress 
            step={props.dataMoy}  steps={67} 
            height={hp('9%')} colorb={['#ffc500','#F15A29']}
          />
          <Progress 
            step={props.dataMax}  steps={67} 
            height={hp('9%')} colorb={['#F15A29','#BE1E2D']}
          />
        </View>
      </View>
  );
};

export default ProgressBar;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: hp("2%")
  },

  barsImage:{
      zIndex: 3,
      position:'absolute',
      marginLeft: wp("10%"),
      width: '250@s',
      height: '290@s'
  },

  transform:{
    transform: [
      { rotate: "-90deg" }, 
    ],
    marginTop: hp("6%")
  }, 

  text:{
    transform: [
      { rotate: "90deg" }, 
    ],
    fontSize: '14.5@s',
    fontWeight:'bold',
    color:'transparent'
  },
 
  animatedViewContainer:{
    zIndex:1,
    position:'relative',
    marginLeft: wp("-1%"), //-65 
    marginTop: hp("1%"),
    backgroundColor:'#EDECEC',
    overflow:"hidden",
    width: '300@s',
  },

  animatedView:{
    width: wp('100%'),
    backgroundColor: 'transparent',
    borderTopRightRadius:0,
    borderBottomRightRadius:0,
  },

  text2:{
    height: hp('9%'),
  }
});   