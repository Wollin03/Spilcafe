const spilListe =document.getElementById("spil-liste");

function visSpil(liste) {
    spilListe.innerHTML = "";

    liste.forEach(game => {
 spilListe.innerHTML += `
<article class="kort" data-category="${game.category}">
    <img src="${game.image}" alt="${game.title}">
    <h3>${game.title}</h3>
    <p class="tag">${game.category}</p>
    <p>${game.minTime} - ${game.maxTime} min</p>
    <p>${game.minPlayers} - ${game.maxPlayers} spillere</p>
</article>
`;
});
}

visSpil(games);
