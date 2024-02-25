import React, { useState, useEffect, useContext } from 'react';
import {
  Text, 
  View, 
  ScrollView, 
  Image, 
  ImageBackground, 
  Linking, 
  RefreshControl
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Context as AuthContext } from '../context/AuthContext';
import { LinearGradient } from 'expo-linear-gradient';
import Serch from './Serch';
import Headerr from './Headerr';
import Footer from './Footer';
import { brand, modelName, osBuildId } from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const Dashboard = (props) => {
  const tab = new Array();
  const { state, signin } = useContext(AuthContext);
  
  const [stationn, setStationn] = useState({
      pre: state.reponse['data infomation'],
      nom: state.reponse['device infomation'].station,
  });
  // Récupération données
  const [data, setData] = React.useState({
    dateJ: stationn.pre["j"].Date,
    Tmoy: stationn.pre["j"].Tmoy,
    Hrmoy: stationn.pre["j"].Hrmoy,
    Pr: stationn.pre["j"].Pr,
    Vvent: stationn.pre["j"].Vvent,
    Et0: stationn.pre["j"].Et0,
    Rg: stationn.pre["j"].Rg,
  });
  const [indexx, setIndexx] = useState(1000);
  
  useEffect(() => {
    for (let i = 0; i < state.reponse['devices'].length; i++) {
      tab[i] = state.reponse['devices'][i]['station'];
    }
    // tab.sort((a, b) =>
    //   a.localeCompare(b)//using String.prototype.localCompare()
    // );
   // alldevice()
  
  })

  const alldevice = async() => {
    const jsonRem = await AsyncStorage.getItem('REMEMBERDEVICE');
    const rem = JSON.parse(jsonRem);
    
    if(rem != null){
       setIndexx(rem); 
       setStationn({
         pre:state.reponse['devices'][rem]['data'][0],
         nom:state.reponse['devices'][rem]['station'],
       })
      //  setData({
      //    dateJ: state.reponse['devices'][rem]['data'][0]['j'].Date,
      //    Tmoy: state.reponse['devices'][rem]['data'][0]['j'].Tmoy,
      //    Hrmoy: state.reponse['devices'][rem]['data'][0]['j'].Hrmoy,
      //    Pr: state.reponse['devices'][rem]['data'][0]['j'].Pr,
      //    Vvent: state.reponse['devices'][rem]['data'][0]['j'].Vvent,
      //    Et0: state.reponse['devices'][rem]['data'][0]['j'].Et0,
      //    Rg: state.reponse['devices'][rem]['data'][0]['j'].Rg,
      //  })

    }
  };

  // const changeDefaultStation = async() =>{
  //   try{ 
  //     const jsonTest = await AsyncStorage.getItem('TEST');
  //     const test = JSON.parse(jsonTest); 
  //     const axios = require('axios');
  //     const url = 'http://agrotech.yobeen.com/apimobile/',
  //     // const APIstation = await axios.get(url,
  //     //   {
  //     //     params: {
  //     //             phone: test.phone,
  //     //             brand: brand,
  //     //             modelName: modelName,
  //     //             osBuildId: osBuildId,
  //     //             station: state.reponse['devices'][indexx]['station'],
  //     //     }
  //     //   },
  //     //   {
  //     //     headers: {
  //     //         'Accept': '*',
  //     //         'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
  //     //     },
  //     //   }
  //     // )
  //   } catch {
  //       //ereur
  //   }
  // }
  
  // const removeItemValue = async(key) => {
  //   try {
  //       await AsyncStorage.removeItem(key);
  //       return true;
  //   }
  //   catch(exception) {
  //       return false;
  //   }
  // }
  // const asyncronisation = async() =>{
  //   await AsyncStorage.setItem('REMEMBERDEVICE',JSON.stringify(indexx)); 
  // }

  const [modalVisible, setModalVisible] = useState(false);
  const [statee, setStatee] = React.useState({
    colors: ['transparent', 'transparent'],
    colors2: ['transparent', 'transparent'],
    pressed: false,
  });
  const changeColor = () => {
    if (statee1.pressed1 && !statee.pressed) {
      changeColor1();
      setStatee({ pressed: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (statee2.pressed2 && !statee.pressed) {
      changeColor2();
      setStatee({ pressed: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (!statee.pressed && !statee2.pressed2 && !statee1.pressed1) {
      setStatee({ pressed: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else {
      setStatee({ pressed: false, colors: ['transparent', 'transparent'], colors2: ['#52c234', '#061700'] });
    }
  }
  const [statee1, setStatee1] = React.useState({
    colors: ['transparent', 'transparent'],
    colors2: ['transparent', 'transparent'],
    pressed1: false,
  });
  const [statee2, setStatee2] = React.useState({
    colors: ['transparent', 'transparent'],
    colors2: ['transparent', 'transparent'],
    pressed2: false,
  });

  const changeColor1 = () => {
    if (statee.pressed && !statee1.pressed1) {
      changeColor();
      setStatee1({ pressed1: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (statee2.pressed2 && !statee1.pressed1) {
      changeColor2();
      setStatee1({ pressed1: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (!statee.pressed && !statee2.pressed2 && !statee1.pressed1) {
      setStatee1({ pressed1: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else {
      setStatee1({ pressed1: false, colors: ['transparent', 'transparent'], colors2: ['#52c234', '#061700'] });
    }
  }

  const changeColor2 = () => {
    if (statee.pressed && !statee2.pressed2) {
      changeColor();
      setStatee2({ pressed2: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (statee1.pressed1 && !statee2.pressed2) {
      changeColor1();
      setStatee2({ pressed2: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else if (!statee.pressed && !statee2.pressed2 && !statee1.pressed1) {
      setStatee2({ pressed2: true, colors: ['#52c234', '#061700'], colors2: ['transparent', 'transparent'] });
    }
    else {
      setStatee2({ pressed1: false, colors: ['transparent', 'transparent'], colors2: ['#52c234', '#061700'] });
    }
  }
  const handleWebPress = () => {
    Linking.openURL("http://www.yobeen.com");
  }

  const [dataa, setDataa] = React.useState({
    username: '0676269026',
  });

  function getRectImage(a, b) {
    if (a == undefined) {
      if (b < 500) {
        return require('../images/sol2.png');
      }
      else if (b >= 500 && b < 1000) {
        return require('../images/sol0.png');
      }
      else if (b >= 1000 && b < 2000) {
        return require('../images/sol2.png');
      }
      else (b >= 2000)
      {
        return require('../images/sol2.png');
      }
    }
    else if (a >= 0.1 && a < 6) {
      return require('../images/sol2.png');
    }
    else (a > 6)
    {
      return require('../images/sol2.png');
    }
  } 

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }
   
  const Deconnecter = async () => {
    try {
      await AsyncStorage.clear()
      // alert('Storage successfully cleared!')
      props.navigation.navigate('Login') 
    } catch (e) {
      // alert('Failed to clear the async storage.')
    }
  };

  const opacity1 = async () => {
    try {
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx)); 
      const jsonTest = await AsyncStorage.getItem('TEST');
      const test = JSON.parse(jsonTest); 
      const axios = require('axios');
      const url2='http://agrotech.yobeen.com/apimobile/synchron'
       
      const synchron = await axios.get(url2,
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive== false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
          changeColor();
          setData({
            dateJ: stationn.pre["j-1"].Date,
            Tmoy: stationn.pre["j-1"].Tmoy,
            Hrmoy: stationn.pre["j-1"].Hrmoy,
            Pr: stationn.pre["j-1"].Pr,
            Vvent: stationn.pre["j-1"].Vvent,
            Et0: stationn.pre["j-1"].Et0,
            Rg: stationn.pre["j-1"].Rg,
          })
        }
    } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const opacity2 = async () => {
    try {  
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx));     
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
        // alert(synchron.data["isActive"])
          if (!state.reponse['isActive'] || test.isActive == false) {
            await AsyncStorage.clear()
            props.navigation.navigate("Login")
          }  else {
          changeColor1();
          setData({
            dateJ: stationn.pre["j"].Date,
            Tmoy: stationn.pre["j"].Tmoy,
            Hrmoy: stationn.pre["j"].Hrmoy,
            Pr: stationn.pre["j"].Pr,
            Vvent: stationn.pre["j"].Vvent,
            Et0: stationn.pre["j"].Et0,
            Rg: stationn.pre["j"].Rg,
          })
        }
    } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const opacity3 = async () => {
    try {
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx));       
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        }  else {
          changeColor2();
          setData({
            dateJ: stationn.pre["j+1"].Date,
            Tmoy: stationn.pre["j+1"].Tmoy,
            Hrmoy: stationn.pre["j+1"].Hrmoy,
            Pr: stationn.pre["j+1"].Pr,
            Vvent: stationn.pre["j+1"].Vvent,
            Et0: stationn.pre["j+1"].Et0,
            Rg: stationn.pre["j+1"].Rg,
          })
        }
    } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking1 = async () => { 
    try{  
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx)); 
      // // alldevice();
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
      props.navigation.navigate('Temperature', { indexx })
      }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking2 = async () => {
    try{    
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx));  
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        }  else {
    props.navigation.navigate('precipitation', { indexx })
    }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking3 = async () => {
    try{   
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx));  
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        }  else {
      changeColor();
      props.navigation.navigate('Humidite', { indexx }) 
    }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking4 = async () => {
    try{   
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx)); 
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
      props.navigation.navigate('Rayonnement', { indexx })
    }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking5 = async () => {
    try{   
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx)); 
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        } else {
      props.navigation.navigate('Evatranspiration', { indexx })
    }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  const checking6 = async() => {
    try{ 
      // await AsyncStorage.setItem('REM',JSON.stringify(indexx));  
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
      // alert(synchron.data["isActive"])
        if (!state.reponse['isActive'] || test.isActive == false) {
          await AsyncStorage.clear()
          props.navigation.navigate("Login")
        }  else {
      props.navigation.navigate('Vent', { indexx })
    }
  } catch (e) {
    //   alert('Failed to fetch the data from storage')
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../images/tstt.png')} style={styles.imageHeader}></Image>
        <Headerr index={indexx} onPress={Deconnecter}/>
      </View>
      <ScrollView 
        style={styles.scrollView} 
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <View style={styles.scrollContainer}>
          <ImageBackground source={require('../images/ArVert5.png')} style={styles.imageBackground}>
            <View style={styles.bienvenueEtDate}>
              <Text style={styles.bienvenueText}> Bienvenue {state.reponse['user infomation'].first_name}</Text>
              <Text style={styles.dateText}> {data.dateJ}</Text>
            </View>
            <View style={styles.recherche}>
              <SelectDropdown
                data={tab}
                onSelect={(selectedItem, index) => {
                  // removeItemValue('REM');
                  setIndexx(index);
                  setStationn({
                    pre: state.reponse['devices'][index]['data'][0],
                    nom: state.reponse['devices'][index]['station'],
                  });
                  setData({
                    dateJ: stationn.pre["j"].Date,
                    Tmoy: stationn.pre["j"].Tmoy,
                    Hrmoy: stationn.pre["j"].Hrmoy,
                    Pr: stationn.pre["j"].Pr,
                    Vvent: stationn.pre["j"].Vvent,
                    Et0: stationn.pre["j"].Et0,
                    Rg: stationn.pre["j"].Rg,
                  })
                  // asyncronisation();

                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  
                  // alldevice()
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                defaultButtonText={stationn.nom}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item
                }}
                renderDropdownIcon={() => {
                  return (
                    <Image style={styles.rechercheImage} source={require('../images/rech.png')} />)
                }}
                buttonStyle={styles.itemSearch}
                buttonTextStyle={styles.TextInput}
                dropdownStyle={styles.drop}
                rowTextStyle={styles.rowText}
                dropdownIconPosition={"right"}
              />
            </View>
            <View style={styles.itemDays}>
              <LinearGradient
                colors={statee.colors}
                style={styles.linearGradient1}
              >
                <TouchableOpacity
                  style={[styles.touchableOpacity1, {shadowColor: statee.shadowColor}]}
                  onPress={opacity1}
                >
                  <Image source={getRectImage(state.reponse['data infomation']['j-1'].Pr, state.reponse['data infomation']['j-1'].Rg)} style={styles.dayImage1} />
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={statee1.colors}
                style={styles.linearGradient2}
              >
                <TouchableOpacity
                  style={[styles.touchableOpacity2 , { shadowColor: statee.shadowColor }]}
                  onPress={opacity2}
                >
                  <Image source={require('../images/sol0.png')} style={styles.dayImage2} />
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={statee2.colors}
                style={styles.linearGradient3}
              >
                <TouchableOpacity
                  style={[styles.touchableOpacity3 , {shadowColor: statee.shadowColor}]}
                  onPress={opacity3}
                >
                  <Image source={getRectImage(state.reponse['data infomation']['j+1'].Pr, state.reponse['data infomation']['j+1'].Rg)} style={styles.dayImage3} />
                </TouchableOpacity>
              </LinearGradient>
            </View>
            <View style={styles.textDays} >
              <Text style={styles.text1}>Hier</Text>
              <Text style={styles.text2}>Aujourd'hui</Text>
              <Text style={styles.text3}>Demain</Text>
            </View>
          </ImageBackground>
          <View style={styles.items}>
            <View style={styles.itemView}>
              <Serch
                onPress={checking1}
                title="Température"
                data={data.Tmoy ? data.Tmoy + " °C" : "0 °C"}
                imageSource1={require('../images/soliel.png')}
                colore="#ED1F24"
                data1={data.Tmoy ? data.Tmoy : '0'}
                data2='60'
              />
              <Serch
                onPress={checking2}
                title="Précipitation"
                data={data.Pr ? data.Pr + "mm" : "0 mm"}
                imageSource1={require('../images/precipitation.png')}
                colore="#01A9C8"
                data2='100'
                data1={data.Pr ? data.Pr : '0'} 
              />
            </View>
            <View style={styles.itemView}>
              <Serch
                onPress={checking3}
                title="Humidité relative"
                data={data.Hrmoy ? data.Hrmoy + " %" : "0 %"}
                imageSource1={require('../images/vent1.png')}
                colore="#A8DFF7"
                data2='100'
                data1={data.Hrmoy ? data.Hrmoy : '0'} 
              />
              <Serch
                onPress={checking4}
                title="Rayonnement"
                data={data.Rg ? data.Rg + " J/cm²" : "0 J/cm²"}
                imageSource1={require('../images/song.png')}
                colore="#FFC906"
                data2='3500'
                data1={data.Rg ? data.Rg : '0'} 
              />
            </View>
            <View style={styles.itemView}>
              <Serch
                onPress={checking5}
                title="Evapotranspiration"
                data={data.Et0 ? data.Et0 + " mm" : "0 mm"}
                imageSource1={require('../images/rayonnement.png')}
                colore="#87BE3F"
                data2='15'
                data1={data.Et0 ? data.Et0 : '0'} 
              />
              <Serch
                onPress={checking6}
                title="Vent"
                data={data.Vvent ? data.Vvent + " Km/h" : "0 Km/h"}
                imageSource1={require('../images/vent.png')}
                colore="#E35264"
                data2='120'
                data1={data.Vvent ? data.Vvent : '0'} 
              />
            </View>
          </View>
        </View>
      </ScrollView >
      <Footer style={styles.footer}/>
    </View>
  );
};

export default Dashboard;
// create style to component
const styles = ScaledSheet.create({
  container:{
    flex:1,
  },
  
  header:{
    
  },

  imageHeader: {
    height: hp("100%"),
    width: wp("100%"),
    position: 'absolute',
    alignContent: "center",
  },
  
  scrollView: {
    backgroundColor: '#fff',
  },

  imageBackground: {
    height: hp('52%'),
    alignContent: "center",
  },

  bienvenueEtDate:{
    flexDirection:'row',
  },

  bienvenueText: {
    color: '#FFFFFF',
    fontSize: '20@s',
    fontWeight: 'bold',
    marginLeft: wp('3%'),
    marginBottom: hp('2%'),
    marginTop: hp('1%')
  },

  dateText: {
    color: '#FFFFFF',
    marginLeft: wp("3%"),
    fontSize: '17@s',
    fontWeight: 'bold',
    marginTop: hp('1.5%')
  },

  recherche:{  
    flexDirection: 'row', 
    marginTop: hp('0%'),
  },
  
  itemSearch: {
    margin: '15@s',
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    height: hp('6%'),
    width: wp('90%'),
    borderRadius: 5.98,
    flexDirection: 'row'
  },

  TextInput: {
    fontSize: '20@s',
    color: "#BDBEC1",
    marginLeft: wp("-43%"),
  },

  drop: {
    marginTop: hp("-6%"),
    height: hp('60%'),
    borderColor: '#FFFFFF',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 5.98,
  },
  
  rowText: {
    fontSize: '20@s',
    color: "black",
    marginLeft: wp("0%"),
  },

  itemDays: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp("-3%"),
    marginLeft: wp("0%"),
    marginRight: wp("2%")
  },

  dayImage1: {
    width: '68@s',
    height: '46@s',
    marginTop: hp('3%'),
  },

  linearGradient1:{
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: hp("1%"),
    borderRadius: 50,
    width: wp("29%"),
    marginBottom:  hp("1%"),
    marginLeft: wp('5%'),
  },

  touchableOpacity1:{ 
    paddingLeft: wp("2%"),
    paddingBottom: hp("2%") 
  },

  dayImage2: {
    width: '40@s',
    height: '40@s',
    marginLeft: wp("4%"),
    marginTop: hp('4%')
  },

  linearGradient2:{
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: hp("1%"),
    borderRadius: 50,
    width: wp("27%"),
    marginBottom: hp('1%'),
    marginLeft: wp('3.5%'),
  },

  touchableOpacity2:{
    paddingLeft: wp("3%"),
    paddingBottom: hp("2%") 
  },

  dayImage3: {
    width: '68@s',
    height: '46@s',
    marginTop: hp('3%'),
  },

  linearGradient3:{
    borderColor: 'transparent',
    borderWidth: 2,
    marginTop: hp("1%"),
    borderRadius: 50,
    width: wp("29%"),
    marginBottom:  hp("1%"),
    marginLeft: wp("5%"),
  }, 

  touchableOpacity3:{
    paddingLeft: wp("2%"),
    paddingBottom: hp("2%") 
  },

  textDays:{
    flexDirection: 'row', 
    alignItems: 'center', 
    alignSelf: 'center', 
    alignContent: 'center', 
    marginTop: hp('0%') 
  },

  text1: {
    fontWeight: 'bold',
    fontSize: '14.73@s',
    color: "#FFFFFF",
    marginRight: wp('23%'),
    marginLeft: wp('3%')
  },

  text2: {
    fontWeight: 'bold',
    fontSize: '14.73@s',
    marginLeft: wp('-3%'),
    marginRight: wp('15%'),
    color: "#FFFFFF",
  },

  text3: {
    fontWeight: 'bold',
    fontSize: '14.73@s',
    color: "#FFFFFF",
  },

  items:{
    marginTop:hp('-17%'),
  },

  itemView: {
    flexDirection: 'row',
  },

  footer:{
    flex: 1,
  },
  
});