import React from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';
import Modell from './Modell';
import Entypo from 'react-native-vector-icons/Entypo';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



export default class Headerr extends React.Component { 
  constructor(props) {
    super(props); 
    this.state = {
      visible: false,
    };  
  }

  render() {
    const hideMenu = () => this.setState({
      visible: false
    });
  
    const showMenu = () => this.setState({
      visible: true
    });
    return (
      <View  style={styles.container}>
        <Image source={require('../images/icone.png')} style={styles.imageYobeen}/>
        <Text style={styles.text}>AGROTECH SMART IRRIGATION</Text>
        <Modell/>
        <View>
          <Menu
            visible={this.state.visible}
            anchor={<Entypo name="dots-three-vertical" size={wp("5.5%")} onPress={showMenu} color={"white"} style={{marginLeft: wp("2%"), marginTop: hp("0.3%")}}/>}
            onRequestClose={hideMenu}
            style={styles.menu}
            animationDuration={300}
          >
            <MenuItem onPress={hideMenu,this.props.onPress}>
              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingTop: Platform.OS === 'iphone' ? hp("0%") : hp("1.2%")}}>
                <View style={{marginLeft: wp("4%"), marginTop: hp("2.1%")}} >
                  <MaterialIcons name="logout" size={wp("5%")} color={"black"} style={{height: hp("4%"), width: wp("6%")}}/>
                </View>
                <View style={{marginLeft: wp("0%"), marginTop: hp("2.5%"),}}>
                  <Text style={styles.deconnecter}>Déconnecter</Text>
                </View>
              </View>
            </MenuItem>
          </Menu>
        </View>
      </View>
    );  
  }
} 

const styles = ScaledSheet.create({
  container: {
    marginTop:hp("4%"),
    alignSelf: "center",
    flexDirection: 'row',
    alignContent:'center',
    marginLeft: wp("6%")
  },

  imageLogOutContainer:{
    marginLeft: wp('-8%'),
    marginRight:wp("3%")

  },

  imageLogOut:{
    width: '22@s',
    height: '22@s'
  },

  imageYobeen:{
    width: '24@s',
    height: '24@s',
    marginTop: hp("-0.2"),
    marginRight: wp("4%")
  },

  text: {
    fontSize: '14.5@s',
    fontWeight: 'bold',
    textAlign:"center",
    color:'#FFFFFF',
    marginBottom: hp("0%"),
    // fontFamily:'adobe-arabe',
  },
  
  menu: {
    marginTop: hp("4.5%"),
    marginLeft: wp("2%"),
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: 'white',
    width: wp("42%"),
    height: hp("7%"),
    
  },

  deconnecter:{
    fontSize: '14@s',
    fontWeight: 'bold',
    width: wp("26%"),
    height: hp("4%")
  }
})
