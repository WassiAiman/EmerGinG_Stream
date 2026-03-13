// VOTRE CATALOGUE - Remplacez ces exemples par vos vrais contenus
const films = [
    {title: "Dune : Deuxième partie", source: "Netflix", year: 2024},
    {title: "Poor Things", source: "Disney+", year: 2024},
    {title: "The Batman", source: "Prime Video", year: 2022},
    {title: "Oppenheimer", source: "Peacock", year: 2023},
    {title: "Wonka", source: "HBO Max", year: 2023}
];

const series = [
    {title: "The Last of Us", source: "HBO", seasons: 1},
    {title: "Shōgun", source: "FX/Hulu", seasons: 1},
    {title: "The Bear", source: "Disney+", seasons: 2},
    {title: "Fallout", source: "Prime Video", seasons: 1}
];

const anime = [
    {title: "Solo Leveling", source: "Crunchyroll", episodes: 12},
    {title: "Frieren", source: "Crunchyroll", episodes: 28},
    {title: "Demon Slayer", source: "Crunchyroll", episodes: 55},
    {title: "Jujutsu Kaisen", source: "Crunchyroll", episodes: 47},
    {title: "One Piece", source: "Crunchyroll", episodes: 1089}
];

function renderList(arr, elId) {
    const ul = document.getElementById(elId);
    if (!ul) return;
    
    ul.innerHTML = '';
    arr.forEach(item => {
        const li = document.createElement('li');
        
        // Construction du texte selon le type de contenu
        let meta = '';
        if (item.year) meta = `(${item.year})`;
        else if (item.seasons) meta = `— ${item.seasons} saison${item.seasons > 1 ? 's' : ''}`;
        else if (item.episodes) meta = `— ${item.episodes} ép.`;
        
        li.innerHTML = `<strong>${item.title}</strong> ${meta} <br><small>source: ${item.source || '—'}</small>`;
        ul.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Afficher le catalogue
    renderList(films, 'films-list');
    renderList(series, 'series-list');
    renderList(anime, 'anime-list');
    
    // Année du footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Bouton de démo
    document.getElementById('demo-btn').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Gestionnaire du formulaire
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');
    
    form.addEventListener('submit', (e) => {
        // Message de confirmation (le formulaire est déjà envoyé à Formspree)
        msg.classList.remove('hidden');
        msg.textContent = '✓ Demande envoyée ! Nous vous répondrons dans les plus brefs délais.';
        
        // Optionnel : cacher le message après 5 secondes
        setTimeout(() => {
            msg.classList.add('hidden');
        }, 5000);
    });
});  });
});
