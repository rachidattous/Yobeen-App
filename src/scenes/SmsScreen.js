import React,{useState, useContext, useEffect,} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Image
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {Context as AuthContext} from '../context/AuthContext';
import {LinearGradient} from 'expo-linear-gradient';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Login from './Login';


const SmsScreen = (props) => {
    const [enableResend, setEnableResend] = useState(false);

    const [data, setData] = useState({
        phone: '',
        code_sms: '',
        isValidUser: true,
        isValidPassword: true,
    });

    const {state,signin} =useContext(AuthContext);


    let clockCall = null;

    const defaultCountDownMin = 4;
    const defaultCountDownSec = 59;
    const [test,setTest]= useState(4);
    const [countDownMin, setCountDownMin] = useState(defaultCountDownMin);
    const [countDownSec, setCountDownSec] = useState(defaultCountDownSec);

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })


    const decrementClock =  async () => {
        if(countDownMin !== 0 && countDownSec !== 0){
            setCountDownMin(countDownMin);
            setCountDownSec(countDownSec - 1); 
        } else if(countDownMin !== 0 && countDownSec === 0) {
            setCountDownMin(countDownMin - 1);
            setCountDownSec(59);
            setTest(test - 1);
        } else if(countDownMin === 0 && countDownSec === 0 && test !== 0){
            setTest(test - 1);
            setCountDownSec(59);
        } else if (countDownMin === 0 && countDownSec !== 0){
            setCountDownSec(countDownSec - 1);
        } else if(countDownMin === 0 && countDownSec === 0 && test === 0){
            setEnableResend(true);
            setCountDownSec(0);
            setCountDownMin(0);
            clearInterval(clockCall);
        }

        const jsonUser = await AsyncStorage.getItem('KEY');
        const user = JSON.parse(jsonUser);
        setData({
            ...data,
            phone: user.phone
        })
    };

    const textInputChange = (val) => {
            setData({
                ...data,
                code_sms: val,
            });
    };

    const onResend = async () => {
        try{
            if(enableResend) {
                setTest(4);
                setCountDownMin(defaultCountDownMin);
                setCountDownSec(defaultCountDownSec);
                setEnableResend(false);
                clearInterval(clockCall);
                textInputChange("");
                clockCall = setInterval(() => {
                    decrementClock()
                }, 1000) 
                
                const axios = require('axios'); 
                const url2='http://agrotech.yobeen.com/apimobile/sendsms'
                
                const sendsms = await  axios.get(url2,
                {
                    params: {
                            phone: data.phone,
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
            } 
        } catch {
            //erreur
        }
    };

    const onChange = async () => {
        await AsyncStorage.clear();
        textInputChange("");
        props.navigation.navigate("Login");
    };

    const toNavigate = async () => {
        try{
            const axios = require('axios'); 
                const url2='http://agrotech.yobeen.com/apimobile/synchron'
                
                const synchron = await  axios.get(url2,
                {
                    params: {
                            phone: data.phone,
                            brand: brand,
                            modelName: modelName,
                            osBuildId: osBuildId,
                            code_sms: data.code_sms
                        }
                    },
                    {
                    headers: {
                        'Accept': '*',
                        'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
                    },
                }
            )
            if(verify && !synchron.data["error_code_sms"]){
                const test = {
                    isActive: true,
                    phone: data.phone,
                };                
                await AsyncStorage.setItem('TEST', JSON.stringify(test));
                signin(data.phone)
            } else {
                setIsValide(true)
                const test = {
                    isActive: false,
                    phone: data.phone,
                };                
                await AsyncStorage.setItem('TEST', JSON.stringify(test));
            }
        } catch {
            //Ereur
        }
    };

    const [isValide,setIsValide] = useState(false);

    const verify = data.code_sms.length == 5 ? true : false;


    return (
    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'center'}}>
        <View style={styles.view1}>
            <Image
                style={styles.header}
                source={require('../images/green.png')}
            />
        </View>
        <View style={styles.view}>
            <Text style={styles.textTitle}>Saisissez le code à 5 chiffres </Text>
            <Text style={styles.textTitle}>envoyé par SMS au "{data.phone}"</Text>
        </View>
        <View style={styles.view2} >
            <TextInput 
                autoFocus={true}
                style={styles.cellText2}
                autoCapitalize="none"
                keyboardType="numeric"
                maxLength={5}
                value={data.code_sms}
                onChangeText={(val) => textInputChange(val)}
            />
        </View>
        <View>
            <TouchableOpacity
                onPress={toNavigate}
                style={styles.signInn}
            >
                <LinearGradient
                    colors={[verify ? '#118DCD' : 'gray', verify ? '#118DCD' : 'gray']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {color:'#fff'}]}>Vérifier</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
        <View style={styles.viewText}>
            <Text style={styles.textValider}>{isValide ? "Ce code n'est pas valide" : ""}</Text>
        </View>
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={onChange} style={{marginTop: Platform.OS === 'ios' ? hp("-39%") : hp("4%") }}>
                <View style={styles.btnChangeNumber}>
                    <Text style={styles.textChange}>Changer le numéro</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={onResend} style={{marginTop: Platform.OS === 'ios' ? hp("3%") : hp("2%") }}>
                <View style={styles.btnResend}>
                    <Text style={[styles.textResend, { color: enableResend ? '#234DB7' : 'gray'}]}>Renvoyer le code ({countDownMin}min{countDownSec}s)</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>   
    );
};

