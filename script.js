function showSection(sectionId) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("quests").classList.add("hidden");
  document.getElementById("items").classList.add("hidden");

  document.getElementById(sectionId).classList.remove("hidden");
}

function goHome() {
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("quests").classList.add("hidden");
  document.getElementById("items").classList.add("hidden");
}
