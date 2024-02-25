const API_TOKEN = "4af41326b627d125ce011e929c4fa3e6"
export function getStationFromApi(id) 
{
  const url = 'http://agrotech.yobeen.com/key='+ API_TOKEN +'&info=alldevices&identifiant='+id
  return fetch(url)
  //convertit la réponse de notre API en JSON et la retourne
  .then((response) => response.json())
  //En cas d'erreur, on passe automatiquement dans le  catch  et on affiche une erreur à l'écran
    .catch((error) => console.error(error))
}