export default SmsScreen;


const styles = ScaledSheet.create({

    view1:{
        flex: 1,
        justifyContent: Platform.OS === 'ios' ? 'flex-start' : 'center' ,
        flexDirection: 'row',
    } ,
    
    view:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? hp("-16%") : hp("-1%")  
    },
    
    view2: {
        flex: 1, 
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
    },

    header: {
        width: wp("100%"),
        height: hp("40%"),
        marginRight: wp("-5%"),
        marginTop: hp("-2%")
    },
    
    containerInput:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Platform.OS === 'ios' ? hp("-26%") : hp("3%") 
    },

    ciel:{
        marginBottom: hp("-7%"),
        marginRight: wp("8%"), 
        backgroundColor:'transparent',
    },
      
    textTitle:{
        fontSize: '21@vs',
        color: '#05375a'
    },

    textSign:{
        fontSize: '18@s',
        fontWeight: 'bold',
    },

    cellView:{
        paddingVertical: hp("1%"),
        margin: hp("1%"),
        width: '35@s',
        height: '40@s',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        marginTop: Platform.OS === 'ios' ? hp("-26%") : hp("-18%") ,
        borderRadius: 10

    },

    cellText:{
        textAlign: 'center',
        fontSize: '18@s'
    },

    cellText2:{
        width: '180@s',
        height: '50@s',        
        textAlign: 'center',
        fontSize: '28@s',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: '#234DB7',
        marginTop: Platform.OS === 'ios' ? hp("-12%") : hp("3%") ,
        color: '#234DB7',
        letterSpacing: 14,
    },

    bottomView:{
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
        marginTop: Platform.OS === 'ios' ? hp("4%") : hp("-3%"),
        marginBottom: hp("6%"),
    },

    btnChangeNumber:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    textChange:{
        color: '#234DB7',
        alignItems: 'center',
        fontSize: '16@s'
    },

    btnResend:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    textResend:{
        alignItems: 'center',
        fontSize: '16@s',
    },

    signIn:{
        width: wp('40%'),
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: Platform.OS === 'ios' ? hp("-18%") : hp("2%") 
    },

    signInn: {
        width: wp('100%'),
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: hp("2%")
    },

    textSign: {
        fontSize: '23@s',
        fontWeight: 'bold'
    },

    viewText:{
        justifyContent: 'center',
        alignItems: 'center',
    },

    textValider:{
        color: 'red',
        fontSize: '14@s',
        padding: 6,
        letterSpacing: 1.5,
        marginTop: Platform.OS === 'ios' ? hp("-18%") : hp("-1%")
    }

   
});