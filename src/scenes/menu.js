import React,{useContext,useState ,useEffect} from 'react'
import { View, Text, ScrollView,TouchableOpacity,Image} from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import DateA from './DateA' ;
import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard'
import Rayon from './Rayon'
import {LinearGradient} from 'expo-linear-gradient';
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
const menu=(props) =>{
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
    alldevice(props.navigation.state.params.indexx)
  }, []);
  const alldevice = (a) => {
    if (a != 1000) {
      setStationn({
        nom:state.reponse['devices'][a]['station'],
      })
      setData({
        dateJ:state.reponse['data infomation']['j'].Date,
        Rg: state.reponse['devices'][a]['data'][0]['j'].Rg,
      })
    }
  };
  const [stationn, setStationn] = useState({
    nom: state.reponse['device infomation'].station,
  });
  const [data, setData] = React.useState({
    Rg: state.reponse['data infomation']['j'].Rg,
    dateJ:state.reponse['data infomation']['j'].Date,
  });  
  const [date, setDate] = React.useState({
    picture:require('../images/j1.png'),
  });  
  const index = props.navigation.state.params.indexx;


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
      newDate5 = '0' + (newDay5) + '\n' + '0' + newMonth5;
    else
      newDate5 = '0' + (newDay5) + '\n' + newMonth5;
  } else {
    if(newMonth5 < 10 )
      newDate5 = (newDay5) + '\n' + '0' + newMonth5;
    else
      newDate5 = (newDay5) + '\n' + newMonth5;
  }
  
  let newDate6;
  
  if(currentDate < 10 ){
    if(currentMonth < 10 )
      newDate6 = '0' + (currentDate) + '\n' + '0' + currentMonth;
    else
      newDate6 = '0' + (currentDate) + '\n' + currentMonth;
  } else {
    if(currentMonth < 10 )
      newDate6 = (currentDate) + '\n' + '0' + currentMonth;
    else
      newDate6 = (currentDate) + '\n' + currentMonth;
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
      newDate7 = '0' + (newDay7) + '\n' + '0' + newMonth7;
    else
      newDate7 = '0' + (newDay7) + '\n' + newMonth7;
  } else {
    if(newMonth7 < 10 )
      newDate7 = (newDay7) + '\n' + '0' + newMonth7;
    else
      newDate7 = (newDay7) + '\n' + newMonth7;
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
      newDate8 = '0' + (newDay8) + '\n' + '0' + newMonth8;
    else
      newDate8 = '0' + (newDay8) + '\n' + newMonth8;
  } else {
    if(newMonth8 < 10 )
      newDate8 = (newDay8) + '\n' + '0' + newMonth8;
    else
      newDate8 = (newDay8) + '\n' + newMonth8;
  }

  const checking1 = async () => {
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
        if (!state.reponse['isActive'] || test.isActive== false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
        props.navigation.navigate('Dashboard',{index})
      } 
     } catch (e) {
        }
    };
  
    const checking2 = async () => {
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
          if (!state.reponse['isActive'] || test.isActive== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          } else {
        props.navigation.navigate('RayonnementGraphe',{index})
      }  } catch (e) {
        }
    };

    const date2 = async () => {
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
          if (!state.reponse['isActive'] || test.isActive== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          } else {
              if (props.navigation.state.params.indexx!=1000){ 
                setData({
                  dateJ: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j'].Date,
                  Rg: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j'].Rg,
                });
              } else{
                setData({
                  dateJ:state.reponse['data infomation']['j'].Date,
                  Rg: state.reponse['data infomation']['j'].Rg,
                });
              }

            setDate({
              picture:require('../images/j1.png')
            })
      } } catch (e) {
        }
    };
  
    const date1 = async () => {
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
          if (!state.reponse['isActive'] || test.isActive== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          } else {
            if (props.navigation.state.params.indexx!=1000){ 
              setData({
                dateJ: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j-1'].Date,
                Rg: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j-1'].Rg,
              });
            } else{
              setData({
                dateJ:state.reponse['data infomation']['j-1'].Date,
                Rg: state.reponse['data infomation']['j-1'].Rg,
              });
            }
            setDate({
              picture:require('../images/jm1.png')
            })
            }   
        } catch (e) {
        }
    };
  
    const date3 = async () => {
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
          } else {
            if (props.navigation.state.params.indexx!=1000){ 
              setData({
                dateJ: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j+1'].Date,
                Rg: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j+1'].Rg,
              });
            } else{
              setData({
                dateJ:state.reponse['data infomation']['j+1'].Date,
                Rg: state.reponse['data infomation']['j+1'].Rg,
              });
            }
            setDate({
              picture:require('../images/jm2.png')
            })
         } } catch (e) {
        }
    };
  
    const date4 = async () => {
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
          if (!state.reponse['isActive'] || test.isActive== false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          } else {
            if (props.navigation.state.params.indexx!=1000){ 
              setData({
                dateJ: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j+2'].Date,
                Rg: state.reponse['devices'][props.navigation.state.params.indexx]['data'][0]['j+2'].Rg,
              });
            } else{
              setData({
                dateJ:state.reponse['data infomation']['j+2'].Date,
                Rg: state.reponse['data infomation']['j+2'].Rg,
              });
            }
            setDate({
              picture:require('../images/jm3.png')
            })
         } } catch (e) {
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
          <Image  source={require('../images/ArruereR.png')} style={styles.headerImage}/>
          <Header onPress={checking1} deconnecter={Deconnecter}/>
        </View>
        <ScrollView  style={styles.scrollView}>
          <Image  source={require('../images/ArruereR.png')} style={styles.imageBackground}/>
          <View style={styles.stationEtPosition}>
            <Text style={styles.stationText}>STATION{"\n"}{stationn.nom}</Text>  
            <Image source={require('../images/Position1.png')} style={styles.positionImage} />
          </View>
          <View style={styles.dateEtRayonnement}>
            <Text style={styles.date}>{data.dateJ}</Text> 
            <Image source={require('../images/soleil.png')} style={styles.rayonnementImage} />
            <View>
              <Text style={styles.rayonnementText}>Rayonnement</Text> 
              <Text style={styles.unit}>J/cm²</Text>
            </View>
          </View>
          <View style={styles.items}>
            <View style={styles.temText5}>
              <View style={styles.daysContainer}>
                  <Image
                    style={styles.daysImage}
                    source={date.picture}
                  />
                  <View style={{position: 'absolute',marginTop: hp("1%")}}>
                    <TouchableOpacity
                      onPress={date1}
                    >
                      <DateA date2={newDate5}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{position: 'absolute',marginTop: hp("7.5%")}}>
                    <TouchableOpacity
                      onPress={date2}
                    >
                      <DateA date2={newDate6}/>
                    </TouchableOpacity>
                  </View>
                  <View style={{position: 'absolute',marginTop: hp("13.5%")}}>
                    <TouchableOpacity
                      onPress={date3}
                    >
                      <DateA date2={newDate7}/>
                    </TouchableOpacity  >
                  </View>
                  <View style={{position: 'absolute', marginTop: hp("20%")}}>
                    <TouchableOpacity  
                      onPress={date4}
                    >
                      <DateA date2={newDate8}/>
                    </TouchableOpacity>
                  </View>
                </View>       
            </View>
            <View style={styles.graph}>
              <Text style={styles.itemContainer}>{data.Rg+"J/cm²"}</Text>
              <Rayon dataa={data.Rg ? data.Rg :0}/>
            </View>
          </View>
          <View style={styles.voirPlusContainer}>
            <TouchableOpacity onPress={checking2}>
              <LinearGradient
                colors={['#0B193C', '#0B193C']}
                style={styles.signIn2}
              >
                <Text style={styles.voirPlusText}>Voir Plus</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView >
        <Footer/>
      </View>
    );
};

