// // Fonction pour ouvrir le modal
// function openPlayerModal() {
//   const modal = document.getElementById('player-modal');
//   modal.classList.remove('hidden'); // Affiche le modal
// }

// // Fonction pour fermer le modal
// function closeModal() {
//   const modal = document.getElementById('player-modal');
//   modal.classList.add('hidden'); // Masque le modal
// }

// // Ajout d'un gestionnaire d'événements aux boutons "+"
// document.querySelectorAll('.player-container button').forEach(button => {
//   button.addEventListener('click', function () {
//     openPlayerModal();
//   });
// });


// document.addEventListener("DOMContentLoaded", () => {
//   const showPlayersBtn = document.getElementById("showPlayersBtn");
//   const playersModal = document.getElementById("playersModal");
//   const closeModalBtn = document.getElementById("closeModalBtn");
//   const playersList = document.getElementById("playersList");

//   // Charger les joueurs depuis un fichier JSON local ou un objet
//   const playersData = {
//     "players": [
//       {
//         "name": "Lionel Messi",
//         "photo": "https://cdn.sofifa.net/players/158/023/25_120.png",
//         "position": "RW",
//         "club": "Inter Miami",
//         "logo": "https://cdn.sofifa.net/meta/team/239235/120.png"
//       },
//       {
//         "name": "Cristiano Ronaldo",
//         "photo": "https://cdn.sofifa.net/players/020/801/25_120.png",
//         "position": "ST",
//         "club": "Al Nassr",
//         "logo": "https://cdn.sofifa.net/meta/team/2506/120.png"
//       }
//       // Ajoutez les autres joueurs ici
//     ]
//   };

//   // Ouvrir la modale
//   showPlayersBtn.addEventListener("click", () => {
//     playersModal.classList.remove("hidden");
//     displayPlayers(playersData.players);
//   });

//   // Fermer la modale
//   closeModalBtn.addEventListener("click", () => {
//     playersModal.classList.add("hidden");
//   });

//   // Fonction pour afficher les joueurs
//   function displayPlayers(players) {
//     playersList.innerHTML = ""; // Nettoyer la liste précédente
//     players.forEach((player) => {
//       const playerCard = document.createElement("div");
//       playerCard.className =
//         "border rounded-lg p-4 flex flex-col items-center bg-gray-100 shadow-md";
//       playerCard.innerHTML = `
//         <img src="${player.photo}" alt="${player.name}" class="w-20 h-20 rounded-full object-cover">
//         <h3 class="text-lg font-bold mt-2">${player.name}</h3>
//         <p class="text-gray-600">${player.position}</p>
//         <p class="text-gray-500 text-sm">${player.club}</p>
//       `;
//       playersList.appendChild(playerCard);
//     });
//   }
// });



// playerCard.addEventListener("click", () => {
//   console.log(`${player.name} sélectionné !`);
// });