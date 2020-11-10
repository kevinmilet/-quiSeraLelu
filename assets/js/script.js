// on assigne le bouton rouge à une variable, le bouton bleu ne sert à rien, Néo a choisi la pillule rouge
const btnRed = document.getElementById('btn_red');

// on crée un tableau avec les prénoms des joyeux participants qui ont été inscrit de force au tirage
let nameArray = ['Lucas', 'Florian M.', 'Florian L', 'Vincent', 'Kevin', 'Julien', 'Jérome', 'Laurent', 'Stéphane', 'Tim', 'Yann', 'Thierry (passe son tour!)'];

// on crée une fonction qui tire au sort un nom et affiche l'heureux vainqueur (il est content)
btnRed.onclick = function () {
    // là on fait un random sur les index du tableau - 12 prénoms, 12 indexs - et on arrondi le résultat
    let elu = Math.floor(Math.random() * 12);
    // on affiche le résultat sur la page html en prenant l'index tiré au hasard dans le tableau
    document.getElementById('leGagnant').innerHTML = nameArray[elu];
}
