// Exemple d'aperçu catalogue — remplace par tes données réelles
const films = [
  {title:"Lumières d'Ailleurs", source:"Netflix", year:2024},
  {title:"Nuit d'Horizon", source:"Prime Video", year:2023}
];
const series = [
  {title:"Vagues Numériques", source:"Disney+", seasons:2},
  {title:"Fragments", source:"HBO", seasons:1}
];
const anime = [
  {title:"Étoile Rouge", source:"Crunchyroll", episodes:24},
  {title:"Kaze no Memo", source:"Crunchyroll", episodes:12}
];
function renderList(arr, elId){
  const ul = document.getElementById(elId);
  ul.innerHTML = '';
  arr.forEach(it=>{
    const li = document.createElement('li');
    const meta = it.year?  (${it.year}) : it.seasons?  — ${it.seasons} saisons : it.episodes?  — ${it.episodes} ép. : '';
    li.textContent = ${it.title}${meta} — source: ${it.source || '—'};
    ul.appendChild(li);
  });
}
document.addEventListener('DOMContentLoaded', ()=>{
  renderList(films, 'films-list');
  renderList(series, 'series-list');
  renderList(anime, 'anime-list');
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('demo-btn').addEventListener('click', ()=>{
    alert("Pour obtenir l'application ou un accès, merci d'envoyer votre demande via le formulaire.");
  });
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e)=>{
    const msg = document.getElementById('form-msg');
    msg.classList.remove('hidden');
    msg.textContent = 'Demande envoyée — nous reviendrons vers vous. (Vérifiez votre endpoint de formulaire si aucune confirmation.)';
  });
});
