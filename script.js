// VOTRE CATALOGUE - Personnalisez ici !
const films = [
    {title: "Dune : Deuxième partie", source: "Netflix", year: 2024},
    {title: "Poor Things", source: "Disney+", year: 2024},
    {title: "The Batman", source: "Prime Video", year: 2022},
    {title: "Oppenheimer", source: "Peacock", year: 2023},
    {title: "Wonka", source: "HBO Max", year: 2023},
    {title: "Kung Fu Panda 4", source: "DreamWorks", year: 2024},
    {title: "Godzilla x Kong", source: "HBO", year: 2024},
    {title: "Madame Web", source: "Netflix", year: 2024}
];

const series = [
    {title: "The Last of Us", source: "HBO", seasons: 1},
    {title: "Shōgun", source: "FX/Hulu", seasons: 1},
    {title: "The Bear", source: "Disney+", seasons: 2},
    {title: "Fallout", source: "Prime Video", seasons: 1},
    {title: "House of the Dragon", source: "HBO", seasons: 2},
    {title: "The Boys", source: "Prime Video", seasons: 4},
    {title: "Stranger Things", source: "Netflix", seasons: 4}
];

const anime = [
    {title: "Solo Leveling", source: "Crunchyroll", episodes: 12},
    {title: "Frieren", source: "Crunchyroll", episodes: 28},
    {title: "Demon Slayer", source: "Crunchyroll", episodes: 55},
    {title: "Jujutsu Kaisen", source: "Crunchyroll", episodes: 47},
    {title: "One Piece", source: "Crunchyroll", episodes: 1089},
    {title: "Attack on Titan", source: "Crunchyroll", episodes: 87},
    {title: "Spy x Family", source: "Crunchyroll", episodes: 37},
    {title: "Chainsaw Man", source: "Crunchyroll", episodes: 12}
];

// Fonction pour afficher les listes
function renderList(arr, elId) {
    const ul = document.getElementById(elId);
    if (!ul) return;
    
    if (arr.length === 0) {
        ul.innerHTML = '<li class="empty-message">Aucun contenu disponible</li>';
        return;
    }
    
    ul.innerHTML = '';
    arr.forEach(item => {
        const li = document.createElement('li');
        
        // Construction du texte selon le type
        let meta = '';
        if (item.year) meta = `(${item.year})`;
        else if (item.seasons) meta = `— ${item.seasons} saison${item.seasons > 1 ? 's' : ''}`;
        else if (item.episodes) meta = `— ${item.episodes} ép.`;
        
        li.innerHTML = `<strong>${item.title}</strong> ${meta} <br><small>📺 ${item.source || 'Source inconnue'}</small>`;
        ul.appendChild(li);
    });
}

// Fonction pour mettre à jour les compteurs
function updateCounts() {
    document.getElementById('films-count').textContent = films.length;
    document.getElementById('series-count').textContent = series.length;
    document.getElementById('anime-count').textContent = anime.length;
}

// Fonction pour filtrer les catégories
function filterCatalog(category) {
    const categories = document.querySelectorAll('.category');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Mettre à jour les boutons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Afficher/masquer les catégories
    categories.forEach(cat => {
        if (category === 'all') {
            cat.style.display = 'block';
        } else {
            if (cat.dataset.category === category) {
                cat.style.display = 'block';
            } else {
                cat.style.display = 'none';
            }
        }
    });
}

// Attendre que la page soit chargée
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page chargée, initialisation...');
    
    // Afficher les catalogues
    renderList(films, 'films-list');
    renderList(series, 'series-list');
    renderList(anime, 'anime-list');
    
    // Mettre à jour les compteurs
    updateCounts();
    
    // Afficher tout par défaut
    filterCatalog('all');
    
    // Gestionnaire pour les boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            const category = this.dataset.category;
            filterCatalog(category);
        });
    });
    
    // Année du footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Bouton "Demander l'accès à l'application"
    const demoBtn = document.getElementById('demo-btn');
    if (demoBtn) {
        demoBtn.addEventListener('click', function() {
            // Scroller vers le formulaire
            document.getElementById('contact').scrollIntoView({ 
                behavior: 'smooth' 
            });
            
            // Optionnel : pré-remplir le sujet
            const subjectInput = document.querySelector('input[name="subject"]');
            if (subjectInput && !subjectInput.value) {
                subjectInput.value = 'Demande d\'accès à l\'application Android';
            }
        });
    }
    
    // Gestionnaire du formulaire
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Ne pas empêcher l'envoi, mais afficher un message
            setTimeout(() => {
                msg.classList.remove('hidden');
                msg.textContent = '✓ Demande envoyée ! Nous vous répondrons dans les 24h.';
                
                // Optionnel : cacher après 5 secondes
                setTimeout(() => {
                    msg.classList.add('hidden');
                }, 5000);
            }, 100);
        });
    }
    
    console.log('Initialisation terminée !');
});        const li = document.createElement('li');
        
        let meta = '';
        if (item.year) meta = `(${item.year})`;
        else if (item.seasons) meta = `— ${item.seasons} saison${item.seasons > 1 ? 's' : ''}`;
        else if (item.episodes) meta = `— ${item.episodes} ép.`;
        
        li.innerHTML = `<strong>${item.title}</strong> ${meta} <br><small>source: ${item.source || '—'}</small>`;
        ul.appendChild(li);
    });
}

// Fonction pour filtrer les catégories
function filterCatalog(category) {
    const categories = document.querySelectorAll('.category');
    const buttons = document.querySelectorAll('.filter-btn');
    
    // Mettre à jour les boutons actifs
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    // Filtrer les catégories
    categories.forEach(cat => {
        if (category === 'all' || cat.dataset.category === category) {
            cat.classList.remove('hidden');
            // Animation
            cat.classList.add('fade-in');
        } else {
            cat.classList.add('hidden');
            cat.classList.remove('fade-in');
        }
    });
}

// Ajouter les compteurs
function addCounters() {
    document.querySelector('.category[data-category="films"] h3').innerHTML = 
        '🎬 Films populaires <span class="item-count">' + films.length + '</span>';
    document.querySelector('.category[data-category="series"] h3').innerHTML = 
        '📺 Séries populaires <span class="item-count">' + series.length + '</span>';
    document.querySelector('.category[data-category="anime"] h3').innerHTML = 
        '🗾 Anime & animation <span class="item-count">' + anime.length + '</span>';
}

document.addEventListener('DOMContentLoaded', () => {
    // Afficher le catalogue
    renderList(films, 'films-list');
    renderList(series, 'series-list');
    renderList(anime, 'anime-list');
    
    // Ajouter les compteurs
    addCounters();
    
    // Initialiser le filtre (afficher tout par défaut)
    filterCatalog('all');
    
    // Gestionnaire pour les boutons de filtre
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            filterCatalog(category);
        });
    });
    
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
        msg.classList.remove('hidden');
        msg.textContent = '✓ Demande envoyée ! Nous vous répondrons dans les plus brefs délais.';
        
        setTimeout(() => {
            msg.classList.add('hidden');
        }, 5000);
    });
});        else if (item.episodes) meta = `— ${item.episodes} ép.`;
        
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
