import React, {useState,useContext,useEffect} from 'react';
import {
  View,
  Modal, 
  Text,
  Pressable,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {Context as AuthContext} from '../context/AuthContext';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const  Modell=(props) =>  {
    const [modalVisible, setModalVisible] = useState(false);
    const {state,signin} =useContext(AuthContext);
    const [currentDate, setCurrentDate] = useState('');
    const [currentMonth, setCurrentMonth] = useState('');
    useEffect(() => {
      setCurrentDate(
          new Date().getDate()
      );
      setCurrentMonth(
          new Date().getMonth()+1
      );    
    }, []);

    const checking1 = async () => {
      try{    
        const jsonUser = await AsyncStorage.getItem('KEY');
        const userstorage = JSON.parse(jsonUser);
        const axios = require('axios');
        const url2='http://agrotech.yobeen.com/apimobile/synchron'
         
        const synchron = await  axios.get(url2,
          {
            params: {
                    phone:userstorage.phone,
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
          if (!state.reponse['isActive'] || synchron.data["isActive"]== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          }else {
        setModalVisible(true)
      }   }catch (e) {
        }
    };

    const checking2 = async () => {
      try{    
        const jsonUser = await AsyncStorage.getItem('KEY');
        const userstorage = JSON.parse(jsonUser);
        const axios = require('axios');
        const url2='http://agrotech.yobeen.com/apimobile/synchron'
         
        const synchron = await  axios.get(url2,
          {
            params: {
                    phone:userstorage.phone,
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
          if (!state.reponse['isActive'] || synchron.data["isActive"]== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          } else {
        setModalVisible(!modalVisible)
      }  }catch (e) {
        }
    };

    return(
      <View>
        <Pressable onPress={checking1}>
          <Image source={require('../images/not.png')} style={styles.image1} />
        </Pressable>
        <View style={styles.view1}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }} 
          >
            <View style={styles.view2}>
              <View style={styles.modalView}>
                <Pressable
                  style={styles.closeImage}
                  onPress={checking2}
                >
                  <Image source={require('../images/close.png')} /> 
                </Pressable>
                <View>
                  <Text style={styles.stationEtDate}>{state.reponse['device infomation'].station}  {state.reponse['data infomation']['j'].Date}</Text>
                </View>
                <View style={styles.row}>
                  <View style={styles.temperatureView}>
                    <View>
                      <Image source={require('../images/soliel.png')} style={styles.temperatureImage}/>
                    </View>
                    <View style={styles.textTemperatureContainer}>
                      <Text style={styles.textTemperature1}>{state.reponse['data infomation']['j-1'].Tmin+"°C"}</Text>
                      <Text style={styles.textTemperature2}>{state.reponse['data infomation']['j-1'].Tmax+"°C"}</Text>
                    </View>
                  </View>
                  <View style={styles.precipitationView}>
                    <Image source={require('../images/precipitation.png')} style={styles.precipitationImage}/>
                    <Text style={styles.textPrecipitation}>{state.reponse['data infomation']['j-1'].Pr+"mm"}</Text>
                  </View>
                </View>
                <View style={styles.row} >
                  <View style={styles.humiditeView}>
                    <View>
                      <Image source={require('../images/vent1.png')} style={styles.humiditeImage}/>
                    </View>
                    <View style={styles.texthumiditeContainer}>
                      <Text style={styles.textHumidite1}>{state.reponse['data infomation']['j-1'].Hrmin+"%"}</Text>
                      <Text style={styles.textHumidite2}>{state.reponse['data infomation']['j-1'].Hrmax+"%"}</Text>
                    </View>
                  </View>
                  <View style={styles.rayonnementView}>
                    <Image source={require('../images/song.png')} style={styles.rayonnementImage}/>
                    <Text style={styles.textRayonnement} >{state.reponse['data infomation']['j-1'].Rg+"J/cm²"}</Text>
                  </View>
                </View>
                <View style={styles.row} >
                  <View style={styles.evatranspirationView}>
                    <Image source={require('../images/rayonnement.png')} style={styles.evatranspirationImage}/>
                    <Text style={styles.textEvatranspiration}>{state.reponse['data infomation']['j-1'].Et0+"mm"}</Text>
                  </View>
                  <View style={styles.ventView}>
                    <Image   source={require('../images/vent.png')} style={styles.ventImage}/>
                    <Text style={styles.textVent}>{state.reponse['data infomation']['j-1'].Vvent+"Km/h"}</Text>
                  </View>
                </View> 
              </View> 
            </View>
          </Modal>
        </View>
      </View>
    )
  }

export default Modell;

const styles = ScaledSheet.create({

    image1:{
      marginLeft: wp("4%"),
      marginTop: hp("0%"),
      width: '28@s',
      height: '25@s'
    },

    view1: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: hp("3%"),
    },

    view2: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop:  hp("3%"),
    },

    modalView: {
      margin: wp("3%"),
      backgroundColor: "white",
      borderRadius: 20,
      padding: wp("10%"),
      width: wp("85%"),
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

    closeImage:{
      marginLeft: wp("70%"),
      marginTop: hp("-4.5%")
    },

    stationEtDate:{
      fontWeight:'bold',
      marginTop: hp("3%"), 
      marginBottom: hp("3%"),
      color:'#2C5364',
      fontSize: '20@s'
    },

    row: {
      flexDirection: 'row',
      marginBottom: hp("4%")
    },

    temperatureView:{
      marginRight: wp("14%"),
      flexDirection:'row'
    },

    temperatureImage:{
      width: "20@s",
      height: "38@s"
    },

    textTemperatureContainer:{
      marginLeft: wp("5%"),
    },

    textTemperature1:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#00B4DB'
    },

    textTemperature2:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#ED213A'
    },

    precipitationView:{
      left: wp("-2%"),
      flexDirection: 'row'
    },

    precipitationImage:{
      width: "38@s",
      height: "30@s"
    },

    textPrecipitation:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#00BBEA',
      marginTop: hp("1%"),
      marginLeft: wp("4%")
    },

    humiditeView:{
      marginRight: wp("8%"),
      flexDirection:'row',
    },
     
    humiditeImage:{
      width: "23@s",
      height: "33@s"
    },

    texthumiditeContainer:{
      marginLeft: wp("5%"),
    },

    textHumidite1:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#75CEDE'
    },

    textHumidite2:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#3D57A7'
    },

    rayonnementView:{
      left: '16@s',
      flexDirection: 'row'
    },

    rayonnementImage:{
      width: "30@s",
      height: "30@s"
    },

    textRayonnement:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#FFC906',
      marginTop: hp("1%"),
      marginLeft: wp("2%")
    },

    evatranspirationView:{
      marginRight: wp("12%"),
      flexDirection:'row',
    },
    
    evatranspirationImage:{
      width: "38@s",
      height: "28@s"
    },

    textEvatranspiration:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:'#87BE3F',
      marginTop: hp("1%"),
      marginLeft: wp("2%")
    },

    ventView:{
      left: wp("0%"),
      flexDirection: 'row'
    },

    ventImage:{
      width: "38@s",
      height: "25@s"
    },

    textVent:{
      fontSize: '15@s',
      fontWeight:'bold',
      color:"#E35264",
      marginTop: hp("1%"),
      marginLeft: wp("2%")
    }

    
  })