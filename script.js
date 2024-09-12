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
    ki.innerHTML =""
    console.log(adatok)
    ki.innerHTML += "<div class='resultname'>" + adatok.username + " adatai</div>"
    console.log(adatok.ranks.languages);
    ki.innerHTML+="<br>"
    ki.innerHTML+="<div> Összpontszám: " + adatok.ranks.overall.score +"</div>"
    ki.innerHTML+="<div> Teljesített feladatok: " + adatok.codeChallenges.totalCompleted + "</div>"
    let temp ="<table></tbody><tr><th>Nyelv</th><th>Pontszám</th><th>Kyu</th></tr>"
    
    for (var property in adatok.ranks.languages) {
        temp +="<tr><td>"+ property + '</td><td> ' + adatok.ranks.languages[property].score +"pont</td><td> " + adatok.ranks.languages[property].name + "</td></tr>";

    }
    temp+="</tbody></table>"
    ki.innerHTML += temp
    
    console.log(ki)
}