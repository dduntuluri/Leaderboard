const homeLink = document.getElementById('homeLink');

homeLink.addEventListener('click', () => {
  window.location.href = 'home.html';
});
const leaderboardData = [
  { rank: 1, name: "Akash Manikandan", points: 700 },
  { rank: 2, name: "Ashik Mohammad", points: 650 },
  { rank: 3, name: "Anu L", points: 600 },
  { rank: 4, name: "Ashik Mohammad", points: 581 },
  { rank: 5, name: "Anu L", points: 545 },
  { rank: 6, name: "Ashik Mohammad", points: 515 },
  { rank: 7, name: "Akash Manikandan", points: 500 },
  { rank: 8, name: "Ashik Mohammad", points: 700 },

  // ... more data
];


console.log("Script loaded");

