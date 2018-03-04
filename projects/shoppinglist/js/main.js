const shoppingDiv = document.getElementById('shoppingList');
const hi = document.getElementById('important');
const med = document.getElementById('ordinary');
const minor = document.getElementById('minor');
document.getElementById('myform').addEventListener('submit', newItem);



function newItem(e) {
  let docImp = document.getElementById('importance').value;
  let docName = document.getElementById('name').value;
  if (docName.length < 2) {
    alert('Name must be at least 2 characters long...');
    return false;
  }
  let currItem = {
    name: docName,
    importance: docImp
  }
  let shoppingList = JSON.parse(localStorage.getItem('sList'));
  if (shoppingList === null) {
    shoppingList = [];
  }
  shoppingList.push(currItem);
  localStorage.setItem('sList', JSON.stringify(shoppingList));

  update();
  e.preventDefault();
}

function update() {
  let shoppingList = JSON.parse(localStorage.getItem('sList'));
  minor.innerHTML = '<h1>this can wait</h1>';
  med.innerHTML = '<h1>should probably buy</h1>';
  hi.innerHTML = '<h1>need to get asap</h1>';
  let setActive = domElement => {
    if (domElement.getElementsByTagName('h1')[0].className != 'active') {
      domElement.getElementsByTagName('h1')[0].className = 'active';
    }
    domElement.innerHTML += "<div class=\"wrap\"><div class=\"col-txt\"><p>" + item.name + "</p></div>" +
                            "<div class=\"col-link\"><p><a href=\"#\"" +
                            "onclick=\"dele('" + item.name + "')\">Delete</a></p></div></div>";
  }
  if (shoppingList) {
    for (item of shoppingList) {
      console.log("logging for item of..." + item.name);
      if (item.importance == "Low") {
        setActive(minor);
      } else if (item.importance == "Medium") {
        setActive(med);
      } else if (item.importance == "High") {
        setActive(hi);
      }
    }
  }
}

function dele(name) {
  console.log("yo" + name);
  let shoppingList = JSON.parse(localStorage.getItem('sList'));
  console.log("yo" + shoppingList.length);
  for (let i = 0; i < shoppingList.length; i++) {
    if (name == shoppingList[i].name) {
      console.log("hi");
      shoppingList.splice(i, 1);
    }
  }
  localStorage.setItem('sList', JSON.stringify(shoppingList));
  update();
}
