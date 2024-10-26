console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line


function addToCollection(collection, title, artist, yearPublished) {
  
  const album = {
    title:title,
    artist:artist,
    yearPublished:yearPublished
  }
  myCollection.push(album);

  collection.push(album);
  
  
  return album ;
}

let myCollection = []
addToCollection(myCollection, 'Death of a Bachelor', 'Panic at the Disco', 2016);
addToCollection(myCollection, 'Beerbongs and Bentleys', 'Post Malone', 2018);
addToCollection(myCollection, )





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
