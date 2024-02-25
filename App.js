import * as React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoadingScene from './src/scenes/LoadingScene'
import Login from './src/scenes/Login';
import Dashboard from './src/scenes/Dashboard';
import Temperature from './src/scenes/Temperature';
import CountDownn from './src/scenes/CountDownn';
import precipitation from './src/scenes/precipitation';
import PrecipitationGraphe from './src/scenes/PrecipitationGraphe';
import Humidite from './src/scenes/Humidite';
import humiditegraph from './src/scenes/humiditegraph';
import menu from './src/scenes/menu';
import RayonnementGraphe from './src/scenes/RayonnementGraphe';
import Evatranspiration from './src/scenes/Evatranspiration';
import EvatranspirationGraph from './src/scenes/EvatranspirationGraph';
import Vent from './src/scenes/Vent';
import VentGraph from './src/scenes/VentGraph';
import ProgressBar from './src/scenes/ProgressBar';
import Langue2 from './src/scenes/Langue2';
import Donut from './src/scenes/Donut';
import Rayon from './src/scenes/Rayon';
import Sabonner from './src/scenes/Sabonner';
import SmsScreen from './src/scenes/SmsScreen';
import {Provider as AuthProvider} from './src/context/AuthContext';
import {setNavigator} from './src/NavigationRef';

const switchNavigator=createSwitchNavigator ({
  Loader:LoadingScene,
  Dashboard:Dashboard,
  EvatranspirationGraph:EvatranspirationGraph,
  PrecipitationGraphe:PrecipitationGraphe,
  humiditegraph:humiditegraph,
  RayonnementGraphe:RayonnementGraphe,
  Humidite:Humidite,
  CountDownn:CountDownn,
  Temperature:Temperature,
  precipitation:precipitation,
  VentGraph:VentGraph,
  Evatranspiration:Evatranspiration,
  Rayonnement:menu,
  Humidite:Humidite,
  Vent:Vent,
  Rayon:Rayon,
  ProgressBar:ProgressBar,
  Donut:Donut,
  Langue2:Langue2,
  menu:menu,
  Login:Login,
  Sabonner:Sabonner,
  SmsScreen:SmsScreen,
});


const App=createAppContainer(switchNavigator);
export default () => {
  return(
    <AuthProvider>
      <App  ref={(navigator)=>{setNavigator(navigator)}}/>
    </AuthProvider>
  );
}




// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator screenOptions={{headerShown: false}}>
//       <Stack.Screen name="Loader" component={LoadingScene} />
//       <Stack.Screen name="profile" component={Dashboard} />
//       <Stack.Screen name="Dashboard" component={Dashboard} />
//       <Stack.Screen name="CountDownn" component={CountDownn} />

//       <Stack.Screen name="Temperature" component={Temperature} />
//       <Stack.Screen name="precipitation" component={      precipitation} />
//       <Stack.Screen name="Compass" component={Compass} />

      
//       <Stack.Screen name="Evatranspiration" component={Evatranspiration} />

//       <Stack.Screen name="Rayonnement" component={menu} />
//       <Stack.Screen name="Humidite" component={Humidite} />
//       <Stack.Screen name="Vent" component={Vent} />

//       <Stack.Screen name="Rayon" component={Rayon} />
//       <Stack.Screen name="ProgressBar" component={ProgressBar} />
//       <Stack.Screen name="Donut" component={Donut} />
//       <Stack.Screen name="Langue2" component={Langue2} />
//       <Stack.Screen name="Langue" component={Langue} />
//       <Stack.Screen name="Sinscrire" component={Sinscrire} />
//       <Stack.Screen name="menu" component={menu} />
//       <Stack.Screen name="MdpOUblie" component={MdpOUblie} />
//       <Stack.Screen name="Login" component={Login} />

//       <Stack.Screen name="MdpRein" component={MdpRein} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <AuthProvider>
//     <NavigationContainer>
//       <MyStack ref={(navigator)=>{setNavigator(navigator)}} />
//     </NavigationContainer>
//     </AuthProvider>
//   );
// }

