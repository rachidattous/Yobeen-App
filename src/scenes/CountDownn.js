import React, {useState,useContext,useEffect} from 'react';
import {
  View, 
  Dimensions,
  Text,
  ScrollView,
  Image,
  StatusBar
} from 'react-native'
import {Context as AuthContext} from '../context/AuthContext';
import Header from './Header';
import Footer from './Footer';
import { 
  VictoryAxis,
  VictoryGroup,
  VictoryLabel, 
  VictoryChart, 
  VictoryArea,
  VictoryVoronoiContainer,
} from "victory-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

console.disableYellowBox = true;

const screenWidth = Dimensions.get("window").width;
function float2int (value) {
  return value | 0;
}
const  CountDownn=(props) =>  {
  const {state,signin} =useContext(AuthContext);
  const [currentDate, setCurrentDate] = useState('');
  const [currentMonth, setCurrentMonth] = useState('');
  useEffect(() => {
    console.log(props.navigation.state.params.index)
      setCurrentDate(
          new Date().getDate()
      );
      setCurrentMonth(
          new Date().getMonth() + 1
      );
      alldevice(props.navigation.state.params.index)    
    }, []);
    const alldevice=(a)=>{
      if (a!=1000)
      {
        setStationn({
          pre:state.reponse['devices'][a]['data'][0],
          nom:state.reponse['devices'][a]['station'],
        });
      }
    }
const indexx=props.navigation.state.params.index;

const[ stationn,setStationn]=useState(
  {
    pre:state.reponse['data infomation'],
    nom:state.reponse['device infomation'].station,
  }
);

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
        if((currentMonth - 1) == 2){
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
  const datamin = [
    { x:newDate1, y:float2int(stationn.pre['j-5'].Tmin),z:stationn.pre['j-5'].Tmin},
    { x:newDate2, y:float2int(stationn.pre['j-4'].Tmin),z:stationn.pre['j-4'].Tmin},
    { x:newDate3, y:float2int(stationn.pre['j-3'].Tmin),z:stationn.pre['j-3'].Tmin},
    { x:newDate4, y:float2int(stationn.pre['j-2'].Tmin),z:stationn.pre['j-2'].Tmin},
    { x:newDate5, y:float2int(stationn.pre['j-1'].Tmin),z:stationn.pre['j-1'].Tmin},
    { x:newDate6, y:float2int(stationn.pre['j'].Tmin),z:stationn.pre['j'].Tmin},
    { x:newDate7, y:float2int(stationn.pre['j+1'].Tmin),z:stationn.pre['j+1'].Tmin},
    { x:newDate8, y:float2int(stationn.pre['j+2'].Tmin),z:stationn.pre['j+2'].Tmin},
  ];

  const datamoy = [
    { x:newDate1, y:float2int(stationn.pre['j-5'].Tmoy),z:stationn.pre['j-5'].Tmoy},
    { x:newDate2, y:float2int(stationn.pre['j-4'].Tmoy),z:stationn.pre['j-4'].Tmoy},
    { x:newDate3, y:float2int(stationn.pre['j-3'].Tmoy),z:stationn.pre['j-3'].Tmoy},
    { x:newDate4, y:float2int(stationn.pre['j-2'].Tmoy),z:stationn.pre['j-2'].Tmoy},
    { x:newDate5, y:float2int(stationn.pre['j-1'].Tmoy),z:stationn.pre['j-1'].Tmoy},
    { x:newDate6, y:float2int(stationn.pre['j'].Tmoy),z:stationn.pre['j'].Tmoy},
    { x:newDate7, y:float2int(stationn.pre['j+1'].Tmoy),z:stationn.pre['j+1'].Tmoy},
    { x:newDate8, y:float2int(stationn.pre['j+2'].Tmoy),z:stationn.pre['j+2'].Tmoy},
  ];

  const datamax = [
    { x:newDate1, y:float2int(stationn.pre['j-5'].Tmax),z:stationn.pre['j-5'].Tmax},
    { x:newDate2, y:float2int(stationn.pre['j-4'].Tmax),z:stationn.pre['j-4'].Tmax},
    { x:newDate3, y:float2int(stationn.pre['j-3'].Tmax),z:stationn.pre['j-3'].Tmax},
    { x:newDate4, y:float2int(stationn.pre['j-2'].Tmax),z:stationn.pre['j-2'].Tmax},
    { x:newDate5, y:float2int(stationn.pre['j-1'].Tmax),z:stationn.pre['j-1'].Tmax},
    { x:newDate6, y:float2int(stationn.pre['j'].Tmax),z:stationn.pre['j'].Tmax},
    { x:newDate7, y:float2int(stationn.pre['j+1'].Tmax),z:stationn.pre['j+1'].Tmax},
    { x:newDate8, y:float2int(stationn.pre['j+2'].Tmax),z:stationn.pre['j+2'].Tmax},
  ];
          
  const min=float2int(state.reponse['data infomation']['j-5'].Tmin)-6;
  const max=float2int(state.reponse['data infomation']['j-5'].Tmax)+8;

  const checking = async () => {
    try{    
      const jsonTest = await AsyncStorage.getItem('TEST');
      const test = JSON.parse(jsonTest);
      const axios = require('axios');
      const url2='http://agrotech.yobeen.com/apimobile/synchron'
       
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
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
      props.navigation.navigate('Temperature',{indexx})
    } } catch (e) {
        //erreur
      }
  };

  const Deconnecter = async () => {
    try {
      await AsyncStorage.clear()
      props.navigation.navigate('Login') 
    } catch (e) {
      //erreur
    }
  };
      
        return(
          <View style={styles.container}>
            <View style={styles.header}>
            <StatusBar style="dark"/>
              <Image  source={require('../images/ArriereS.png')} style={styles.imageHeader}/>
              <Header onPress={checking} deconnecter={Deconnecter}/>
            </View>
            <ScrollView style={styles.scrollView}>
              <Image source={require('../images/ArriereS.png')} style={styles.imageBackground}/>
              <View>
                <View style={styles.stationEtPosition}> 
                  <Text style={styles.stationText}>STATION{"\n"}{stationn.nom}</Text>  
                  <Image source={require('../images/Position1.png')} style={styles.positionImage} />
                </View>
                <View style={styles.temperature}>
                  <View>
                    <Text style={styles.temperatureText}>Température</Text> 
                    <Text style={styles.celisiusText}>°C</Text>
                  </View>
                  <Image source={require('../images/Temperature1.png')} style={styles.temperatureImage} />
                  <View style={styles.TContainer}>
                    <View style={styles.row}>             
                      <Text style={styles.rowItem1}></Text>
                      <Text style={styles.rowText}>  Tmin</Text>
                    </View>
                    <Text></Text>
                    <View style={styles.row}>   
                      <Text style={styles.rowItem2}></Text>
                      <Text style={styles.rowText}>  Tmoy</Text>
                    </View>
                    <Text></Text>
                    <View style={styles.row}>   
                      <Text style={styles.rowItem3}></Text>
                      <Text style={styles.rowText}>  Tmax</Text>
                    </View>
                  </View>
                  </View>
                <View  style={styles.graphContainer}>
                  <VictoryChart 
                    width={wp("100%")} 
                    height={hp("55%") }
                    containerComponent={
                      <VictoryVoronoiContainer labels={({ datum }) => ` ${datum.y}`} />
                    }
                    domain={{ y:[0,50]  }}
                    domainPadding={{ y:max}}
                  >
                    <VictoryAxis
                    maxDomain={{ y: 50 }}
                    padding={{ top: 20, bottom: 60 }}
                      style={{
                        ticks: {
                          padding: wp("0%")
                        },
                        tickLabels: {
                          fontSize: wp("2.5%"),
                          fontWeight:'bold',
                        },
                      }}
                    />
                    <VictoryAxis
                      dependentAxis
                      style={{
                        ticks: {
                        },
                        tickLabels: {
                          fontSize: wp('3%'),
                          fontWeight:'bold',
                          color:'red'
                        },
                      }}
                    />
                    <VictoryGroup
                      style={{
                        data: { strokeWidth: 3, fillOpacity: 0.4 },
                      }}
                    > 
                      <VictoryArea  
                        interpolation="natural"
                        style={{
                          data: {  fill: "#F49C9B", fillOpacity: 0.3, stroke: "#FF0000", strokeWidth: 3 }                        }}
                        data={datamax}
                        labels={({datum}) => datum.z}
                        labelComponent={<VictoryLabel renderInPortal dx={wp("4%")}/>}
                      />
                      <VictoryArea  
                        interpolation="natural"
                        style={{
                          data: {  fill: "#fceabb", fillOpacity: 0.6, stroke: "#FFA32B", strokeWidth: 3 }
                        }}
                        data={datamoy}
                        labels={({datum}) => datum.z}
                        labelComponent={<VictoryLabel renderInPortal dy={hp("-0.5%")} dx={wp("4%")}/>}
                      />
                      <VictoryArea 
                        interpolation="natural"
                        style={{
                          data: {  fill: "#9CECFB", fillOpacity: 0.6, stroke: "#6dd5ed", strokeWidth: 3 }
                        }}
                        data={datamin}
                        labels={({datum}) => datum.z}
                        labelComponent={<VictoryLabel renderInPortal dy={hp("4%")} dx={wp("4%")}/>}
                      />
                    </VictoryGroup>
                  </VictoryChart>
                </View>
              </View>
            </ScrollView>
            <Footer/>
          </View>
        )
    }
