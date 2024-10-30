function loadPage(page) {
    fetch(page)
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("content").innerHTML = data;
        if (page === "contact.html") {
          const ContactStyle = document.createElement("link");
          ContactStyle.rel = "stylesheet";
          ContactStyle.href = "contact.css";
          document.head.appendChild(ContactStyle);
        }
      });
  }