export function getDATAFromApi(phone) 
{
  const url='http://agrotech.yobeen.com/apimobile/data?phone='+phone
  return  fetch(url ,{
    method: 'GET',
    headers: {
      'Accept': '*',
      'Content-Type':'multipart/form-data; boundary=----WebKitFormBoundaryyEmKNDsBKjB7QEqu'      
    },

  })
    .then((response) => response.text())
    .then((text) => {
      console.log(text);
    

    })
  
    .catch((error) => {
      console.error(error);})
}