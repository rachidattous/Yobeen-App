import React, { useState ,useEffect,useContext} from 'react';
import { View } from 'react-native';
import {Context as AuthContext} from '../context/AuthContext';
import {Image } from "react-native-svg";
import { VictoryScatter, VictoryChart,VictoryVoronoiContainer,VictoryAxis,VictoryArea} from "victory-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

class DataPoint extends React.Component {
  render() {
    const { x, y,datum } = this.props;
    const change=(a)=>{
      if (a=="NW"){
        return require('../images/NW.png');
      }
      else 
      return require('../images/N.png');
    }
    //const cat = datum._y = "N" ? require('../images/N.png') : require('../images/SW.png')
    return (
      <Image
        x={x}
        y={y}
        width="20"
        height="20"
        href={change(datum.z)}
      />
    );
  }
}

const GraphVent =(props)=> {   
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
      alldevice(props.index)

    }, []);
    const alldevice=(a)=>{
      if (a!=1000){
        setStationn({
          pre:state.reponse['devices'][a]['data'][0],
          nom:state.reponse['devices'][a]['station'],
        });
      }
    }
    const[ stationn,setStationn]=useState({
      pre:state.reponse['data infomation'],
      nom:state.reponse['device infomation'].station,
    });
  const [data, setData] = React.useState({
    dateJ:state.reponse['data infomation']['j'].Date,
    Vvent: state.reponse['data infomation']['j'].Vvent,
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
  
  return (
    <View>
      <VictoryChart 
        width={wp("100%")} 
        height={hp("55%")}
        containerComponent={
          <VictoryVoronoiContainer labels={({ datum }) => ` ${datum.y}`}/>
        }
        animate={{
          duration: 1000,
          onLoad: { duration: 30 }
        }}
        domainPadding={1}
      >
        <VictoryScatter
          data={[
            { x: 1,y: float2int(stationn.pre['j-5'].Vvent), z:stationn.pre['j-5'].Dvent},
            { x: 2,y: float2int(stationn.pre['j-4'].Vvent), z: stationn.pre['j-4'].Dvent},
            { x: 3,y: float2int(stationn.pre['j-3'].Vvent) ,z: stationn.pre['j-3'].Dvent},
            { x: 4, y: float2int(stationn.pre['j-2'].Vvent),z:stationn.pre['j-2'].Dvent},
            { x: 5,y: float2int(stationn.pre['j-1'].Vvent) ,z: stationn.pre['j-1'].Dvent},
            { x: 6,y: float2int(stationn.pre['j'].Vvent) ,z:stationn.pre['j'].Dvent},
            { x: 7,y: float2int(stationn.pre['j+1'].Vvent) ,z: stationn.pre['j+1'].Dvent},
            { x: 8,y: float2int(stationn.pre['j+2'].Vvent), z: stationn.pre['j+2'].Dvent}
          ]}
          dataComponent={<DataPoint />}
        />
        <VictoryArea
          style={{
            data: { fill: "#9CECFB", fillOpacity: 0.3, stroke: "transparent", strokeWidth: 3.5 },
          }}  
          interpolation="natural"
          data={[
            {x:newDate1, y: float2int(stationn.pre['j-5'].Vvent)},
            {x:newDate2, y: float2int(stationn.pre['j-4'].Vvent)},
            {x:newDate3, y: float2int(stationn.pre['j-3'].Vvent)},
            {x:newDate4, y: float2int(stationn.pre['j-2'].Vvent)},
            {x:newDate5, y: float2int(stationn.pre['j-1'].Vvent)},
            {x:newDate6, y: float2int(stationn.pre['j'].Vvent)},
            {x:newDate7, y: float2int(stationn.pre['j+1'].Vvent)},
            {x:newDate8, y: float2int(stationn.pre['j+2'].Vvent)}]}
        />
        <VictoryAxis
          style={{
            ticks: {
              padding: 5,
            },
            tickLabels: {
              fontSize: wp("3%"),
              fontWeight:'bold',
            },
          }}
        />
        {/* Vertical */}
        <VictoryAxis
          dependentAxis
          style={{
            ticks: {
              // padding: 5,
            },
            tickLabels: {
              fontSize: wp("3%"),
              fontWeight:'bold',
              color:'red'
            },
          }}
        />
      </VictoryChart>
    </View>
  );
}

export default GraphVent;
