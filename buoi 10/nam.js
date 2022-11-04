async function nam(){
    const options={
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1a32db604dmsh86d43b61a30ba5cp117e04jsn4a2ba8bcc072',
      'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
    }
  };
  var reponse = ""
  reponse =  await fetch('https://youtube-music1.p.rapidapi.com/v2/search?query=eminem', options
  )
  data = await reponse.json()
  console.log(data);
  songs = data.result.songs
  songs.forEach(element => {
    
    
   console.log(element);
   var name = element.name
   var imgLink = element.thumbnail
   title = document.createElement("h1")
   
   img = document.createElement('img')
  title.innerHTML=name
  img.src=imgLink
   document.getElementById('main').appendChild(title)
   document.getElementById('main').appendChild(img)



    
  });
}
nam()
