console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


function addToCollection(collection, title, artist, yearPublished) {
  
  const album = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  }
  {collection.push(album);}

{return album;}
}

let myCollection = []
addToCollection(myCollection, 'Death of a Bachelor', 'Panic at the Disco', 2016);
addToCollection(myCollection, 'Beerbongs and Bentleys', 'Post Malone', 2018);
addToCollection(myCollection, 'The Thrill of it all', 'Sam Smith', 2017)
addToCollection(myCollection, 'Nevermind', 'Nirvana', 1991)
addToCollection(myCollection, 'One-X', 'Three Days Grace', 2006)
addToCollection(myCollection, 'To Pimp a Butterfly', 'Kendrick Lamar', 2015)
console.log(myCollection);

function showCollection(collection) {
for(const album of collection){
  console.log(`${album.title}, by ${album.artist} published in ${album.yearPublished}`);
  
}  
}



function findByArtist(collection,artist) {
 let matchingArtistWithAlbum = []
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].artist === artist) 
    {matchingArtistWithAlbum.push(collection[i])}

    
  }
  return matchingArtistWithAlbum;


}

console.log(findByArtist(myCollection,'Post Malone'));
console.log(findByArtist(myCollection,'Stevie Wonder'));


  

  






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
