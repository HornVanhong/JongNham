// // JavaScript to load external HTML components (like header and footer)
// function includeHTML(file, placeholderId) {
//     fetch(file)
//       .then(response => response.text())
//       .then(data => {
//         document.getElementById(placeholderId).innerHTML = data;
//       })
//       .catch(error => console.log('Error loading component:', error));
//   }


function includeHTML(file, elementId) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById(elementId).innerHTML = this.responseText;
    }
    xhttp.open("GET", file, true);
    xhttp.send();
  }