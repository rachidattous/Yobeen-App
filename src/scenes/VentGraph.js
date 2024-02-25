import React, { useState ,useEffect,useContext} from 'react';
import { View, Text, ScrollView,Image} from 'react-native';
import GraphVent from './GraphVent';
import {Context as AuthContext} from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const VentGraph =(props)=> { 

  const {state,signin} =useContext(AuthContext);
  const [date, setDate] = React.useState({
    picture:require('../images/j1.png'),
  });  

  function float2int (value) {
    return value | 0;
  }
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  useEffect(() => {
    setCurrentDate(
      new Date().getDate()
    );
    setCurrentMonth(
      new Date().getMonth()+1
    );      
    alldevice(props.navigation.state.params.index)

  }, []);
  const alldevice=(a)=>{
    if (a!=1000){
      setStationn({
        pre:state.reponse['devices'][a]['data'][0],
        nom:state.reponse['devices'][a]['station'],
      });
    }
  }
  const indexx=props.navigation.state.params.index;
  const[ stationn,setStationn]=useState({
    pre:state.reponse['data infomation'],
    nom:state.reponse['device infomation'].station,
  });
  const [data, setData] = React.useState({
    dateJ:state.reponse['data infomation']['j'].Date,
    Vvent: state.reponse['data infomation']['j'].Vvent,
  });

  const checking = async () => {
    try{    
      const jsonTest = await AsyncStorage.getItem('TEST');
      const test = JSON.parse(jsonTest);
      const axios = require('axios');
      const url2='http://agrotech.yobeen.com/apimobile/synchron'
       
      const synchron = await  axios.get(url2,
        {
          params: {
                  phone:test.phone,
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
        if (!state.reponse['isActive'] || test.isActive== false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        }  else {
      props.navigation.navigate('Vent',{indexx})
    }} catch (e) {
      }
  };

  const Deconnecter = async () => {
    try {
      await AsyncStorage.clear()
      props.navigation.navigate('Login') 
    } catch (e) {
    }
  };
  
    return ( 
      <View  style={styles.container}>
        <View style={styles.header}>
          <Image  source={require('../images/ArriereVen.png')} style={styles.headerImage}/>
          <Header onPress={checking} deconnecter={Deconnecter}/>
        </View>
        <ScrollView style={styles.scrollView}>
            <Image  source={require('../images/ArriereVen.png')} style={styles.imageBackground}/>
            <View style={styles.stationEtPosition}>
              <Text style={styles.stationText}>STATION{"\n"}{stationn.nom}</Text>  
              <Image source={require('../images/Position1.png')} style={styles.positionImage} />
            </View>
            <View style={styles.dateEtVent}>
              <Text style={styles.date}>{data.dateJ}</Text> 
              <Image source={require('../images/Vent12.png')} style={styles.ventImage} />
              <View>
                <Text style={styles.ventText}>Le Vent</Text> 
                <Text style={styles.unit}>Km/h</Text>
              </View>
            </View>
            <GraphVent index={indexx}/>
        </ScrollView>
        <Footer/>
      </View>
    );
}

export default VentGraph;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },

  headerImage: {
    height: hp('12%'),
    width: wp('100%'),
    position: 'absolute',
    alignContent: "center",
  },

  scrollView: {
    backgroundColor: '#fff'
  },

  imageBackground:{
    height: hp("59%"),
    width: wp("100%"),
    paddingTop: hp("2%"),
    position: 'absolute',
    marginTop: hp("-25%")
  },

  stationEtPosition: {
    flexDirection: 'row',
  },

  stationText: {
    fontSize: '30@s',
    color: '#FFFFFF',
    marginTop: hp("3%"),
    margin: wp("2%"),
    marginLeft: wp("6%"),
    fontWeight: 'bold'
  },

  positionImage: {
    marginLeft: wp("13%"),
    marginTop: hp("4%")
  },

  dateEtVent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height:  hp("16%"),
    width: wp("90%"),
    borderRadius: 9.29,
    marginTop: hp("3%"),
    marginBottom: hp("2%"),
    marginRight: wp("5%"),
    marginLeft: wp("5%"),
    shadowColor: "#000",
    shadowOffset: {
      width: '0@s',
      height: '16@vs',
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24, 
  },

  date: {
    marginTop: hp("5%"),
    marginLeft: wp("2%"),
    fontSize: '13.93@s',
    fontWeight: 'bold'
  },

  ventImage: { 
    marginTop: hp("4%"),    
  },

  ventText: { 
    marginTop: hp("5%"),
    marginRight: wp("2%"),
    fontWeight: 'bold',
    fontSize: '13.93@s',
  },

  unit: { 
    fontWeight: 'bold',
    fontSize: '14@s',
  },

  graph:{
    width: wp("100%"),
    marginTop: hp("-5%")
  }
}
)