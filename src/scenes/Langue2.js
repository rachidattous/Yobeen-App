import React from 'react';
import { 
    View, 
    Text,
    Image,
    Linking
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet, s, vs, ms, mvs } from 'react-native-size-matters';
import { 
  MenuProvider, 
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Langue2=(props) =>{

    const handleEmailPress =() => {
      Linking.openURL("mailto:agrotech@yobeen.com?subject=Email from the Agro tech mobile application  &body='Bonjour!'");
    
    }
    const handleWebPress =() => {
      Linking.openURL("https://google.com");
    
    }
    const handleCallPress =() => {
      Linking.openURL("tel:+212660111666");
    
    }


    const handleSmsPress =() => {
      Linking.openURL("sms:+212660111666");
    
    }

    return (
      <View style={{position: 'absolute',}}>
        <MenuProvider style={{width: wp("100%"),height:hp("35%"),marginTop:hp("6%"),marginRight: wp("-3%")}}>
          <Menu style={styles.container} >
              <MenuTrigger>
                <Image  
                  source={require('../images/barr.png')}
                  style={{marginLeft:wp("80%")}}

                />
              </MenuTrigger>
              <MenuOptions style={styles.menu}>
                <MenuOption>
                  <Text style={styles.titre} >Contactez-nous</Text>
                  <View style={{marginLeft:wp("3%")}}>
                    <TouchableOpacity   onPress={handleEmailPress}>
                      <MenuOption style={styles.row}>
                        <Image source={require('../images/email.png')} style={styles.image1}/>
                        <Text style={{fontWeight:'bold',color:'#118DCD',marginLeft:wp("1%"),marginTop:hp("0.5%")}}>G</Text>
                        <Text  style={{fontSize:wp('4%'),marginLeft:wp('9%')}} >Email</Text>
                      </MenuOption>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={handleCallPress}>
                      <MenuOption style={styles.row} >
                        <Image source={require('../images/tlphn.png')} style={styles.image2}/>
                        <Text  style={{fontSize:wp('4%'),marginLeft:wp('12%')}} >Appel</Text>
                      </MenuOption>
                    </TouchableOpacity>
                    <TouchableOpacity   onPress={handleSmsPress}>
                      <MenuOption style={styles.row} >
                        <Image source={require('../images/email.png')} style={styles.image3}/>
                        <Text  style={{fontSize:wp('4%'),marginLeft:wp('12%')}} >Sms</Text>
                      </MenuOption>
                    </TouchableOpacity>
                  </View>
                </MenuOption>
              </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    );
};

export default Langue2;
            
const styles = ScaledSheet.create({
  container:{
    flexDirection: 'row'
  },  
  menu:{
    marginLeft: wp("-3%"),
    marginTop: hp("-1%"),
    width: wp('66%'),
    paddingLeft: wp("4%"),
    borderRadius:30,
    backgroundColor:'white',
    borderColor: '#118DCD',
    borderWidth:3
  },

  titre:{
    color: '#118DCD',
    fontWeight:'bold',
    fontSize: wp('5%'),
  },

  row:{
    flexDirection: 'row',
  },

  image1:{
    marginTop: hp("1%"),
    position: 'absolute',
    width: '20.5@s',
    height: '14.5@s'
  },

  image2:{
    marginTop: hp("1%"),
    position: 'absolute',
    width: '22@s',
    height: '17@s'
  },

  image3:{
    marginTop: hp("1%"),
    position: 'absolute',
    width: '20.5@s',
    height: '14.5@s'
  },

});
               