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
this.board = [];
this.result = [];
function checkEnd(){
    var nume = parseInt(num)
        //check rows
        if(nume > 3){
        for(var i = 0; i <= number; i++) {
            if(t[i] !== undefined && t[i] === t[i + 1] && t[i + 1] === t[i + 2] && t[i + 2] === t[i + 3]) {
               console.log("check rows")
                return true;
            }
        }
        //check columns
        for(var i = 0; i <= number; i++) {
            if(t[i] !== undefined && t[i] === t[i + nume] && t[i + nume] === t[i + 2 * nume] && t[i + 2 * nume] === t[i + 3 * nume]) {
               console.log('check columns' )
                return true;
            }
        }

        //check diagonals
       for(var i = 0 ; i <= number ; i++ ) {
        if(t[i] !== undefined && t[i] == t[i + nume + 1] && t[i + nume + 1] === t[i + 2 * nume + 2] && t[i + 2 * nume + 2] === t[i + 3 * nume + 3]) {
            console.log('check diagonals')
            return true;
            }
        }
        //-check diagonals
       for(var i = 0 , j = nume - 1; i <= number; i++ ) {
        if(t[i] !== undefined && t[i] == t[i + j] && t[i + j] === t[i + 2 * j] && t[i + 2 * j] === t[i + 3 * j]) {
            console.log('-check diagonals')
            return true;
            }
        }
    }
    else{
        for(var i = 0; i <= number; i++) {
            if(t[i] !== undefined && t[i] === t[i + 1] && t[i + 1] === t[i + 2]) {
               console.log("check rows")
                return true;
            }
        }
        //check columns
        for(var i = 0; i <= number; i++) {
            if(t[i] !== undefined && t[i] === t[i + nume] && t[i + nume] === t[i + 2 * nume]) {
               console.log('check columns' )
                return true;
            }
        }
        //check diagonals
       for(var i = 0 ; i <= number ; i++ ) {
        if(t[i] !== undefined && t[i] === t[i + nume + 1] && t[i + nume + 1] === t[i + 2 * nume + 2]) {
            console.log('check diagonals')
            return true;
            }
        }
        //-check diagonals
       for(var i = 0 , j = nume - 1; i <= number; i++ ) {
        if(t[i] !== undefined && t[i] === t[i + j] && t[i + j] === t[i + 2 * j]) {
            console.log('-check diagonals')
            return true;
            }
        }
    }
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

