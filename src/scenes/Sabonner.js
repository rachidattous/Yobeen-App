import React,{useState} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    Image,
    TouchableWithoutFeedback,
    Keyboard,
    Modal,
    Pressable,
    Alert
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Footer from './Footer';
import {LinearGradient} from 'expo-linear-gradient';
import { ScrollView } from 'react-native-gesture-handler';
import { brand, modelName, osBuildId } from 'expo-device';
import axios from 'axios';
import Login from './Login';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Select, Option} from "react-native-chooser";


const Sabonner=(props) => {

    const [modalVisible, setModalVisible] = useState(false);

    const [data, setData] =useState({
        name: '',
        phone: '',
        email: '',
        organization: '',
        fonction: 'Fonction',
        region: 'Région',
        check_name: true,
        check_phone: true,
        check_email: true,
        check_organization: true,
        check_fonction: true,
        check_region: true,
        check_textInputChange: false,
        message: ''
    });

    const textInputChange1 = (val) => {
            setData({
                ...data,
                name: val,
            });
    };

    const textInputChange2 = (val) => {
        if( val.trim().length == 10  ) {
            setData({
                ...data,
                phone: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                phone: val,
                check_textInputChange: false,
            });
        }
    };

    const textInputChange3 = (val) => {
        setData({
            ...data,
            email: val,
        });
    };

    const textInputChange4 = (val) => {
            setData({
                ...data,
                organization: val,
            });
    };

    const textInputChange5 = (val) => {
            setData({
                ...data,
                fonction: val,
            });
    };

    const textInputChange6 = (val) => {
            setData({
                ...data,
                region: val,
            });
    };

    const [erreur1,setErreur1] = useState('');
    const [erreur2,setErreur2] = useState('');
    const [erreur3,setErreur3] = useState('');
    const [erreur4,setErreur4] = useState('');
    const [erreur5,setErreur5] = useState('');
    const [erreur6,setErreur6] = useState('');
    

    const register = async () => {

        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(data.name == ''){
            data.check_name = false,
            setErreur1('Veuillez saisir un nom');
        } else if( data.name.includes('_')){
            setErreur1('Veuillez saisir un nom sans tiret');
            data.check_name = false;
        } else {
            setErreur1('');
            data.check_name = true;
        }
        
        if( data.phone == '' ){
            setErreur2('Veuillez saisir un numéro de téléphone');
            data.check_phone = false;
        } else if( data.phone.trim().length != 10  ) {
            setErreur2('Veuillez saisir un numéro contient 10 chiffres');
            data.check_phone = false;
        } else {
            setErreur2('');
            data.check_phone = true;
        }


        if( data.email == '' || reg.test(data.email) === false) {
            setErreur3('Veuillez saisir un e-mail');
            data.check_email = false;
        } else {
            setErreur3('');
            data.check_email = true;
        }

        if( data.organization == '' ){
            setErreur4('Veuillez saisir un organisme');
            data.check_organization = false;
        } else {
            setErreur4('');
            data.check_organization = true;
        }
        
        if( data.fonction == 'Fonction' || data.fonction == ''){
            setErreur5('Veuillez saisir une fonction');
            data.check_fonction = false;
        } else {
            setErreur5('');
            data.check_fonction = true;
        }
        
        if( data.region == 'Région' || data.region == ''){
            setErreur6('Veuillez saisir une région');
            data.check_region = false;
        } else {
            setErreur6('');
            data.check_region = true;
        }

        if( data.check_name && data.check_phone && data.check_email && data.check_organization && data.check_fonction && data.check_region){
            const axios = require('axios'); 
            const url2='http://agrotech.yobeen.com/apimobile/register'

            const register = await  axios.get(url2,
             {
                params: {
                    name: data.name,
                    phone: data.phone,
                    email: data.email,
                    organization: data.organization,
                    fonction: data.fonction,
                    region: data.region,
                    brand: brand,
                    osBuildId: osBuildId,
                    modelName: modelName
                }
              },
              {
                 headers: {
                    'Accept': '*',
                    'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
                 },
               }
            )
            if(register.data["status_error_phone"]){
                setErreur2(register.data["status_error_phone"]);
                data.check_phone = false;
            } else {
                setData({
                    ...data,
                    message: register.data["status_success"]
                })
                setModalVisible(true)
            }
        }
    }

    const toNavigate = () => {
        props.navigation.navigate("Login");
    };

    return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{flex:1, backgroundColor: '#FFF'}} >
            <View style={styles.centeredView}>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                  }}
                >
                  <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{flexDirection: 'row'}}>
                            <Image 
                                source={require('../images/support.png')} 
                                style={styles.modalImage}
                            />
                            <Text style={styles.modalText}>{data.message}</Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => {setModalVisible(!modalVisible),props.navigation.navigate("Login")}}
                        >
                            <Text style={styles.textStyle}>Fermer</Text>
                        </Pressable>
                    </View>
                  </View>
                </Modal>
            </View>
            <View style={styles.view1}>
                <Image
                    style={styles.header}
                    source={require('../images/green.png')}
                />
            </View>
            <View style={styles.view2}>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_name ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                        marginTop: hp("-4%")
                    }]}
                >
                    <View style={styles.action}>
                        <AntDesign name="user" size={30} color={ !data.check_name ? 'red' : "#7FD0D7" } style={{marginLeft: wp("5%"),}}/>
                        <TextInput 
                            placeholder="Nom Complet"
                            placeholderTextColor={ !data.check_name ? 'red' : "#05375a" }
                            style={styles.textInput}
                            autoCapitalize="words"
                            keyboardType="default"
                            value={data.name}
                            onChangeText={(val) => textInputChange1(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{erreur1 ? erreur1 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_phone ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                    <AntDesign name="phone" size={30} color={ !data.check_phone ? 'red' : "#7FD0D7" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Téléphone"
                            placeholderTextColor={ !data.check_phone ? 'red' : "#05375a" }
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="numeric"
                            underlineColorAndroid="transparent"
                            value={data.phone}
                            onChangeText={(val) => textInputChange2(val)}
                        />
                        { data.check_textInputChange ? 
                            <Image style={{marginRight: wp("6%"),width: wp("6.5%"),height: hp("4%")}} source={require('../images/verifier.png')}/>
                            :
                            null
                        }
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{erreur2 ? erreur2 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_email ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                    <AntDesign name="mail" size={30} color={ !data.check_email ? 'red' : "#7FD0D7" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Email"
                            placeholderTextColor={ !data.check_email ? 'red' : "#05375a" }
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            underlineColorAndroid="transparent"
                            value={data.email}
                            onChangeText={(val) => textInputChange3(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{erreur3 ? erreur3 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_organization ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                >
                    <View style={styles.action}>
                        <AntDesign name="idcard" size={30} color={ !data.check_organization ? 'red' : "#7FD0D7" } style={{marginLeft: wp("5%")}}/>
                        <TextInput 
                            placeholder="Organisme"
                            placeholderTextColor={ !data.check_organization ? 'red' : "#05375a" }
                            style={styles.textInput}
                            autoCapitalize="words"
                            keyboardType="default"
                            underlineColorAndroid="transparent"
                            value={data.organization}
                            onChangeText={(val) => textInputChange4(val)}
                        />
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{erreur4 ? erreur4 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_fonction ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                > 
                    <View style={styles.picker}>  
                        <Entypo name="briefcase" size={30} color= { !data.check_fonction ? 'red' : "#7FD0D7" }style={{marginLeft: wp("5%"), marginTop: hp("-1%")}} />              
                        <Select
                                onSelect = {(val) => textInputChange5(val)}
                                defaultText  = {data.fonction}
                                optionListStyle = {{backgroundColor : "white", width: wp("80%"), height: hp("50%"), borderColor: "#7FD0D7", borderWidth: 2, color: 'red'}}
                                transparent={true}
                                style={{borderWidth: 0, marginTop: hp("-2.3%"),width: wp("80%"),height: hp("10%")}}
                                backdropStyle={{backgroundColor: 'rgba(0,0,0,0.7)',}}
                                textStyle={[styles.fin,{color: !data.check_fonction ? 'red' : "#05375a" , marginTop: hp("0.9%")}]}
                                indicator={"down"}
                                indicatorColor={!data.check_fonction ? 'red' : "#7FD0D7"}
                                indicatorSize={15}
                                indicatorStyle={{marginRight: wp("16%"), marginTop: hp("1.4%")}}
                            >
                                <Option value = "Agent Commercial">Agent Commercial</Option>
                                <Option value = "Agent Qualifié">Agent Qualifié</Option>
                                <Option value = "Agriculteur">Agriculteur</Option>
                                <Option value = "Coporal">Coporal</Option>
                                <Option value = "Chef d'entreprise">Chef d'entreprise</Option>
                                <Option value = "Chef d'équipe">Chef d'équipe</Option>
                                <Option value = "Commis">Commis</Option>
                                <Option value = "Docteur">Docteur</Option>
                                <Option value = "Gérant">Gérant</Option>
                                <Option value = "Ingénieur">Ingénieur</Option>
                                <Option value = "Technicien">Technicien</Option>
                                <Option value = "Autre">Autre</Option>
                            </Select>
                    </View>
                </LinearGradient>
                <Text style={styles.textErreur}>{erreur5 ? erreur5 : ""}</Text>
                <LinearGradient
                    colors={['#fff', '#fff']}
                    style={[styles.signIn, {
                        borderColor: !data.check_region ? 'red' : '#7FD0D7',
                        borderWidth: 2,
                        borderRadius: 50,
                    }]}
                > 
                    <View style={styles.picker}>  
                         <AntDesign name="enviromento" size={30} color={ !data.check_region ? 'red' : "#7FD0D7" } style={{ marginLeft: wp("5%"), marginTop: hp("-1%")}} />           
                            <Select
                                onSelect = {(val) => textInputChange6(val)}
                                defaultText  = {data.region}
                                optionListStyle = {{backgroundColor : "white", width: wp("80%"), height: hp("50%"), borderColor: "#7FD0D7", borderWidth: 2,}}
                                transparent={true}
                                style={{borderWidth: 0, marginTop: hp("-2.3%"),width: wp("80%"),height: hp("10%")}}
                                backdropStyle={{backgroundColor: 'rgba(0,0,0,0.7)',  }}
                                textStyle={[styles.fin,{color: !data.check_region ? 'red' : "#05375a" , marginTop: hp("0.9%")}]}
                                indicator={"down"}
                                indicatorColor={!data.check_region ? 'red' : "#7FD0D7"}
                                indicatorSize={15}
                                indicatorStyle={{marginRight: wp("16%"), marginTop: hp("1.4%")}}
                            >
                                <Option value = "Tanger-Tétouan-Al Houceima">Tanger-Tétouan-Al Houceima</Option>
                                <Option value = "Oriental">Oriental</Option>
                                <Option value = "Fès-Meknès">Fès-Meknès</Option>
                                <Option value = "Rabat-Salé-Kénitra">Rabat-Salé-Kénitra</Option>
                                <Option value = "Beni Mellal-Khénifra">Beni Mellal-Khénifra</Option>
                                <Option value = "Casablanca-Settat">Casablanca-Settat</Option>
                                <Option value = "Dràa-Tafilalt">Dràa-Tafilalt</Option>
                                <Option value = "Marrakech-Safi">Marrakech-Safi</Option>
                                <Option value = "Souss-Massa">Souss-Massa</Option>
                                <Option value = "Guelmim-Oued Noun">Guelmim-Oued Noun</Option>
                                <Option value = "Laàyoun-Saquia Al Hamra">Laàyoun-Saquia Al Hamra</Option>
                                <Option value = "Dakhla-Oued Edahab">Dakhla-Oued Edahab</Option>
                            </Select>
                    </View>
                </LinearGradient> 
                <Text style={styles.textErreur}>{erreur6 ? erreur6 : ""}</Text>
            </View>
            <View style={{marginTop: Platform.OS === 'ios' ?  hp("-4%") :  hp("0%")}}>        
                <View>
                    <Image
                        style={styles.ciel}
                        source={require('../images/ciel.png')}
                        
                        />
                        <TouchableOpacity
                            onPress={register}                            
                            style={{
                                width: wp('100%'),
                                height: hp("7%"),
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // marginTop: Platform.OS === 'ios' ? hp("-8%") : hp("-1.5%")
                            }}
                        >
                            <LinearGradient
                                colors={['#118DCD', '#118DCD']}
                                style={{
                                    width: wp('80%'),
                                    height: hp("7%"),
                                    borderRadius: 10,
                                    marginBottom: hp("10%"),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={[styles.textSign, {color:'#fff'}]}>S'abonner</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={toNavigate}
                            style={{
                                width: wp('100%'),
                                height: hp("7%"),
                                borderRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <LinearGradient
                                colors={['#118DCD', '#118DCD']}
                                style={{
                                    width: wp('80%'),
                                    height: hp("7%"),
                                    borderRadius: 10,
                                    marginTop: hp("-7%"),
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                            >
                                <Text style={[styles.textSign, {color:'#fff'}]}>Annuler</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                </View>
                <Footer/>
            </View> 
        </ScrollView>
    </TouchableWithoutFeedback>
    );
};

export default Sabonner;


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
        justifyContent: 'flex-start' ,
        flexDirection: 'row'
    } ,
    
    view2: {
        marginTop: hp("-25%"),
        flex: 1, 
        backgroundColor: '#fff',
        alignItems:'center',
        backgroundColor: 'transparent'
    },

    header: {
        width: wp("100%"),
        height: hp("40%"),
        marginRight: wp("-5%"),
        marginTop: hp("-2%")
    },
    
    ciel:{
        marginBottom: hp("-19%"),
        marginRight: wp("8%"), 
       
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
        paddingLeft: 10,
        color: '#05375a',
        fontSize: '13@s',
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
        borderRadius: 10,
        marginTop: hp("1%"),
        
    },

    grad:{
        width: wp('23%'),
        height: hp("4%"),
        borderRadius: 10,
        marginTop: hp("3%"),
        marginLeft: wp("-90%"),
        justifyContent: 'center',
        alignItems: 'center'
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
        borderRadius: 10,
        marginBottom: hp("2%"),
        
    },

    precedent:{
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    textSign:{
        fontSize: '18@s',
        fontWeight: 'bold',
    },

    imageRetour:{
        width: wp('6%'),
        height: hp('6%'),
        marginTop: hp('4.5%'),
        marginLeft: wp("5%"),
        position: 'absolute'
    },

    picker:{
        flexDirection: 'row',
        marginTop: hp('2.2%'),
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: hp("1%"),
        alignItems: 'flex-start',
    },
    
    textErreur:{
        fontSize: "13@s",
        color: 'red',
        marginTop: hp("1%")
    }, 
    fin:{
        fontSize: "14@s"
    },

    centeredView: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("80%")
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginLeft: hp("10%"),
    marginRight: hp("0%"),
    marginTop: hp("30%"),

  },
  button: {
    marginTop: hp("1%"),
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    width: wp("25%")
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
    textAlign: "center",
    fontSize: '15@s',
  },
  modalText: {
    marginBottom: hp("1%"),
    textAlign: "center",
    fontSize: '15@s',
  },
  modalImage:{
    width: wp("16%"),
    height: hp("10%")
  }
});

const pickerSelectStyles = ScaledSheet.create({
    inputIOS: {
      fontSize: '13@s',
      color: '#05375a',      
    },
    inputAndroid: {
      fontSize: '18@s',
      paddingHorizontal: 10,
      paddingVertical: 8,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });