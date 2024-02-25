const API_TOKEN = "f8b7dd8cd35c1f2d127ae463b592c48e"
export function getFilmsFromApiWithSearchedText (text) 
{
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
  return fetch(url)
  //convertit la réponse de notre API en JSON et la retourne
  .then((response) => response.json())
  //En cas d'erreur, on passe automatiquement dans le  catch  et on affiche une erreur à l'écran
    .catch((error) => console.error(error))
}