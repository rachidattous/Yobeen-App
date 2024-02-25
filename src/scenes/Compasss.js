import React from "react";
import {
  View, 
  Image, 
  ImageBackground,
} from "react-native";
import {Grid} from "react-native-easy-grid";
import {DashedProgress} from 'react-native-dashed-progress';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const Compasss =(props) => {
 
  _direction = degree => {
    if (degree >= 22.5 && degree < 67.5) {
      return "NE";
    } else if (degree >= 67.5 && degree < 112.5) {
      return "E";
    } else if (degree >= 112.5 && degree < 157.5) {
      return "SE";
    } else if (degree >= 157.5 && degree < 202.5) {
      return "S";
    } else if (degree >= 202.5 && degree < 247.5) {
      return "SW";
    } else if (degree >= 247.5 && degree < 292.5) {
      return "W";
    } else if (degree >= 292.5 && degree < 337.5) {
      return "NW";
    } else {
      return "N";
    }
  };

  return (
    <Grid >
      <ImageBackground 
        source={require('../images/safaa.png')} 
        style={{
          marginLeft: wp("4%"),
          width: wp("60%"),
          height: hp("42%"),
          position:"absolute",
        }}
      >
        <ImageBackground
          source={require("../images/DRTTT.png")}
          style={{
            height: hp("35%"),
            width: wp("45%"),
            marginLeft: wp("7.5%"),
            marginTop: hp("5%"),
            transform: [
              {rotate:180+ "deg"},
            ],
          }}
        >
          <View 
            style={{
              justifyContent: 'center', 
              alignItems: 'center',
              marginLeft: wp("18.5%"),
              marginTop: hp("13.5%"),
              width: wp("8%"),
              height: hp("8%"),
             transform: [{rotate:-180+ "deg"}]
            }}
          >
            <DashedProgress
                fill={props.dataa}
                countBars={40} 
                radius={ wp("11%") }
                indicatorWidth={ wp("9%") }
                barWidth={ wp("5%")}
                strokeThickness={ wp("1%") }
                text={props.dataa+"Km/h"}
                showIndicator={false}
                trailColor="#8EBCE4"
                strokeColor="#3D57A7"
                tooltipSize={ wp("5%") }
                tooltipColor={"#3D57A7"}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
    </Grid>
  );
}

export default Compasss;
