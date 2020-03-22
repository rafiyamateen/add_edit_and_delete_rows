document.getElementById('index').focus();
function addRow() {
    let newIndex = event.target.parentNode.parentNode.children[0].children[0],
        newName = event.target.parentNode.parentNode.children[1].children[0],
        newClass = event.target.parentNode.parentNode.children[2].children[0],
        table = document.getElementById('table'),
        tableLength = (table.rows.length) - 1;
    table.insertRow(tableLength).outerHTML = `<tr><td>${newIndex.value}</td><td>${newName.value}</td><td>${newClass.value}</td><td class='buttons'><input type='button' value='Edit' class='edit' onclick='editRow()'><input type='button' value='Save' class='save' onclick='saveRow()'><input type='button' value='Delete' class='del' onclick='deleteRow()'></td></tr>`;
    newIndex.value = '';
    newName.value = '';
    newClass.value = '';
    document.getElementById('index').focus();
}
function editRow() {
    let index = event.target.parentNode.parentNode.children[0],
        name = event.target.parentNode.parentNode.children[1],
        classes = event.target.parentNode.parentNode.children[2];
    index.innerHTML = `<input type="text" size="5" value="${index.innerHTML}">`;
    name.innerHTML = `<input type="text" value="${name.innerHTML}">`;
    classes.innerHTML = `<input type="text" size="5" value="${classes.innerHTML}">`;
    index.children[0].focus();
    event.target.style.display = 'none';
    event.target.nextSibling.style.display = 'inline';
}
function saveRow() {
    let index = event.target.parentNode.parentNode.children[0],
        name = event.target.parentNode.parentNode.children[1],
        classes = event.target.parentNode.parentNode.children[2];
    index.innerHTML = index.children[0].value;
    name.innerHTML = name.children[0].value;
    classes.innerHTML = classes.children[0].value;
    event.target.previousSibling.style.display = 'inline';
    event.target.style.display = 'none';
    document.getElementById('index').focus();
}
function deleteRow() {
    event.target.parentNode.parentNode.style.display = 'none';
    document.getElementById('index').focus();
}