import React from 'react'
import { 
    View,
    TextInput, 
    StyleSheet,
    Animated,
    Text
} from 'react-native';
import Svg, {G,Circle} from 'react-native-svg';

const AnimatedCircle=Animated.createAnimatedComponent(Circle);
const AnimatedInput=Animated.createAnimatedComponent(TextInput);

const Donut=(props) =>{
    const a=2*Math.PI*60;  //Perimetre
    const radius=60;  //rayon
    const duration=800;
    const delay=0;
    const max=100;   //cad 100% 
    const strokeWidth=9;
    const somme=radius+strokeWidth;  
   const textColor='#2B2A52';
   const circleRef=React.useRef();
   const inputRef=React.useRef();
   const animatedValue =React.useRef(new Animated.Value(0)).current;
   const animation=(toValue) => {
        return Animated.timing(animatedValue, {
           toValue,
           duration,
           delay,
           useNativeDriver: true,
        }).start();
    }; 

React.useEffect(() =>{
    animation(props.percentage);
    animatedValue.addListener((v) =>{
        if (circleRef?.current) {
            const maxPerc=(100 * v.value)/max;
            const strokeDashoffset = a-(a*maxPerc)/100;
            circleRef.current.setNativeProps({
                strokeDashoffset,
            }); 
        }

        if (inputRef?.current){
            inputRef.current.setNativeProps({
                text:`${Math.round(v.value)}`,
            })
        }
    });
});

        return (
            <View  style={styles.container}>
                <Svg 
                    width={radius*2} 
                    height={radius*2} 
                    viewBox={`0 0 ${somme * 2} ${somme * 2}`}
                >
                    <G rotation={"-90"} origin={`${somme},${somme}`}>
                            <Circle
                                 cx='50%'
                                 cy='50%'
                                 stroke={props.color}
                                 strokeWidth='6'
                                 r={radius}
                                strokeOpacity={0.3}
                                fill="transparent"
                            />
                            <AnimatedCircle
                                ref={circleRef}
                                cx='50%'
                                cy='50%'
                                stroke={props.color}
                                strokeWidth={strokeWidth}
                                r={radius}
                                strokeDasharray={a} 
                                strokeDashoffset={a} //humidité de 60% //Equivalente à ((100-60)*a)/100
                                fill="transparent"
                                strokeLinecap='round'               
                            />
                    </G>
                </Svg>
                <AnimatedInput
                    ref={inputRef}
                    underlineColorAndroid="transparent"
                    editable={false}
                    defaultValue="0"
                    style={[
                        StyleSheet.absoluteFillObject,
                        {fontSize:26,color: textColor ?? props.color},
                        {fontWeight:'bold',textAlign:'center',marginLeft:-16},
                    ]}
                />
                <Text
                    style={[
                        StyleSheet.absoluteFillObject,
                        {fontSize:26,color: textColor ?? props.color},
                        {fontWeight:'bold',textAlign:'center',marginTop:44,marginLeft:35},
                    ]}
                >%</Text>
            </View>
        );
};
export default Donut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});