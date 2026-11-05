// Find elementerne fra HTML
const sogFelt = document.getElementById("sog-felt");
const sogKnap = document.getElementById("sog-knap");
const spilListe = document.getElementById("spil-liste");

// Funktion der viser spillene på hjemmesiden
function visSpil(spil) {

    // Ryd den gamle liste
    spilListe.innerHTML = "";

    // Hvis der ikke er nogen resultater
    if (spil.length === 0) {
        spilListe.innerHTML = "<p>Ingen spil fundet.</p>";
        return;
    }

    // Gennemgå alle spillene
    spil.forEach(game => {

        // Opret en boks til hvert spil
        const spilElement = document.createElement("div");

        spilElement.classList.add("spil-kort");

        // Indsæt information om spillet
        spilElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">

            <h2>${game.title}</h2>

            <p><strong>Kategori:</strong> ${game.category}</p>

            <p><strong>Spilletid:</strong> 
            ${game.minTime}-${game.maxTime} minutter</p>

            <p><strong>Antal spillere:</strong> 
            ${game.minPlayers}-${game.maxPlayers}</p>

            <p><strong>Sværhedsgrad:</strong> 
            ${game.difficulty}</p>

            <p>${game.description}</p>
        `;

        // Tilføj spillet til hjemmesiden
        spilListe.appendChild(spilElement);
    });
}


// SØGEFUNKTION
sogKnap.addEventListener("click", () => {

    // Hent søgeordet
    const sogeord = sogFelt.value.toLowerCase().trim();

    // Find spil der matcher søgeordet
    const resultat = games.filter(game =>
        game.title.toLowerCase().includes(sogeord) ||
        game.category.toLowerCase().includes(sogeord)
    );

    // Vis søgeresultatet
    visSpil(resultat);
});


// Gør det muligt at søge ved at trykke Enter
sogFelt.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        sogKnap.click();
    }
});


// Vis alle spil, når hjemmesiden åbnes
visSpil(games);