import React,{useContext,useEffect,useState} from 'react';
import { View, Text, ScrollView, Image} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import { VictoryBar,VictoryAxis, VictoryChart , VictoryTheme} from "victory-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const EvatranspirationGraph=(props) =>{
  function float2int (value) {
    return value / 1;
  }
  
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

    let newDay1;
    let newMonth1;
    let newDate1;
    
    if((currentDate - 5) <= 0){
        if( ((currentMonth - 1) == 2) || ((currentMonth - 1) == 4) || ((currentMonth -1) == 6) || ((currentMonth -1) == 9) || ((currentMonth -1) == 11)){
            newMonth1 = (currentMonth -1);
            if((currentMonth - 1) == 2){
              if((currentDate - 5) == 0)
              newDay1 = 28;
              else
              newDay1 = 28 + (currentDate - 5)
            } else 
              if((currentDate - 5) == 0)
                newDay1 = 30;
              else
                newDay1 = 30 + (currentDate - 5)
        } else
            if((currentDate - 5) == 0)
              newDay1 = 31;
            else
              newDay1 = 31 + (currentDate - 5) 
            if(currentMonth == 1)
              newMonth1 = 12;
            else
              newMonth1 = (currentMonth - 1);
    } else {
        newDay1 = (currentDate - 5);
        newMonth1 = currentMonth;
    } 
    
    if(newDay1 < 10 ){
      if(newMonth1 < 10 )
        newDate1 = '0' + (newDay1) + '/' + '0' + newMonth1;
      else
        newDate1 = '0' + (newDay1) + '/' + newMonth1;
    } else {
      if(newMonth1 < 10 )
        newDate1 = (newDay1) + '/' + '0' + newMonth1;
      else
        newDate1 = (newDay1) + '/' + newMonth1;
    }
  
  let newDay2;
  let newMonth2;
  let newDate2;
  
  if((currentDate - 4) <= 0){
      if( ((currentMonth - 1) == 2) || ((currentMonth - 1) == 4) || ((currentMonth -1) == 6) || ((currentMonth -1) == 9) || ((currentMonth -1) == 11)){
          newMonth2 = (currentMonth -1);
          if((currentMonth - 1)== 2){
            if((currentDate - 4) == 0)
            newDay2 = 28;
            else
            newDay2 = 28 + (currentDate - 4)
          } else 
            if((currentDate - 4) == 0)
              newDay2 = 30;
            else
              newDay2 = 30 + (currentDate - 4)
      } else
          if((currentDate - 4) == 0)
            newDay2 = 31;
          else
            newDay2 = 31 + (currentDate - 4) 
          if(currentMonth == 1)
            newMonth2 = 12;
          else
            newMonth2 = (currentMonth - 1);
  } else {
      newDay2 = (currentDate - 4);
      newMonth2 = currentMonth;
  } 
  
  if(newDay2 < 10 ){
    if(newMonth2 < 10 )
      newDate2 = '0' + (newDay2) + '/' + '0' + newMonth2;
    else
      newDate2 = '0' + (newDay2) + '/' + newMonth2;
  } else {
    if(newMonth2 < 10 )
      newDate2 = (newDay2) + '/' + '0' + newMonth2;
    else
      newDate2 = (newDay2) + '/' + newMonth2;
  }
  
  let newDay3;
  let newMonth3;
  let newDate3;
  
  if((currentDate - 3) <= 0){
      if( ((currentMonth - 1) == 2) || ((currentMonth - 1) == 4) || ((currentMonth -1) == 6) || ((currentMonth -1) == 9) || ((currentMonth -1) == 11)){
          newMonth3 = (currentMonth -1);
          if((currentMonth - 1) == 2){
            if((currentDate - 3) == 0)
            newDay3 = 28;
            else
            newDay3 = 28 + (currentDate - 3)
          } else 
            if((currentDate - 3) == 0)
              newDay3 = 30;
            else
              newDay3 = 30 + (currentDate - 3)
      } else
          if((currentDate - 3) == 0)
            newDay3 = 31;
          else
            newDay3 = 31 + (currentDate - 3) 
          if(currentMonth == 1)
            newMonth3 = 12;
          else
            newMonth3 = (currentMonth - 1);
  } else {
      newDay3 = (currentDate - 3);
      newMonth3 = currentMonth;
  } 
  
  if(newDay3 < 10 ){
    if(newMonth3 < 10 )
      newDate3 = '0' + (newDay3) + '/' + '0' + newMonth3;
    else
      newDate3 = '0' + (newDay3) + '/' + newMonth3;
  } else {
    if(newMonth3 < 10 )
      newDate3 = (newDay3) + '/' + '0' + newMonth3;
    else
      newDate3 = (newDay3) + '/' + newMonth3;
  }
  
  let newDay4;
  let newMonth4;
  let newDate4;
  
  if((currentDate - 2) <= 0){
      if( ((currentMonth - 1) == 2) || ((currentMonth - 1) == 4) || ((currentMonth -1) == 6) || ((currentMonth -1) == 9) || ((currentMonth -1) == 11)){
          newMonth4 = (currentMonth -1);
          if((currentMonth - 1) == 2){
            if((currentDate - 2) == 0)
            newDay4 = 28;
            else
            newDay4 = 28 + (currentDate - 2)
          } else 
            if((currentDate - 2) == 0)
              newDay4 = 30;
            else
              newDay4 = 30 + (currentDate - 2)
      } else
          if((currentDate - 2) == 0)
            newDay4 = 31;
          else
            newDay4 = 31 + (currentDate - 2) 
          if(currentMonth == 1)
            newMonth4 = 12;
          else
            newMonth4 = (currentMonth - 1);
  } else {
      newDay4 = (currentDate - 2);
      newMonth4 = currentMonth;
  } 
  
  if(newDay4 < 10 ){
    if(newMonth4 < 10 )
      newDate4 = '0' + (newDay4) + '/' + '0' + newMonth4;
    else
      newDate4 = '0' + (newDay4) + '/' + newMonth4;
  } else {
    if(newMonth4 < 10 )
      newDate4 = (newDay4) + '/' + '0' + newMonth4;
    else
      newDate4 = (newDay4) + '/' + newMonth4;
  }
  
  let newDay5;
  let newMonth5;
  let newDate5;
  
  if((currentDate - 1) <= 0){
      if( ((currentMonth - 1) == 2) || ((currentMonth - 1) == 4) || ((currentMonth -1) == 6) || ((currentMonth -1) == 9) || ((currentMonth -1) == 11)){
          newMonth5 = (currentMonth -1);
          if((currentMonth - 1) == 2){
            if((currentDate - 1) == 0)
            newDay5 = 28;
            else
            newDay5 = 28 + (currentDate - 1)
          } else 
            if((currentDate - 1) == 0)
              newDay5 = 30;
            else
              newDay5 = 30 + (currentDate - 1)
      } else
          if((currentDate - 1) == 0)
            newDay5 = 31;
          else
            newDay5 = 31 + (currentDate - 1) 
          if(currentMonth == 1)
            newMonth5 = 12;
          else
            newMonth5 = (currentMonth - 1);
  } else {
      newDay5 = (currentDate - 1);
      newMonth5 = currentMonth;
  } 
  
  if(newDay5 < 10 ){
    if(newMonth5 < 10 )
      newDate5 = '0' + (newDay5) + '/' + '0' + newMonth5;
    else
      newDate5 = '0' + (newDay5) + '/' + newMonth5;
  } else {
    if(newMonth5 < 10 )
      newDate5 = (newDay5) + '/' + '0' + newMonth5;
    else
      newDate5 = (newDay5) + '/' + newMonth5;
  }
  
  let newDate6;
  
  if(currentDate < 10 ){
    if(currentMonth < 10 )
      newDate6 = '0' + (currentDate) + '/' + '0' + currentMonth;
    else
      newDate6 = '0' + (currentDate) + '/' + currentMonth;
  } else {
    if(currentMonth < 10 )
      newDate6 = (currentDate) + '/' + '0' + currentMonth;
    else
      newDate6 = (currentDate) + '/' + currentMonth;
  }
  
  let newDay7;
  let newMonth7;
  let newDate7;
  
  if((((currentDate + 1) > 31) && ((currentMonth == 1) || (currentMonth == 3) || (currentMonth == 5) || (currentMonth == 7) || (currentMonth ==8) || (currentMonth == 10) || (currentMonth == 12))) ){
    newDay7 = (currentDate + 1) - 31; 
    if(currentMonth == 12)
      newMonth7 = 1;
    else 
      newMonth7 = currentMonth + 1;
  } else if ((((currentDate + 1) > 30) && ((currentMonth == 2) ||  (currentMonth == 4) ||  (currentMonth == 6) ||  (currentMonth == 9) ||  (currentMonth == 11)))){
      newDay7 = (currentDate + 1) - 30;
      newMonth7 = currentMonth + 1;
  } else if((((currentDate + 1) > 28) && (currentMonth == 2))){
      newDay7 = (currentDate + 1) - 28;
      newMonth7 = currentMonth + 1;
  } else {
    newDay7 = currentDate + 1;
    newMonth7 = currentMonth;
  }
  
  if(newDay7 < 10 ){
    if(newMonth7 < 10 )
      newDate7 = '0' + (newDay7) + '/' + '0' + newMonth7;
    else
      newDate7 = '0' + (newDay7) + '/' + newMonth7;
  } else {
    if(newMonth7 < 10 )
      newDate7 = (newDay7) + '/' + '0' + newMonth7;
    else
      newDate7 = (newDay7) + '/' + newMonth7;
  }
  
  let newDay8;
  let newMonth8;
  let newDate8;
  
  if((((currentDate + 2) > 31) && ((currentMonth == 1) || (currentMonth == 3) || (currentMonth == 5) || (currentMonth == 7) || (currentMonth ==8) || (currentMonth == 10) || (currentMonth == 12))) ){
    newDay7 = (currentDate + 2) - 31; 
    if(currentMonth == 12)
      newMonth8 = 1;
    else 
      newMonth8 = currentMonth + 1;
  } else if ((((currentDate + 2) > 30) && ((currentMonth == 2) ||  (currentMonth == 4) ||  (currentMonth == 6) ||  (currentMonth == 9) ||  (currentMonth == 11)))){
      newDay8 = (currentDate + 2) - 30;
      newMonth8 = currentMonth + 1;
  } else if((((currentDate + 2) > 28) && (currentMonth == 2))){
      newDay8 = (currentDate + 2) - 28;
      newMonth8 = currentMonth + 1;
  } else {
    newDay8 = currentDate + 2;
    newMonth8 = currentMonth;
  }
  
  if(newDay8 < 10 ){
    if(newMonth8 < 10 )
      newDate8 = '0' + (newDay8) + '/' + '0' + newMonth8;
    else
      newDate8 = '0' + (newDay8) + '/' + newMonth8;
  } else {
    if(newMonth8 < 10 )
      newDate8 = (newDay8) + '/' + '0' + newMonth8;
    else
      newDate8 = (newDay8) + '/' + newMonth8;
  }

  const data3 = [ 
    { quarter:newDate1, earnings:float2int(stationn.pre['j-5'].Et0),label:stationn.pre['j-5'].Et0 },
    { quarter:newDate2, earnings:float2int(stationn.pre['j-4'].Et0),label:stationn.pre['j-4'].Et0 },
    { quarter:newDate3, earnings:float2int(stationn.pre['j-3'].Et0),label:stationn.pre['j-3'].Et0 },
    { quarter:newDate4, earnings:float2int(stationn.pre['j-2'].Et0),label:stationn.pre['j-2'].Et0 },
    { quarter:newDate5, earnings:float2int(stationn.pre['j-1'].Et0),label:stationn.pre['j-1'].Et0 },
    { quarter:newDate6, earnings:float2int(stationn.pre['j'].Et0),label:stationn.pre['j'].Et0 },
    { quarter:newDate7, earnings:float2int(stationn.pre['j+1'].Et0),label:stationn.pre['j+1'].Et0 },
    { quarter:newDate8, earnings:float2int(stationn.pre['j+2'].Et0),label:stationn.pre['j+2'].Et0 },
  ];
  
  
  const checking = async () => {
    try{    
      const jsonTest = await AsyncStorage.getItem('TEST');
      const test = JSON.parse(jsonTest);
      const axios = require('axios');
      const url2='http://agrotech.yobeen.com/apimobile/synchron';
       
      const synchron = await  axios.get(url2,
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
        if (!state.reponse['isActive'] || test.isActive== false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
      props.navigation.navigate('Evatranspiration',{indexx})
    }  } catch (e) {
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
      <View style={styles.container}>
        <View style={styles.header}>
          <Image  source={require('../images/ArriereEv.png')} style={styles.headerImage}/>
          <Header onPress={checking} deconnecter={Deconnecter}/>
        </View>
        <ScrollView style={styles.scrollView}>
            <Image  source={require('../images/ArriereEv.png')} style={styles.imageBackground}/>
            <View style={styles.stationEtPosition}>
              <Text style={styles.stationText}>STATION{"\n"}{stationn.nom}</Text>  
              <Image source={require('../images/Position1.png')} style={styles.positionImage} />
            </View>
            <View style={styles.dateEtEva}>
              <Text style={styles.date}>{state.reponse['data infomation']['j'].Date}</Text> 
              <Image source={require('../images/Et.png')} style={styles.evaImage} />
              <View>
                <Text style={styles.evaText}>Evapotranspiration</Text> 
                <Text style={styles.unit}>mm</Text>
              </View>
            </View>
          <View style={styles.graph}>
             <VictoryChart 
              width={wp("100%")} 
              height={hp("55%")}
              theme={VictoryTheme.material}
              domainPadding={10}
              domain={{y:[0,10]}}
            >
             
              <VictoryAxis
                style={{
                  tickLabels: {
                    fontSize: wp("2.5%"),
                    fontWeight:'bold',
                  },
                }}
              />
              {/* Vertical  */}
              <VictoryAxis
                dependentAxis
                style={{
                  tickLabels: {
                    fontSize: wp("3%"),
                    fontWeight:'bold',
                  },
                }}
              />
              <VictoryBar 
                barWidth={ wp("3%") }
                data={data3}
                x="quarter" 
                y="earnings" 
                style={{ data: { fill: "#C2B49A" } }}
                animate={{
                  duration: 2000,
                  onLoad: { duration: 1000 }
                }}
              />
            </VictoryChart> 
          </View>
        </ScrollView>
        <Footer/>
      </View>
    );
}
export default EvatranspirationGraph;
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

  dateEtEva: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height:  hp("16%"),
    width: wp("90%"),
    borderRadius: 9.29,
    marginTop: hp("3%"),
    marginBottom: hp("5%"),
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

  evaImage: { 
    marginTop: hp("3%"),
  },

  evaText: { 
    marginTop: hp("5%"),
    marginRight: wp("2%"),
    fontWeight: 'bold',
    fontSize: '13.93@s',
  },

  unit: { 
    fontWeight: 'bold',
    fontSize: '20@s',
  },

  graph:{
    width: wp("100%"),
    marginTop: hp("-5%")
  }
})