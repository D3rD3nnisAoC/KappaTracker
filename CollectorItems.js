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
  img.width = 128;

  // Erstelle den Namen als Link
  const link = document.createElement("a");
  link.textContent = this.name;
  link.href = `https://escapefromtarkov.fandom.com/wiki/${encodeURIComponent(this.name)}`;
  link.target = "_blank"; // öffnet in neuem Tab
  link.className = "item-link";

  container.appendChild(link);
  container.appendChild(img);
  
  return container;
}
}

document.addEventListener("DOMContentLoaded", () => {
  const itemList = document.getElementById("itemList");

  // Array mit mehreren QuestItem-Objekten
  const items = [
    new QuestItem("Old firesteel", "images/old-firesteel.webp"),
    new QuestItem("Antique axe", "images/antique-axe.webp"),
    new QuestItem("Battered antique book", "images/battered-antique-book.webp"),
    new QuestItem("FireKlean gun lube", "images/fireklean-gun-lube.webp"),
    new QuestItem("Golden rooster figurine", "images/golden-rooster.webp"),
    new QuestItem("Silver Badge", "images/silver-badge.webp"),
    new QuestItem("Deadlyslob's beard oil", "images/deadlyslobs-beard-oil.webp"),
    new QuestItem("Golden 1GPhone smartphone", "images/golden-g1-smartphone.webp"),
    new QuestItem("Jar of DevilDog mayo", "images/jar-of-devildog-mayo.webp"),
    new QuestItem("Can of sprats", "images/can-of-sprats.webp"),
    new QuestItem("Fake mustache", "images/fake-mustache.webp"),
    new QuestItem("Kotton beanie", "images/kotton-beanie.webp"),
    new QuestItem("Raven figurine", "images/raven-figure.webp"),
    new QuestItem("Pestily plague mask", "images/pestily-plague-mask.webp"),
    new QuestItem("Shroud half-mask", "images/shroud-halfmask.webp"),
    new QuestItem("Can of Dr. Lupo's coffee beans", "images/can-of-dr.lupos-coffee-beans.webp"),
    new QuestItem("42 Signature Blend English Tea", "images/42-signature-blend-english-tea.webp"),
    new QuestItem("Veritas guitar pick", "images/veritas-guitar-pick.webp"),
    new QuestItem("Evasion armband", "images/evasion-armband.webp"),
    new QuestItem("Can of RatCola soda", "images/can-of-ratcola.webp"),
    new QuestItem("Loot Lord plushie", "images/loot-lord-plushie.webp"),
    new QuestItem("WZ Wallet", "images/wz-wallet.webp"),
    new QuestItem("LVNDMARK's rat poison", "images/lvndmarks-rat-poisen.webp"),
    new QuestItem("Smoke balaclava", "images/smoke-balaclava.webp"),
    new QuestItem("Missam forklift key", "images/missam-fortklift-key.webp"),
    new QuestItem("Video cassette with the Cyborg Killer movie", "images/video-cassette-with-the-cyborg-killer-movie.webp"),
    new QuestItem("BakeEzy cook book", "images/bakeezy-cook-book.webp"),
    new QuestItem("JohnB Liquid DNB glasses", "images/johnb-liquid-dnb-glasses.webp"),
    new QuestItem("Glorious E lightweight armored mask", "images/glorious-e-lightweight-armored-mask.webp"),
    new QuestItem("Baddie's red beard", "images/baddies-red-beard.webp"),
    new QuestItem("DRD body armor", "images/drd-body-armor.webp"),
    new QuestItem("Gingy keychain", "images/gingy-keychain.webp"),
    new QuestItem("Golden egg", "images/golden-egg.webp"),
    new QuestItem("Press pass", "images/press-pass.webp"),
    new QuestItem("Axel parrot figurine", "images/axel-parrot-figurine.webp"),
    new QuestItem("BEAR Buddy plush toy", "images/bear-buddy-plush-toy.webp"),
    new QuestItem("Inseq gas pipe wrench", "images/inseq-gas-pipe-wrench.webp"),
    new QuestItem("Viibiin sneaker", "images/viibiin-sneaker.webp"),
    new QuestItem("Tamatthi kunai knife replica", "images/tamatthi-kunai-knife-replica.webp")
  ];

  // Alle Items zur Seite hinzufügen
  items.forEach((questItem) => {
    itemList.appendChild(questItem.render());
  });
});
