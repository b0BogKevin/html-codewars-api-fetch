function CallAPI(params) {

    codewarsName = document.getElementById("name").value
    fetch('https://www.codewars.com/api/v1/users/' + codewarsName)
        .then(response => response.json())
        .then(adatok => {
            kiiras(adatok)
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Nincs a keresésnek megfelelő találat"

        });
}
function kiiras(adatok) {
    let ki = document.getElementById("result")
    ki.innerHTML = ""
    console.log(adatok)
    ki.innerHTML += "<div class='resultname'>Név: " + adatok.username + "</div>"
    console.log(adatok.ranks.languages);
    ki.innerHTML+="<br>"
    ki.innerHTML+="<div> Összpontszám: " + adatok.ranks.overall.score +"</div>"
    ki.innerHTML+="<div> Teljesített feladatok: " + adatok.codeChallenges.totalCompleted + "</div>"

    ki.innerHTML+="<br>"
    for (var property in adatok.ranks.languages) {
        ki.innerHTML +="<div class='languageData'>"+ property + ': ' + adatok.ranks.languages[property].score +"pont; " + adatok.ranks.languages[property].name + "</div>";

    }
    
    console.log(ki)
}