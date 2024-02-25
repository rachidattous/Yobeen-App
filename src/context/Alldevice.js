import createDataContext from './createDataContext';
import AuthentificationAPI from '../API/AuthentificationAPI';
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import {navigate} from '../NavigationRef';

/*Function of reducer */
const alldeviceReducer=(state,action)=>{
    switch(action.type){
        case 'add_error':
            return {...state,errorMessage:action.payload};
        case 'signup':
            return {...state,reponse:action.payload};
        default:
            return state;
    }
};

const signup=(dispatch)=>{
return async (phone) =>{
try{
const axios = require('axios');
const url='http://agrotech.yobeen.com/apimobile/alldevice?phone='
const reponse= await  axios.get(url,{
    params: {
      phone:phone
    }
  },{
    headers: {
        'Accept': '*',
        'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
      },
    })
     
dispatch({type:'signup',payload:reponse.data});
console.log('hgcgh')
console.log(reponse.data)

if (reponse.data['user infomation'].length==0)
{
    
console.log(reponse.data['user infomation'].length)
}
else 
{
    navigate('Dashboard');

    console.log(reponse.data['user infomation'].first_name)
    
}

}
catch(err){
console.log(err);
    dispatch({
type:'add_error',
payload:'Something went wrong'
    });

}
}; 
};
export const {Provider,Context} =createDataContext(
    alldeviceReducer,
     {signup},
     {reponse:'',errorMessage:''}
);