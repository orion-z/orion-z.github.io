/*
This is a simple web app to store bookmarks.
It uses localStorage to store data with JSON.
No frameworks used. Vanilla JS practice.
Based on a video by Traversy Media on YouTube.
*/

document.getElementById('myForm').addEventListener('submit', newBookmark);

// updating function
function updateBookmarks() {
  // define regex to check URL
  const httpRe = /^https?:\/\//g;

  // import localStorage data
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  // reset result div
  document.getElementById('result').innerHTML = "";

  if (bookmarks != null) {
    for (item of bookmarks) {
      // defining deleteIt and visit variable for friendlier code
      let deleteIt = ' <a onclick="deleteBookmark(\'' + item.url + '\')" href="#">Delete</a>';
      let visit = '';
      let descVar = '';

      /*assign different visit values whether http is present in the url or not
        this is done because an url without http will be interpreted as relative
        therefore not link to an absolute path, messing up redirection*/
      if (httpRe.exec(item.url)) {
        visit = ' <a href="' + item.url + '" target="_blank">Visit</a>';
      } else {
        visit = ' <a href="http://' + item.url + '" target="_blank">Visit</a>';
      }
      if (item.desc) {
        descVar = item.desc + " - ";
      }

      // combining elements and appending them to div #result using innerHTML
      document.getElementById('result').innerHTML += '<div>' + item.name + " - " + descVar + visit + " - " + deleteIt + '</div>';
    }
  }
}

// adding a new bookmark
function newBookmark(e) {
  // getting values via DOM
  siteName = document.getElementById('siteName').value;
  siteUrl = document.getElementById('siteUrl').value;
  siteDesc = document.getElementById('siteDesc').value;

  // name and URL are mandatory, desc is optional
  if (!siteName || !siteUrl) {
    alert("Please fill out name and URL.");
    return false;
  }

  // check if siteUrl is a valid URL
  const webRe = /(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  if (!webRe.exec(siteUrl)) {
    alert("Enter a valid URL.");
    return false;
  }

  // import localStorage data, if none exists create new array
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (bookmarks === null) {
    bookmarks = [];
  }

  // create object to store data in
  let bookmark = {
    name: siteName,
    url: siteUrl,
    desc: siteDesc
  }

  // add object to array
  bookmarks.push(bookmark);

  // save data to localStorage using JSON
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  updateBookmarks();

  // prevent submitting (default event of button press)
  e.preventDefault();
}

// deleting a bookmark
function deleteBookmark(url) {
  // read localStorage
  let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  if (bookmarks != null) {
    // using for in to make splicing easier. for of might work with a delete statement
    for (i in bookmarks) {
      // if given url exists, remove it
      if (bookmarks[i].url == url) {
        bookmarks.splice(i, 1);
      }
    }

    // write to localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  updateBookmarks();
}