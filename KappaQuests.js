document.getElementById("homeButton").addEventListener("click", () => {
  window.location.href = "index.html"; // ggf. anpassen
});

document.getElementById("languageSelector").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = el.dataset[lang];
  });
});

const traders = {
  Prapor: [
    "Shooting Cans",
    "Debut",
    "Luxurious Life",
    "Search Mission",
    "Background Check",
    "Shootout Picnic",
    "Delivery From the Past",
    "BP Depot",
    "The Bunker – Part 1",
    "The Bunker – Part 2",
    "Bad Rep Evidence",
    "Ice Cream Cones",
    "No Place for Renegades",
    "Documents",
    "Postman Pat – Part 1",
    "Possessor",
    "Shaking up the Teller",
    "The Punisher – Part 1",
    "The Punisher – Part 2",
    "The Punisher – Part 3",
    "The Punisher – Part 4",
    "The Punisher – Part 5",
    "The Punisher – Part 6",
    "Anesthesia",
    "Grenadier",
    "Test Drive – Part 1",
    "Test Drive – Part 2",
    "Test Drive – Part 3",
    "Test Drive – Part 4",
    "Test Drive – Part 5",
    "Perfect Mediator",
    "Polikhim",
    "Regulated Materials",
    "Intimidator",
    "Easy Job – Part 1",
    "Easy Job – Part 2",
    "Reconnaissance"
  ],
  Therapist: [
    "First in Line",
    "Shortage",
    "Operation Aquarius – Part 1",
    "Operation Aquarius – Part 2",
    "Sanitary Standards – Part 1",
    "Sanitary Standards – Part 2",
    "Painkiller",
    "Pharmacist",
    "Car Repair",
    "Health Care Privacy – Part 1",
    "Health Care Privacy – Part 2",
    "Health Care Privacy – Part 3",
    "Health Care Privacy – Part 4",
    "Health Care Privacy – Part 5",
    "Health Care Privacy – Part 6",
    "Athlete",
    "Private Clinic",
    "Decontamination Service",
    "General Wares",
    "Colleagues – Part 1",
    "Colleagues – Part 2",
    "Postman Pat – Part 2",
    "Crisis",
    "Seaside Vacation",
    "Lost Contact",
    "Drug Trafficking",
    "A Healthy Alternative",
    "One Less Loose End",
    "All is Revealed"
  ],
   Skier: [
    "Burning Rubber",
    "Supplier",
    "The Extortionist",
    "Stirrup",
    "What’s on the Flash Drive?",
    "Golden Swag",
    "Chemical Part – Part 1",
    "Chemical Part – Part 2",
    "Chemical Part – Part 3",
    "Vitamins – Part 1",
    "Vitamins – Part 2",
    "Friend from the West – Part 1",
    "Friend from the West – Part 2",
    "Informed Means Armed",
    "Chumming",
    "Setup",
    "Flint",
    "Lend-Lease – Part 1",
    "Rigged Game",
    "Safe Corridor",
    "Long Road",
    "Missing Cargo",
    "Exit Here",
    "The Walls Have Eyes"
  ],
 Peacekeeper: [
    "Fishing Gear",
    "Tigr Safari",
    "Scrap Metal",
    "Eagle Eye",
    "Humanitarian Supplies",
    "The Cult – Part 1",
    "The Cult – Part 2",
    "Spa Tour – Part 1",
    "Spa Tour – Part 2",
    "Spa Tour – Part 3",
    "Spa Tour – Part 4",
    "Spa Tour – Part 5",
    "Spa Tour – Part 6",
    "Spa Tour – Part 7",
    "Cargo X – Part 1",
    "Cargo X – Part 2",
    "Cargo X – Part 3",
    "Cargo X – Part 4",
    "Wet Job – Part 1",
    "Wet Job – Part 2",
    "Wet Job – Part 3",
    "Wet Job – Part 4", 
    "Wet Job – Part 5",
    "Wet Job – Part 6",
    "The Guide",
    "Samples",
    "TerraGroup Employee",
    "Lend-Lease – Part 2",
    "Peacekeeping Mission",
    "Classified Technologies",
    "Revision – Reserve",
    "Insomnia",
    "Overpopulation",
    "Revision – Lighthouse"
  ],
  Mechanic: [
    "Saving the Mole",
    "Introduction",
    "Gunsmith – Part 1",
    "Gunsmith – Part 2",
    "Gunsmith – Part 3",
    "Gunsmith – Part 4",
    "Gunsmith – Part 5",
    "Gunsmith – Part 6",
    "Gunsmith – Part 7",
    "Gunsmith – Part 8",
    "Gunsmith – Part 9",
    "Gunsmith – Part 10",
    "Gunsmith – Part 11",
    "Gunsmith – Part 12",
    "Gunsmith – Part 13",
    "Gunsmith – Part 14",
    "Gunsmith – Part 15",
    "Gunsmith – Part 16",
    "Gunsmith – Part 17",
    "Gunsmith – Part 18",
    "Gunsmith – Part 19",
    "Gunsmith – Part 20",
    "Gunsmith – Part 21",
    "Gunsmith – Part 22",
    "Signal – Part 1",
    "Signal – Part 2",
    "Signal – Part 3",
    "Signal – Part 4",
    "Insider",
    "Scout",
    "Black Swan",
    "Forklift Certified",
    "Capacity Check",
    "Surplus Goods",
    "Back Door",
    "Farming – Part 1",
    "Farming – Part 2",
    "Farming – Part 3",
    "Farming – Part 4",
    "Bad Habit",
    "Psycho Sniper",
    "A Shooter Born in Heaven",
    "Fertilizers",
    "Import",
    "Chemistry Closet",
    "Corporate Secrets",
    "Energy Crisis",
    "Broadcast – Part 1"
  ],
  Ragman: [
    "Only Business",
    "Make ULTRA Great Again",
    "Big Sale",
    "A Fuel Matter",
    "Inventory Check",
    "The Blood of War – Part 1",
    "The Blood of War – Part 2",
    "The Blood of War – Part 3",
    "Dressed to Kill",
    "Gratitude",
    "Hot Delivery",
    "Scavenger",
    "Sales Night",
    "Database – Part 1",
    "Database – Part 2",
    "Minibus",
    "Sew it Good – Part 1",
    "Sew it Good – Part 2",
    "Sew it Good – Part 3",
    "Sew it Good – Part 4",
    "The Key to Success",
    "No Fuss Needed",
    "Supervisor",
    "Living High is Not a Crime – Part 1",
    "Living High is Not a Crime – Part 2",
    "Charisma Brings Success"
  ],
  Jaeger: [
    "Acquaintance",
    "The Survivalist Path – Unprotected but Dangerous",
    "The Survivalist Path – Thrifty",
    "The Survivalist Path – Zhivchik",
    "The Survivalist Path – Wounded Beast",
    "The Survivalist Path – Tough Guy",
    "Courtesy Visit",
    "Nostalgia",
    "The Survivalist Path – Junkie",
    "The Survivalist Path – Eagle-Owl",
    "The Survivalist Path – Combat Medic",
    "Ambulance",
    "The Huntsman Path – Secured Perimeter",
    "Reserve",
    "The Huntsman Path – Forest Cleaning",
    "Claustrophobia",
    "The Huntsman Path – Controller",
    "The Huntsman Path – Evil Watchman",
    "Fishing Place",
    "The Huntsman Path – Trophy",
    "The Huntsman Path – Justice",
    "The Huntsman Path – Sellout",
    "The Huntsman Path – Woods Keeper",
    "Hunting Trip",
    "The Huntsman Path – Factory Chief",
    "The Huntsman Path – Eraser – Part 1",
    "The Huntsman Path – Eraser – Part 2",
    "The Tarkov Shooter – Part 1",
    "The Tarkov Shooter – Part 2",
    "The Tarkov Shooter – Part 3",
    "The Tarkov Shooter – Part 4",
    "The Tarkov Shooter – Part 5",
    "The Tarkov Shooter – Part 6",
    "The Tarkov Shooter – Part 7",
    "The Tarkov Shooter – Part 8",
    "Rough Tarkov",
    "Every Hunter Knows This",
    "Shady Business",
    "Pest Control",
    "The Hermit",
    "The Huntsman Path – Outcasts",
    "Stray Dogs",
    "The Delicious Sausage",
    "Dragnet"
  ]
};


    function loadChecked() {
      return JSON.parse(localStorage.getItem("kappaChecked")) || {};
    }

    function saveChecked(checked) {
      localStorage.setItem("kappaChecked", JSON.stringify(checked));
    }

    const checkedState = loadChecked();

    function renderQuests() {
      const container = document.getElementById("questContainer");
      container.innerHTML = "";
      const filter = document.getElementById("questFilter").value.toLowerCase();

      for (const [trader, quests] of Object.entries(traders)) {
        const traderSection = document.createElement("div");
        traderSection.className = "trader-section";

        const traderTitle = document.createElement("h2");
        traderTitle.textContent = trader;
        traderSection.appendChild(traderTitle);

        const list = document.createElement("ul");
        quests.forEach((quest) => {
          if (!quest.toLowerCase().includes(filter)) return;

          const li = document.createElement("li");
          const label = document.createElement("label");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = !!checkedState[quest];
          checkbox.addEventListener("change", () => {
            checkedState[quest] = checkbox.checked;
            saveChecked(checkedState);
          });

          label.appendChild(checkbox);
          label.appendChild(document.createTextNode(quest));
          li.appendChild(label);
          list.appendChild(li);
        });

        traderSection.appendChild(list);
        container.appendChild(traderSection);
      }
    }

    document.getElementById("questFilter").addEventListener("input", renderQuests);

    document.addEventListener("DOMContentLoaded", renderQuests);
