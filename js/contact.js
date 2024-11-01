const entries = []; // Array to store all entries

document.getElementById("addButton").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const year = document.getElementById("year").value;
  const group = document.getElementById("group").value;

  if (!name || !gender || !year || !group) {
    alert("Please fill in all fields.");
    return;
  }

  const newEntry = `name:${name} gender:${gender} year:${year} group:${group}`;
  entries.push(newEntry);

  const review = document.getElementById("review");
  review.value = entries.join("\n");

  document.getElementById("name").value = "";
  document.querySelector('input[name="gender"]:checked').checked = false;
  document.getElementById("year").value = "";
  document.getElementById("group").selectedIndex = 0;
});