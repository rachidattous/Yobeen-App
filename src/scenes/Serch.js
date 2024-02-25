import React from 'react';
import { 
  Text,
  View, 
  TouchableOpacity,
  Image,
} from 'react-native';
import ProgressBar1 from './ProgressBar1';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ScaledSheet } from 'react-native-size-matters';
import { s, vs, ms, mvs } from 'react-native-size-matters';

 
export default class Serch extends React.Component { 
  constructor(props) {
    super(props);  
  }
 
  state={
    backgroundColor: 'black',
    backgroundColor2: 'black',
    pressed: false,
  };

  changeColor= () => {
    if(!this.state.pressed){
       this.setState({ pressed: true,backgroundColor: 'red', backgroundColor2: 'black'});
    } else {
      this.setState({ pressed: false, backgroundColor: 'black' ,backgroundColor2: 'red'});
    }
  }
  render() {
    return (
      <TouchableOpacity  style={styles.container} onPress={this.props.onPress} > 
        <TouchableOpacity  
          onPress={this.props.onPress}
          style={styles.serchView1}
        >
          <View style={styles.imageContainer}>
            <Image source={this.props.imageSource1}  style={styles.image}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  
          onPress={this.props.onPress}
          style={styles.serchView2}  
        >
          <Text style={styles.title}>{this.props.title}</Text> 
          <Text style={styles.data}>{this.props.data}</Text> 
          <ProgressBar1 colorb={this.props.colore} step={this.props.data1} steps={this.props.data2}/>
        </TouchableOpacity>
      </TouchableOpacity>
    );  
  }
} 
    

  const styles = ScaledSheet.create({
  
  container: {
    backgroundColor: 'white',
    height: '150.476@s' ,
    width: wp("45%"),
    margin: '10@s',
    marginRight: '5@s',
    marginLeft: '10@s',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    borderRadius: 4.68,
    elevation: 24,
  },

  serchView1:{
    marginLeft: '53@s',
    marginTop: '14@vs',
    borderRadius: 37.55 ,
    width: '53.461@s', 
    height: '53.461@s',
    padding: '18@s',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: '0@s',
      height: '16@vs',
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },

  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  image:{
    justifyContent: 'center',
  },

  serchView2:{
   
  },

  title:{
    textAlign: 'center',
    marginTop: '5@vs',
    fontSize: '17.02@s',
    fontWeight:"bold"
  },
 
  data:{
    textAlign: 'center',
    marginTop: '4@vs',
    fontSize: '13.64@s',
    fontWeight:"bold" 
  },

  
});