const spilListe = document.getElementById("spil-liste");

const kategorier = ["Mord mysterie", "Selskab", "Brug kroppen", "Kortspil", "Gammeldags", "Brain twister"];

function visSpil(liste) {
  spilListe.innerHTML = "";

  kategorier.forEach(kategori => {
    let kort = "";                                   // ← ÆNDRING 1: ny linje

    liste.filter(game => game.category === kategori).forEach(game => {
      kort += ` 
        <article class="kort" data-category="${game.category}">
          <img src="${game.image}" alt="${game.title}">
          <h3>${game.title}</h3>
          <p class="tag">${game.category}</p>
          <p>${game.minTime} - ${game.maxTime} min</p>
          <p>${game.minPlayers} - ${game.maxPlayers} spillere</p>
        </article>
      `;
    });

    spilListe.innerHTML += ` 
      <h2>${kategori}</h2>
      <div class="raekke">${kort}</div>
    `;
  });
}

visSpil(games);