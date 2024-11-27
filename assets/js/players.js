// if (!movieData) {
//     // If not in localStorage, fetch it from the JSON file
//     fetch('assets/js/players.js')
//       .then(response => response.json())
//       .then(data => {
//         players = data.players;  // Assign data to movieData variable
//         localStorage.setItem("players", JSON.stringify(players));  // Store in localStorage
//         displayMovies(players);  // Call function to display movies
//       })
//       .catch(error => console.error('Erreur:', error));
//   } else {
//     // If data is in localStorage, use it directly
//     displayMovies(players);
//   }
  
//   // Function to display movies in the gallery
//   function displayMovies(data) {
//     const afficherplayers = document.getElementById("playersList");
//     if (afficherplayers) {
//       data.forEach(joueu => {
//         const filmElement = document.createElement("img");
//         filmElement.src = film.image;  // Ensure this path is correct
//         filmElement.alt = film.name;
//         filmElement.classList.add("film-thumbnail");
  
//         // Redirect on image click
//         filmElement.addEventListener("click", () => {
//           window.location.href = "./DetailMovies/detailMovie.html?id=${film.id}";
//         });
  
//         gallery.appendChild(filmElement);  // Add the image to the gallery
//       });
//     }
//   }