var todos = new Array;
show();

function show() {
    if (todos.length > 0) {
    var fill = '<ul>';
    for (var i = 0; i < todos.length; i += 1) {
        fill += '<li>' + todos[i] + ' <button class=\'rem\' id=\'' + i + '\'>x</button></li>';
    };
    fill += '</ul>';
    } else {
        fill = '<h2>There is nothing to do!</h2>';
    }
    document.getElementById("toDoList").innerHTML = fill;
    var buttons = document.getElementsByClassName('rem');
    for (var n = 0; n < buttons.length; n += 1) {
        buttons[n].addEventListener('click', removeElement);
    };
};

var addElement = function() {
    // console.log(document.getElementById("toDoText").value);
    var newText = document.getElementById("toDoText").value;
    todos.push(newText);
    show();
    document.getElementById("toDoText").value = "";
};

var removeElement = function() {
    var id= this.getAttribute('id');
    todos.splice(id, 1);
    show();
};
document.getElementById("addToList").addEventListener("click", addElement);
