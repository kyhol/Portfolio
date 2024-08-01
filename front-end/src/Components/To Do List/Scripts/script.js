const toDoItems = document.getElementsByClassName('to-do-items')[0];
const input = document.getElementById('input');
const trashIcon = document.getElementsById('trash');

input.addEventListener('keydown', function(e) {
    if(e.key === 'Enter') 
        addItem();
})

function addItem() {
    var divParent = document.createElement('div');
    var divChild = document.createElement('div');
    var checkIcon = document.createElement('i');
    var trashIcon = document.createElement('i');

    divParent.className = "item";
    divParent.innerHTML = '<div>'+input.value+'</div>';

    checkIcon.className = "fas fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener('click', function() {
        checkIcon.style.color = "green";
    })

    divChild.appendChild(checkIcon);
    
    trashIcon.className = "fas fa-trash";
    trashIcon.style.color = "gray";
    trashIcon.addEventListener('click', function() {
        divParent.remove();
    })

    divChild.appendChild(trashIcon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = '';
}