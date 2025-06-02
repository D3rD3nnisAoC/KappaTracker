class QuestItem {
  constructor(name, imageUrl) {
    this.name = name;
    this.imageUrl = imageUrl;
  }

  // Methode zum Erstellen eines HTML-Elements zur Darstellung des Items
  render() {
    const container = document.createElement("div");
    container.className = "quest-item";


    

    const img = document.createElement("img");
    img.alt = this.name;
    img.src = this.imageUrl;
    img.width = 128; // oder jede gewünschte Größe

    const label = document.createElement("p");
    label.textContent = this.name;

    container.appendChild(label);
    container.appendChild(img);
    

    return container;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("itemList");

  // Array mit mehreren QuestItem-Objekten
  const item = [
  new QuestItem("Old firesteel", "/Bilder/Old Firesteel.webp"),
  new QuestItem("Antique axe", "/Bilder/Antique_Axe.webp"),
  new QuestItem("Battered antique book", ""),
  new QuestItem("FireKlean gun lube", ""),
  new QuestItem("Golden rooster figurine", ""),
  new QuestItem("Silver Badge", ""),
  new QuestItem("Deadlyslob's beard oil", ""),
  new QuestItem("Golden 1GPhone smartphone", ""),
  new QuestItem("Jar of DevilDog mayo", ""),
  new QuestItem("Can of sprats", ""),
  new QuestItem("Fake mustache", ""),
  new QuestItem("Kotton beanie", ""),
  new QuestItem("Raven figurine", ""),
  new QuestItem("Pestily plague mask", ""),
  new QuestItem("Shroud half-mask", ""),
  new QuestItem("Can of Dr. Lupo's coffee beans", ""),
  new QuestItem("42 Signature Blend English Tea", ""),
  new QuestItem("Veritas guitar pick", ""),
  new QuestItem("Evasion armband", ""),
  new QuestItem("Can of RatCola soda", ""),
  new QuestItem("Loot Lord plushie", ""),
  new QuestItem("WZ Wallet", ""),
  new QuestItem("LVNDMARK's rat poison", ""),
  new QuestItem("Smoke balaclava", ""),
  new QuestItem("Missam forklift key", ""),
  new QuestItem("Video cassette with the Cyborg Killer movie", ""),
  new QuestItem("BakeEzy cook book", ""),
  new QuestItem("JohnB Liquid DNB glasses", ""),
  new QuestItem("Glorious E lightweight armored mask", ""),
  new QuestItem("Baddie's red beard", ""),
  new QuestItem("DRD body armor", ""),
  new QuestItem("Gingy keychain", ""),
  new QuestItem("Golden egg", ""),
  new QuestItem("Press pass", ""),
  new QuestItem("Axel parrot figurine", ""),
  new QuestItem("BEAR Buddy plush toy", ""),
  new QuestItem("Inseq gas pipe wrench", ""),
  new QuestItem("Viibiin sneaker", ""),
  new QuestItem("Tamatthi kunai knife replica", "")
];

  // Alle Items zur Seite hinzufügen
  item.forEach(item => {
    itemList.appendChild(item.render());
  });
});
