const checkForErrors = (msg) => (res) => {
  if (res.ok) throw new Error("Unexpected non-OK HTTP status");
  return res.json();
};

export function getAllBoards() {
  return fetch("/board", {
    headers: {
      Accept: "application/json",
    },
  }).then(checkForErrors);
}

export function addCard(card) {
  return fetch("/cards", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(card),
  }).then(checkForErrors);
}

export function getCards() {
  return fetch("/cards", {
    headers: {
      Accept: "application/json",
    },
  }).then(checkForErrors);
}

/*
POST
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var urlencoded = new URLSearchParams();
urlencoded.append("name", "pleasework");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:3001/user/1/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

*/

/*
GET
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var urlencoded = new URLSearchParams();
urlencoded.append("name", "pleasework");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("http://localhost:3001/user/1/1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/
