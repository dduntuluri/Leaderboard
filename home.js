function updateLeaderboard() {
  // Fetch or calculate updated points for each user (replace with your logic)
  const leaderboardData = [
    { rank: 1, name: "Akash Manikandan", points: getUpdatedPoints(1) }, // Updated points
    { rank: 2, name: "Ashik Mohammad", points: 650 },
    // ... more data
  ];

  // Update the leaderboard table with the new data
  const tableBody = document.getElementById("leaderboard-data");
  tableBody.innerHTML = ""; // Clear existing content

  leaderboardData.forEach(player => {
    const tableRow = document.createElement("tr");
    const rankCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const pointsCell = document.createElement("td");

    rankCell.textContent = player.rank;
    nameCell.textContent = player.name;
    pointsCell.innerHTML = `<span class="gold-star">★</span>${player.points} Points`;

    tableRow.appendChild(rankCell);
    tableRow.appendChild(nameCell);
    tableRow.appendChild(pointsCell);

    tableBody.appendChild(tableRow);
  });
}

// This function is an example (replace with your actual logic to get points)
function getUpdatedPoints(userId) {
  // Simulate fetching points from a server (replace with your implementation)
  const newPoints = Math.floor(Math.random() * 100) + 500; // Random points between 500 and 599
  return newPoints;
}
