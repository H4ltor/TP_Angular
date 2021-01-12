function add() {
    var task = document.getElementById("taskName").value;
    document.getElementById("list").innerHTML +=
    '<li>'+task+'<a href="#" onclick="del(this)"> Supprimer</a></li>';
}

function del(a){
    a.parentNode.parentNode.removeChild(a.parentNode);
}


