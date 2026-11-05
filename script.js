const spilListe =document.getElementById("spil-liste");

const kategorier = ["Mord mysterie", "Selskab", "Brug kroppen", "Kortspil", "Gammeldags", "Brain twister"];

function visSpil(liste) {
    spilListe.innerHTML = "";

kategorier.forEach(kategori => {
    spilListe.innerHTML += `<h2>${kategori}</h2>`;
    liste.filter(game=>game.category===kategori).forEach(game => {
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
});
}

visSpil(games);
