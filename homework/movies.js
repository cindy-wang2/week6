window.addEventListener('DOMContentLoaded', async function(event) {
  let db = firebase.firestore()

  let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9b581f7d8c842c457d6c8baa24e27295&language=en-US'
  let response = await fetch(url)
  let movies = await response.json()
  console.log(movies)

  let allMovies = movies.results
  console.log(allMovies.length)

  // ⬆️ ⬆️ ⬆️ 

  // ⬇️ ⬇️ ⬇️
      for(let i=0; i<allMovies.length; i++) {
        let movieID = allMovies[i].id
        let moviePosterPath = allMovies[i].poster_path
 
          document.querySelector('.movies').insertAdjacentHTML('beforeend', `<div class="w-1/5 p-4 movies-${movieID}">
              <img src="https://image.tmdb.org/t/p/w500${moviePosterPath}" class="w-full">
              <a href="#" class="watched-button-${movieID} block text-center text-white bg-green-500 mt-4 px-4 py-2 rounded">Watched!</a>
            </div>`)

          let watchButton = document.querySelector(`.watched-button-${movieID}`)
          let selectedMovie = document.querySelector(`.movies-${movieID}`)
          
          watchButton.addEventListener('click', async function(event){
              event.preventDefault()
              selectedMovie.classList.add('opacity-20')

              await db.collection('watched').doc(`${movieID}`).set({})

          let watchedMovie = await db.collection('watched').doc(`${movieID}`).get()

          if(watchedMovie == movieID){
           selectedMovie.classList.add('opacity-20')
          }

          })
      }
  
    
     
        



  // Step 3: 
  // - Attach an event listener to each "watched button"
  // - Be sure to prevent the default behavior of the button
  // - When the "watched button" is clicked, changed the opacity
  //   of the entire "movie" by using .classList.add('opacity-20')
  // - When done, refresh the page... does the opacity stick?
  // - Bonus challenge: add code to "un-watch" the movie by
  //   using .classList.contains('opacity-20') to check if 
  //   the movie is watched. Use .classList.remove('opacity-20')
  //   to remove the class if the element already contains it.
  // ⬇️ ⬇️ ⬇️

    

  // ⬆️ ⬆️ ⬆️ 
  // End Step 3

  // Step 4: 
  // - Properly configure Firebase and Firebase Cloud Firestore
  // - Inside your "watched button" event listener, you wrote in
  //   step 3, after successfully setting opacity, persist data
  //   for movies watched to Firebase.
  // - The data could be stored in a variety of ways, but the 
  //   easiest approach would be to use the TMDB movie ID as the
  //   document ID in a "watched" Firestore collection.
  // - Hint: you can use .set({}) to create a document with
  //   no data – in this case, the document doesn't need any data;
  //   if a TMDB movie ID is in the "watched" collection, the 
  //   movie has been watched, otherwise it hasn't.
  // - Modify the code you wrote in Step 2 to conditionally
  //   make the movie opaque if it's already watched in the 
  //   database.
  // - Hint: you can use if (document) with no comparison
  //   operator to test for the existence of an object.
})