export default CountDownn;

const styles = ScaledSheet.create({
    container:{
      flex: 1
    },
  
    imageHeader: {  
      height: hp('12%'),
      width: wp('100%'),
      position: 'absolute',
      alignContent: "center",
    },
 
    scrollView: {
      backgroundColor:'#FFF',
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

    positionImage:{
      marginLeft: wp("13%"),
      marginTop: hp("4%")
    },

    temperature: {
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

    temperatureText:{
      marginLeft: wp("2%"),
      marginTop: hp("6%"),
      fontSize: '13.93@s',
      fontWeight: 'bold'
    },

    celisiusText:{
      fontWeight: 'bold',
      marginLeft: wp("20%"),
      fontSize: '22.13@s',
    },
    
    temperatureImage:{
      marginTop: hp("1%"),
      justifyContent: 'center'
    },
      
    TContainer:{
      marginRight: wp("2%"),
      marginTop: hp("1%"),
      marginBottom: hp("1%"),
      flexDirection: 'column',
      justifyContent: 'space-evenly'
    },

    row:{
      flexDirection: 'row',
    },

    rowItem1:{
      borderRadius: wp("12%"),
      backgroundColor:'#6dd5ed',
      width: wp("6%"),
    },

    rowItem2:{
      borderRadius: wp("12%"),
      backgroundColor:'#FFA32B',
      width: wp("6%"),
    },

    rowItem3:{
      borderRadius: wp("12%"),
      backgroundColor:'#FF0000',
      width: wp("6%"),
    },
    
    rowText:{
      fontWeight: 'bold',
      fontSize: '13.93@s'
    },

    graphContainer:{
      width: wp("100%"),
      marginTop: hp("-5%"),
    },
  })
  