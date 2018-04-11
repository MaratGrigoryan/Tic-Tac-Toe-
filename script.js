var num = prompt("Min 2, Max 100");
var number = parseInt(num * num);
if(num > 2 && num <=100) {
    var container = document.getElementById('container');
    container.style.width = num * 100 + "px";

for(var i = 0; i < number; i++ ) {
        var table = document.getElementById('table');
        var dive = document.createElement("div");
        var att = document.createAttribute('id');
        var attr = document.createAttribute('class');
        var click = document.createAttribute('onclick');
        click.value = "move("+ i + ", 'player')";
        attr.value = "cell";
        att.value = i;
        dive.setAttributeNode(attr);
        dive.setAttributeNode(att);
        dive.setAttributeNode(click);
        table.appendChild(dive);
    }
}else{
    alert('Անթույլատրելի քանակ');
    location.reload();
}

var t = new Array(number);
function func(){
var gender = document.getElementsByName('gender');
if(gender[1].checked){
    ai()
    }   
}

function ai(){
    var id = Math.floor(Math.random() * number);
    t[id] ? ai () : move(id, 'ai');
}

function checkEnd(){
    if(t[0] == "ai" && t[1] == "ai" && t[2] == "ai" || t[0] == "player" && t[1] == "player" && t[2] == "player" ) return true;
    if(t[3] == "ai" && t[4] == "ai" && t[5] == "ai" || t[3] == "player" && t[4] == "player" && t[5] == "player" ) return true;
    if(t[6] == "ai" && t[7] == "ai" && t[8] == "ai" || t[6] == "player" && t[7] == "player" && t[8] == "player" ) return true;
    if(t[0] == "ai" && t[3] == "ai" && t[6] == "ai" || t[0] == "player" && t[3] == "player" && t[6] == "player" ) return true;
    if(t[1] == "ai" && t[4] == "ai" && t[7] == "ai" || t[1] == "player" && t[4] == "player" && t[7] == "player" ) return true;
    if(t[2] == "ai" && t[5] == "ai" && t[8] == "ai" || t[2] == "player" && t[5] == "player" && t[8] == "player" ) return true;
    if(t[0] == "ai" && t[4] == "ai" && t[8] == "ai" || t[0] == "player" && t[4] == "player" && t[8] == "player" ) return true;
    if(t[2] == "ai" && t[4] == "ai" && t[6] == "ai" || t[2] == "player" && t[4] == "player" && t[6] == "player" ) return true;
    if(t[0] && t[1] && t[2] && t[3] && t[4] && t[5] && t[6] && t[7] && t[8]) return true;
}    


function move(id, role){
    if(t[id]) {return false};
    t[id] = role;
    document.getElementById(id).className = 'cell ' + role;
    !checkEnd() ?  (role == "player") ? ai() : null : reset();   
}

function reset() {
    alert("Շնորհակալություն!!!");
    location.reload();
}

