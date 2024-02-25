import React,{useState, useContext} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Dimensions,
    Alert,
    Image,
    Linking,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {Context as AuthContext} from '../context/AuthContext';
import Footer from './Footer';
import {LinearGradient} from 'expo-linear-gradient';
import Langue2 from './Langue2';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Sabonner from './Sabonner';
import SmsScreen from './SmsScreen';


const Login=(props) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleWebPress =() => {
        Linking.openURL("http://www.yobeen.com");
    }
    const {state,signin} =useContext(AuthContext);
    const [data, setData] =useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        color: false
    });

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8 ) {
            setData({
                ...data,
                password: val,
                isValidPassword: true,
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    };
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    };
    const textInputChange = (val) => {
        if( val.trim().length == 10  ) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
                color: true
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
                color: false
            });
        }
    };

    const user = {
        isActive: state.reponse['isActive'],
        phone: data.username,
    };

    const Confirmer = async () => {
        const axios = require('axios'); 
        const url2='http://agrotech.yobeen.com/apimobile/sendsms'
        
        const sendsms = await  axios.get(url2,
          {
            params: {
                    phone: data.username,
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
        await AsyncStorage.setItem('KEY', JSON.stringify(user));
        props.navigation.navigate("SmsScreen");
    };

    const Annuler = async () => {
        props.navigation.navigate("Login");
    };

    const Oui = async () => {
        Alert.alert(
            "",
            "Nous allons vérifier votre numéro de téléphone "+data.username+" Confirmez-vous ce numéro ?",
            [
                {
                    text: "Annuler",
                    onPress: Annuler,
                    style: "default",
                },
                {
                    text: "Confirmer",
                    onPress: Confirmer,
                    style: "default",
                },
            ],
        );
    };

    const Non = async () => {
        await AsyncStorage.clear();
        props.navigation.navigate("Login")
    };

    const Close = async () => {
        await AsyncStorage.clear();
    };

    const toNavigate = async () => {
        try{    
            const axios = require('axios'); 
            const url2='http://agrotech.yobeen.com/apimobile/synchron'
             
            const synchron = await  axios.get(url2,
              {
                params: {
                        phone: data.username,
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
           
            if(synchron.data["error_danger"] == false && synchron.data["error_warning"] == false){
                Alert.alert(
                    "",
                    "Nous allons vérifier votre numéro de téléphone \""+data.username+"\" Confirmez-vous ce numéro ?",
                    [
                        {
                            text: "Annuler",
                            onPress: Annuler,
                            style: "default",
                        },
                        {
                            text: "Confirmer",
                            onPress: Confirmer,
                            style: "default",
                        },
                    ],
                ); 
            } else  if(synchron.data["error_warning"] != false && synchron.data["error_danger"] == false){
                    Alert.alert(
                        "Erreur :",
                        synchron.data["error_warning"],
                        [
                            {
                                text: "Non",
                                onPress: Non,
                                style: "default",
                            },
                            {
                                text: "Oui",
                                onPress: Oui,
                                style: "default",
                            },
                        ],
                    );
            } else if (synchron.data["error_warning"] == false && synchron.data["error_danger"] != false){
                Alert.alert(
                    "Erreur :",
                    synchron.data["error_danger"],
                    [
                        {
                            text: "Close",
                            onPress: Close,
                            style: "default",
                        },
                    ],
                );
            }  ;
        } catch (e) {
            alert('Failed to fetch the data from storage')
        }

    }; 

    const toNavigate2 = () => {
        props.navigation.navigate("Sabonner")
    };
   

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{flex:1, backgroundColor: '#FFF'}} >
            <View style={styles.view1}>
                <Image
                    style={styles.header}
                    source={require('../images/green.png')}
                />
                <Langue2 />  
            </View>
            <View style={styles.view2}>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                        <Image
                            style={{marginLeft: wp("5%")}}
                            source={require('../images/tlphn.png')}
                        />
                        <TextInput 
                            placeholder="Entrez votre numéro de téléphone"
                            placeholderTextColor="#7FD0D7"
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            value={data.username}
                            onChangeText={(val) => textInputChange(val)}
                        />
                        { data.check_textInputChange ? 
                            <Image style={{marginRight: wp("6%"),width: wp("6.5%"),height: hp("4%")}} source={require('../images/verifier.png')}/>
                            :
                            null
                        }
                    </View>
                </LinearGradient>
                { state.reponse.message_info ? <Text style={styles.errorMsg}>Ce numéro de téléphone est invalide</Text> : <Text></Text> }
                <TouchableOpacity
                    onChange={() =>state.reponse.message_info=='' }
                    onPress={toNavigate}
                    style={styles.signInn}
                    >
                    <LinearGradient
                        colors={[data.color ? '#118DCD' : 'gray', data.color ? '#118DCD' : 'gray']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]}>Se connecter</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={toNavigate2}
                    style={styles.signInn}
                >
                    <LinearGradient
                        colors={['#118DCD', '#118DCD']}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, {color:'#fff'}]}>S'inscrire</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
            <View>        
                <View>
                    <Image
                        style={styles.ciel}
                        source={require('../images/ciel.png')}
                        resizeMode="stretch"
                    />
                </View>
                <Footer/>
            </View> 
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
};

export default Login;

const {height} = Dimensions.get("screen");

const styles = ScaledSheet.create({
    borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: "#03DAC6",
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
      },
     
      underlineStyleHighLighted: {
        borderColor: "#03DAC6",
      },

    view1:{
        flex: 1,
        alignItems: 'flex-end' ,
        justifyContent: 'flex-start' ,
    } ,
    
    view2: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop:hp("12%"),
        height,
        alignItems:'center',
        alignContent:'center',
    },

    header: {
        width: wp("100%"),
        height: hp("40%"),
        marginRight: wp("-5%"),
        marginTop: hp("-2%")
    },
    
    ciel:{
        marginBottom: hp("-7%"),
        marginRight: wp("8%"), 
        backgroundColor:'transparent'
    },
      
    action: {
        flexDirection: 'row',
        marginTop: hp('1.5%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: hp("1%"),
    },

    textInput: {
        flex: 1,
        marginTop: hp("0%"),
        paddingLeft: 10,
        color: '#05375a',
        fontSize: '13@s'
    },

    errorMsg: {
        color: '#FF0000',
        fontSize: '14@s',
        marginBottom: hp("2%"),
        fontWeight:'bold'
    },

    signIn:{
        width: wp('80%'),
        height: hp("7%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp("2%")
    },

    buttonGet:{
        width: wp('20%'),
        height: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp("3%")
    },

    get: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderRadius: 10,
        marginLeft: wp("6%")
    },

    textGet: {
        fontSize: '14@s',
        fontWeight: 'bold'
    },

    actionGet: {
        marginLeft: wp('-1%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
    },

    inputImei: {
        color: '#05375a',
        fontSize: '15@s'
    },

    signInGet:{
        width: wp('60%'),
        height: hp("6%"),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: hp("3%"), 
        marginLeft: wp('2%'),
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
        fontSize: '18@s',
        fontWeight: 'bold'
    },

    sabonner:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp("-15%"),
        marginLeft: wp("-3%")
    },

    text1:{
        fontSize: '15@s',
        marginRight: wp("3%")
    },

    text2:{
        fontSize: '15@s',
        fontWeight: "bold",
        color: '#118DCD'
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
   
});