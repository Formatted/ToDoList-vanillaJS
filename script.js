var todos = new Array;
var doneDos = new Array;
show();

function show() {
    if (todos.length > 0) {
    var fill = '<ul>';
    for (var i = 0; i < todos.length; i += 1) {
        fill += '<li>' + todos[i]
        + ' <button class=\'rem\' id=\'' + i + '\'>x</button>'
        + ' <button class=\'addBtn\' id=\'' + '10' + i + '\'>Done</button>'
        + '</li>';
    };
    fill += '</ul>';
    } else {
        if(doneDos.length === 0){
        fill = '<h2>There is nothing to do!</h2>';
      } else {
        fill = '<h2>You have done all these!GZ!</h2>';
      }
    }
    document.getElementById("toDoList").innerHTML = fill;

    if (doneDos.length > 0) {
      var fillD = '<ul>';
      for (var iii = 0; iii < doneDos.length; iii += 1) {
        fillD += '<li>' + doneDos[iii]
        + '</li>';
      }
      fillD += '</ul>';
    } else {
      fillD = "";
    }
    document.getElementById("ListOfDone").innerHTML = fillD;

    var buttons = document.getElementsByClassName('rem');
    for (var n = 0; n < buttons.length; n += 1) {
        buttons[n].addEventListener('click', removeElement);
    };
    var donebuttons = document.getElementsByClassName('addBtn');
    for (var x = 0; x < donebuttons.length; x += 1) {
        donebuttons[x].addEventListener('click', doneWItem);
    };
};

var addElement = function() {
    var newText = document.getElementById("toDoText").value;
    if (newText != "") {
            todos.push(newText);
            show();
            document.getElementById("toDoText").value = "";
        }
};

var removeElement = function() {
    var id= this.getAttribute('id');
    todos.splice(id, 1);
    show();
};
var doneWItem = function() {
  var id = this.getAttribute('id');
  id = id - 100;
  doneDos.push(todos[id]);
  console.log(doneDos);
  todos.splice(id, 1);
  show();
}
var addOnEnter = function(e) {
    if (e.charCode == "13") {
        var newText = document.getElementById("toDoText").value;
        if (newText != "") {
            todos.push(newText);
            show();
            document.getElementById("toDoText").value = "";
        }
    };
};
document.getElementById("addToList").addEventListener("click", addElement);
document.getElementById("toDoText").addEventListener("keypress", addOnEnter, false);
