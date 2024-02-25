import React,{useContext} from 'react'
import { View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    Image,
} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Langue2 from './Langue2';
import { brand, modelName, osBuildId } from 'expo-device';
import {Context as AuthContext} from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import SmsScreen from './SmsScreen';


const LoadingScene=(props) =>{

    const {state,signin} =useContext(AuthContext);

    const checking = async () => {
        try {
            const jsonTest = await AsyncStorage.getItem('TEST');
            const test = JSON.parse(jsonTest); 
            const axios = require('axios');
            const url='http://agrotech.yobeen.com/apimobile/data?phone='
           
            if (test != null && test.phone != '' && test.phone.length == 10 && !state.reponse.message_info) {  
                const reponse = await  axios.get(url,
                    {
                        params: {
                            phone: test.phone,
                            brand: brand,
                            modelName: modelName,
                            osBuildId: osBuildId,
                        }
                    },
                    {
                        headers: {
                            'Accept': '*',
                            'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
                        },
                    }
                ) 
                if(test.isActive == true && reponse.data["isActive"] == true){
                    signin(test.phone);
                } else if(test.isActive == false && reponse.data["isActive"] == true) {
                    props.navigation.navigate("SmsScreen")
                }
                else{
                    props.navigation.navigate("Login")
                }
            } else {
                props.navigation.navigate("Login")
            }
        } catch (e) {
           props.navigation.navigate("Login")
        }
    };

    return ( 
            <View  style={styles.container}>
                <View style={styles.view1}>
                    <Image
                        style={styles.greenImage}
                        source={require('../images/green.png')}
                        resizeMode="stretch"
                    />
                    <Langue2 style={styles.langue}/>  
                </View>
                <View style={styles.view2}>
                    <Image
                        source={require('../images/loogo.png')}
                    />
                    <Text style={styles.title}>SMART IRRIGATION</Text>
                    <Text style={styles.title}> </Text>
                    <TouchableOpacity 
                        onChange={() =>state.reponse.message_info=='' }
                        onPress={checking}
                    >
                        <LinearGradient
                            colors={['#56CCF2', '#2F80ED']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign1}>Accéder</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.view3}>
                    <Image  
                        source={require('../images/blue.png')}
                        style={styles.blueImage}  
                    />
                    <Image  style={styles.yobeen} source={require('../images/yobeen.png')}/>
                </View>
            </View>
    );
};

export default LoadingScene;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
const styles = ScaledSheet.create({
    container:{
        flex: 1,
        alignItems: 'center' ,
        justifyContent: 'center' ,
    },

    view1:{
        alignItems: 'flex-end' ,
        justifyContent: 'flex-start' ,
    },

    langue:{
        marginRight: wp("12%")
    },

    greenImage:{
        width:wp('100%'),
        height: hp("30%"),
        marginRight: wp("-1%"),
        marginTop: hp("-4%")
    },

    view2: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: '#05375a',
        fontSize:'30@s',
        fontWeight: 'bold',
    },

    signIn: {
        width: wp("45%"),
        height: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14, 
        marginTop: hp("10%"),
    },
 
    textSign: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:'14@s'
    },

    textSign1: {
        color: 'white',
        fontWeight: 'bold',
        fontSize:'17@s'
    },
    
    view3: {
        flexDirection: 'row',
        marginTop: hp("15%")
    },
    
    blueImage: {
        position: 'absolute',
        marginTop: hp("-10%"),
        marginLeft: wp("-44%")
    },  

    yobeen:{
        alignItems: 'center' ,
        justifyContent: 'center' ,
        marginTop: hp("5%") ,
        marginBottom: hp("2%")
    },

});
