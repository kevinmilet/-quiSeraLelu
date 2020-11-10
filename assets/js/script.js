const btnRed = document.getElementById('btn_red');

let nameArray = ['Lucas', 'Florian M.', 'Florian L', 'Vincent', 'Kevin', 'Julien', 'Jérome', 'Laurent', 'Stéphane', 'Tim', 'Yann', 'Thierry (passe son tour!)'];

btnRed.onclick = function () {
    let elu = Math.floor(Math.random() * 12);
    document.getElementById('leGagnant').innerHTML = nameArray[elu];
}
