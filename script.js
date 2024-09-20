his = []
function CallAPI(params) {

    codewarsName = document.getElementById("name").value
    fetch('https://www.codewars.com/api/v1/users/' + codewarsName)
        .then(response => response.json())
        .then(adatok => {
            kiiras(adatok)
            let obj ={name: adatok.username,score: adatok.ranks.overall.score}
            
            if (!his.some(e => e.name === adatok.username)) {
                his.push(obj)
              }
            
        })
        .catch(error => {
            document.getElementById("result").innerHTML = "Nincs a keresésnek megfelelő találat"

        });
        
}
function kiiras(adatok) {
    let ki = document.getElementById("result")
    ki.innerHTML =""
    ki.innerHTML += "<div class='resultname'>" + adatok.username + " adatai</div>"
    ki.innerHTML+="<br>"
    ki.innerHTML+="<div> Összpontszám: " + adatok.ranks.overall.score +"</div>"
    ki.innerHTML+="<div> Teljesített feladatok: " + adatok.codeChallenges.totalCompleted + "</div>"
    let temp ="<table></tbody><tr><th>Nyelv</th><th>Pontszám</th><th>Kyu</th></tr>"
    
    for (var property in adatok.ranks.languages) {
        temp +="<tr><td>"+ property + '</td><td> ' + adatok.ranks.languages[property].score +"</td><td> " + adatok.ranks.languages[property].name + "</td></tr>";

    }
    temp+="</tbody></table>"
    ki.innerHTML += temp

}
function leaderboard() {
    let i = 1
    his.sort((a,b)=>b.score-a.score)
    console.log(his);
    ki = `<table><tr><th>#</th><th>név</th><th>Score</th></tr>`
    for (const person of his) {
        ki+="<tr><td>" + i + "</td><td>" + person.name + "</td><td>"+person.score + "</tr>"
    i++;
    }
    ki+="</table>"
    document.getElementById("leaderboard").innerHTML = ki
}

var mode = 1;
function modeSwitch() {
    mode*=-1
    if (mode == 1) {
        document.getElementById("content").innerHTML=`<h2>Codewars profile fetch</h2>
        <input type="text" placeholder="Codewars Name" id="name">
        <button onclick="CallAPI();">Lekérdezés</button>
        <div id="result">A kért adat itt fog megjelenni</div>
        <button class="modeSwitch" id="modeSwitch"
        onclick="modeSwitch()">Ranglista mutatása</button>`
    }
    if (mode ==-1) {
        document.getElementById("content").innerHTML=`<h2>Leaderboard</h2>
        <div id="leaderboard"></div>
        <button class="modeSwitch" id="modeSwitch"
        onclick="modeSwitch()">Lekérés mutatása</button>`
        
        leaderboard()
        
        
    }
}