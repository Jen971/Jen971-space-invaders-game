document.addEventListener("DOMContentLoaded", () => {
    const mainPage = document.getElementById("main-page");
    const playerRegistration = document.getElementById("player-registration");
    const returningPlayer = document.getElementById("returning-player");
    const playerInfoPage = document.getElementById("player-info-page");
  
    const startGameButton = document.getElementById("start-game");
    const helpButton = document.getElementById("help");
    const registerPlayerButton = document.getElementById("register-player");
    const playerInfoButton = document.getElementById("player-info");
    const playNowButton = document.getElementById("play-now");
    const backToMainRegistrationButton = document.getElementById("back-to-main");
    const backToMainReturningButton = document.getElementById("back-to-main2");
    const backToMainInfoButton = document.getElementById("back-to-main3");
  
    const playerNameInput = document.getElementById("player-name");
    const infoName = document.getElementById("info-name");
    const infoId = document.getElementById("info-id");
    const infoScore = document.getElementById("info-score");
    const infoLevel = document.getElementById("info-level");
  
    // Retrieve session data (if present) from the JSP page
    let playerId = "${sessionScope.playerId}";
    let playerName = "${sessionScope.playerName}";
    let playerScore = "${sessionScope.playerScore}" || 0;  // Default score if not available
    let playerLevel = "${sessionScope.playerLevel}" || 1; // Default level if not available
  
    const generatePlayerId = () => `Player-${Math.floor(Math.random() * 10000)}`;
  
    const showPage = (page) => {
        // Hide all pages first
        [mainPage, playerRegistration, returningPlayer, playerInfoPage].forEach(el => el.classList.add("hidden"));
        // Show the target page
        page.classList.remove("hidden");
    };
  
    startGameButton.addEventListener("click", () => {
        if (!playerId) {
            showPage(playerRegistration);
        } else {
            showPage(returningPlayer);
        }
    });
  
    registerPlayerButton.addEventListener("click", () => {
        const name = playerNameInput.value.trim();
        if (name) {
            playerId = generatePlayerId();
            playerName = name;
            // Set session data via server (you would send this to a JSP endpoint for saving)
            sessionStorage.setItem("playerId", playerId); // Storing on the client for simplicity here
            sessionStorage.setItem("playerName", playerName);
            
            // Update the player info on the page without an alert
            infoName.textContent = playerName;
            infoId.textContent = playerId;
            infoScore.textContent = playerScore;
            infoLevel.textContent = playerLevel;
            showPage(returningPlayer);
        } else {
            alert("Please enter a valid name.");
        }
    });
  
    playerInfoButton.addEventListener("click", () => {
        // Display the stored player information
        infoName.textContent = playerName;
        infoId.textContent = playerId;
        infoScore.textContent = playerScore;
        infoLevel.textContent = playerLevel;
        showPage(playerInfoPage);
    });
  
    playNowButton.addEventListener("click", () => {
        // Placeholder to start the game
        console.log("Game Started!");
        // Add game initiation logic here
    });
  
    // Back button functionality for each page
    backToMainRegistrationButton.addEventListener("click", () => {
        showPage(mainPage);
    });
  
    backToMainReturningButton.addEventListener("click", () => {
        showPage(mainPage);
    });
  
    backToMainInfoButton.addEventListener("click", () => {
        showPage(returningPlayer);
    });
});
/**
 * 
 */