export default menu;

const styles = ScaledSheet.create({
  container:{
    flex:1
  },

  header:{

  },
  
  headerImage:{
    height: hp('12%'),
    width: wp('100%'),
    position: 'absolute',
    alignContent: "center",
  }, 

  scrollView: {
    backgroundColor:'#fff'
  },

  imageBackground: {
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
 
  dateEtRayonnement: {
    flexDirection: 'row',
    justifyContent:'space-between',
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
     
  date:{
    marginTop: hp("5.5%"),
    marginLeft: wp("2%"),
    fontSize: '13.93@s',
    fontWeight: 'bold'
  },

  rayonnementText:{
    marginTop: hp("5.5%"),
    marginRight: wp("2%"),
    fontWeight: 'bold',
    fontSize: '13.93@s',
  },

  unit:{
    fontWeight: 'bold',
    fontSize: '18@s',
  },
  
  rayonnementImage:{
    marginTop: hp("3%"),
  },

  items: { 
    flexDirection: 'row'
  },
  
  temText5: {   
    marginTop: hp("-3%")
  },

  daysContainer:{
    marginLeft: wp("3%"),
    marginRight: wp("5%"),
    marginTop: hp("9%")
  },

  daysImage:{
    marginLeft: wp("2%"),
    width: wp("12%"),
    height: hp("30%"),
  },

  graph: {   
    marginLeft: wp("1%"),
    marginTop: hp("5%"),
  },

  itemContainer:{
    marginTop: hp("2%"),
    marginLeft: wp("22%"),
    fontWeight:'bold',
    fontSize: wp('5%'),
    marginBottom: hp("3%"),
    color:'tomato'
  },
  
  voirPlusContainer: {
    marginLeft: wp("30%"),
    marginTop: hp("3%")
  },

  signIn2: {
    width: wp("40%"),
    height: hp("7%"),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14, //50
    flexDirection: 'row',
  },
  
    voirPlusText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '19@s'
    },
});