document.body.innerHTML = `
    <style>
     .input-container {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 10px 0;
        position: relative;
      }
      .country-select {
        display: flex;
        align-items: center;
        padding: 5px;
        border-right: 1px solid #ccc;
        cursor: pointer;
        background-color: #ccc;
        
        left: 0;
        top: 0;
        bottom: 0;
        z-index: 2; /* Mettre au-dessus de l'input */
      }
      .country-select img {
        width: 20px;
        height: 15px;
        margin-right: 10px;
      }
      .phone-input {
        padding: 5px 10px 5px 40px;
        
        border: 1px solid #ccc;
        flex-grow: 1;
        outline: none;
        /* Décalage pour laisser de la place pour le drapeau et l'indicatif */
      }
      .phone-input:focus {
        border-color: #4CAF50;
      }
      .country-dropdown {
        position: absolute;
        top: 35px;
        left: 0;
        width: 15%;
        background-color: white;
        border: 1px solid #ccc;
        display: none;
        z-index: 10;
      }
      .country-dropdown div {
        padding: 10px;
        cursor: pointer;
      }
      .country-dropdown div:hover {
        background-color: #f0f0f0;
      }   






        .input-group {
            width: 90%;
            display:flex
            margin:  auto;
            display: flex;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 5px;
            overflow: hidden;
            background: white;
        }

       
    </style>
    <div id="mainPage" style="max-width: 400px; margin: auto; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h3>Choisissez un montant</h3>
        <button class="priceButton" data-price="5000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">5 000 Fcfa</button>
        <button class="priceButton" data-price="10000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">10 000 Fcfa</button>
        <button class="priceButton" data-price="15000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">15 000 Fcfa</button>
    </div>

    <div class="conteneur" style="position: absolute;top: 65%; left: 50%; transform: translate(-50%, -50%); " id="conteneur">


    <div id="paymentPage" style="display: none;position: relative; width: 500px; height:200px;  padding-top: 20px; font-family: Arial, sans-serif; color: white; text-align: center;background:linear-gradient(to top, rgb(81 255 122), rgb(0 231 255 / 94%));">
        <!--<img src="/home/esther/pageJS/WhatsApp Image 2025-02-26 at 17.18.15.jpeg"  style=" width:500px; height:200px; font-family: Arial, sans-serif;">-->
        <div style= "position: absolute; color: white;top: 50%; left: 50%; transform: translate(-50%, -50%); ">
           <img src="paie1.webp"  style="width: 100px; height: 60px;">
            <p>Total à payer</p>
            <h2 id="amountDisplay">0 Fcfa</h2>
        </div>
    </div>
    
    <div id="paymentOptions" style="display: none;padding-bottom:20px;  max-width: 500px; margin-top:-18px; margin-left:auto; margin-right:auto; ;  position: relative; text-align: center;">
      <div style="background: linear-gradient(to top, rgb(49 229 109), rgb(81 255 122)); padding-bottom: 30px;">

            <p style="color: #00f;">Sélectionner un mode de paiement</p>
         <br>
        </div>
        <div style="background: white; flex-direction: column; align-items: center;">
        <br><br>
        <label for="phone" class="" style="display: flex; margin-left: 25px;">Nom et prénom</label>
        <input type="text" id="name" placeholder="Nom et Prénoms" style="width: 90%; padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px;heigth:10px;">
        <br><br>
        
        <label for="phone" class="" style="display: flex; margin-left: 25px;">Numéro de téléphone</label>
        <div class="input-container" style="width: 90%; margin: 5px; justify-self: center">
          <!-- Drapeau et code pays -->
           <div  style="display:flex">
            <div class="country-select" id="country-select">
              <span id="country-flag">🇧🇯</span>
              <span id="country-code">+229</span>
              <span class="arrow">▼</span>
            </div>
            
            <!-- Champ pour numéro de téléphone -->
            <input id="phone" class="phone-input" type="tel" name="phone" placeholder="Entrez votre numéro" />
            
           </div>
         
          <!-- Menu déroulant pour la sélection du pays -->
          <div class="country-dropdown" id="country-dropdown">
            <div class="country-option" data-code="+229" data-country="BJ">🇧🇯 Bénin (+229)</div>
            <div class="country-option" data-code="+228" data-country="TG">🇹🇬 Togo (+228)</div>
            <div class="country-option" data-code="+234" data-country="NG">🇳🇬 Nigeria (+234)</div>
            <div class="country-option" data-code="+226" data-country="BF">🇧🇫 Burkina Faso (+226)</div>
            <!-- Ajouter d'autres pays ici -->
          </div>
        </div>
                 
            <button id="moov" class="paymentMethod" style="width: 70px;height: 70px;border-radius: 8px; background: none; border: none;">
                <img src="moov.jpg" alt="Moov" style="width: 50px; height: 50px;">
            </button>
            <button id="mtn" class="paymentMethod" style="width: 70px;height: 70px;border-radius: 8px;background: none;border: none;">
                <img src="mtn.jpg" alt="MTN" style="width: 50px; height: 50px;">
            </button>
            <button id="celtis" class="paymentMethod" style="width: 70px;height: 70px;border-radius: 8px;background: none; border: none;">
                <img src="celtis.png" alt="celtis" style="width: 50px; height: 50px;">
            </button>
        <br><br>
        <button id="pay" style="    background: #1a8719;color: white;border: none;padding: 15px; width: 75%;cursor: pointer;border-radius: 8px;"></button>
        <p style="font-size: 12px; color: gray; margin-top: 10px;">🛡 Paiement sécurisé fourni par RICODE SYSTEMS</p>
        </div>

        </div>
    </div>
      <div  style="display:flex" class="input-group" style="    width: 90%; margin: 5px; justify-self: center">
            <div   class="btn btn-outline-secondary dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <span id="country-flag">🇧🇯</span>
              <span id="country-code">+229</span>
              <span class="arrow">▼</span>
            </div>
             <ul class="dropdown-menu" id="countryList">
            <!-- Champ pour numéro de téléphone -->
            <input id="phone" class="phone-input" type="tel" name="phone" placeholder="Entrez votre numéro" />
            
     </div>



`;

const style = document.createElement('style');
style.innerHTML = `
    .gray {
        background-color: lightgray;
    }
    .red {
        background-color:#1a8719 !important; /* Changed to a shade of green */

    }
`;
document.head.appendChild(style);

const priceButtons = document.querySelectorAll(".priceButton");
const paymentPage = document.getElementById("paymentPage");
const mainPage = document.getElementById("mainPage");
const amountDisplay = document.getElementById("amountDisplay");
const paymentOptions = document.getElementById("paymentOptions");
const moov = document.getElementById("moov");
const mtn = document.getElementById("mtn");
const celtis = document.getElementById("celtis");
const payer = document.getElementById("pay");



const form = {
  init: function () {
  
    document.querySelector("form").addEventListener("submit", form.submit);
    document.querySelector("input[type='button']").addEventListener("click", form.validation);
    form.input().addEventListener("focus", form.reset);
    form.input().addEventListener("input", form.reset);
    form.countrySelect().addEventListener("click", form.toggleCountryDropdown);
    document.querySelectorAll(".country-option").forEach(optio9n => {
      option.addEventListener("click", form.selectCountry);
    });
  },
  
  input: function () {
    return document.querySelector("#phone");
  },
  countrySelect: function () {
    return document.querySelector("#country-select");
  },
  countryDropdown: function () {
    return document.querySelector("#country-dropdown");
  },
  selectCountry: function (event) {
    const selectedOption = event.target;
    const countryCode = selectedOption.getAttribute("data-code");
    const countryFlag = selectedOption.textContent.trim().split(" ")[0]; // Extrait le drapeau

    // Mettre à jour le drapeau et l'indicatif du pays
    document.querySelector("#country-flag").textContent = countryFlag;
    document.querySelector("#country-code").textContent = countryCode;

    // Fermer le menu déroulant
    form.countryDropdown().style.display = "none";

    // Mettre l'indicatif au début du champ de numéro
    form.input().value = countryCode + " ";
  },
  toggleCountryDropdown: function () {
    const dropdown = form.countryDropdown();
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    console.log("Click détecté, affichage du menu..."); 
  },
  reset: function () {
    form.input().classList.remove("error");
    form.input().classList.remove("success");
  },
  validation: function () {
    let number = form.input().value.replace(/\s+/g, ''); // Supprimer les espaces
    number = number.replace(/[^0-9]/g, ''); // Supprimer tout caractère non numérique
    console.log("Numéro formaté:", number); // Debugging

    const selectedCountryCode = form.countrySelect().dataset.code; // Le code du pays sélectionné

    // Vérification spécifique pour chaque pays
    if (selectedCountryCode === "+229") {
      const regexBenin = /^01\d{8}$/;
      if (!regexBenin.test(number)) {
        alert("Le numéro du Bénin doit être au format 01 XX XX XX XX");
        form.input().classList.add("error");
        return false;
      }
    } else if (selectedCountryCode === "+228") {
      const regexTogo = /^92\d{7}$/;
      if (!regexTogo.test(number)) {
        alert("Le numéro du Togo doit être au format 92 XXXXXX");
        form.input().classList.add("error");
        return false;
      }
    } else if (selectedCountryCode === "+234") {
      const regexNigeria = /^0\d{10}$/;
      if (!regexNigeria.test(number)) {
        alert("Le numéro du Nigeria doit être au format 0XXXXXXXXXX");
        form.input().classList.add("error");
        return false;
      }
    } else if (selectedCountryCode === "+226") {
      const regexBurkina = /^70\d{7}$/;
      if (!regexBurkina.test(number)) {
        alert("Le numéro du Burkina Faso doit être au format 70 XXXXXXX");
        form.input().classList.add("error");
        return false;
      }
    }

    form.input().classList.add("success");
    return true;
  },
  /* submit: function (e) {
    e.preventDefault();
    if (form.validation() === true) {
      form.reset();
      console.log("Numéro soumis avec succès.");
    }
  } */
};





priceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const price = button.getAttribute("data-price");
    amountDisplay.innerText = price + " Fcfa";
    payer.innerText = "Payer " + price + " Fcfa";
    mainPage.style.display = "none";
    paymentPage.style.display = "block";
    paymentOptions.style.display = "block";
  });
});
/* 
// Éviter l'entrée de caractères non numériques
phoneInputField.addEventListener("keypress", function (event) {
    const char = String.fromCharCode(event.keyCode);
    if (!/[0-9]/.test(char)) {
        event.preventDefault(); // Bloque la saisie de caractères non numériques
    }
});

// Préfixes Moov par pays
const moovPrefixes = [
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "58", "55", "45", // Bénin
    "01", "02",  // Côte d’Ivoire
    "60", "61", "62", "66", "67",  // Togo
    "66", "67",  // Burkina Faso
    "88", "89",  // Niger
    "05", "06",  // Gabon
    , "98", "99", "95", "94",  // Tchad
    "75", "76"   // Centrafrique
];

// Préfixes MTN par pays (Exemples)
const mtnPrefixes = [
    "50", "51", "52", "53", "54", "56", "57", "97", "91", "96", "66", "61", "62", "67", "92",  // Bénin
    "07", "08",  // Côte d’Ivoire
    "90", "91", "92", "93", "94", "95",  // Togo
    "70", "71", "72", "73", "74",  // Burkina Faso
    "80", "81", "82", "83", "84",  // Niger
    "77", "78",  // Gabon
    "97",   // Tchad
];

// Préfixes Celtis (Exemples)
const celtisPrefixes = [
    "40", "41", "42", "43", "44", "46", "47", "48", "49" // Exemple de préfixes Celtis
];

phoneInputField.addEventListener("input", function () {
    let value = phoneInputField.value.trim();

    // Réinitialiser les couleurs des boutons
    moov.classList.add("gray");
    mtn.classList.add("gray");
    celtis.classList.add("gray");

    // Si l'input est vide, réinitialiser les boutons
    if (value === "") {
        moov.classList.remove("red");
        moov.classList.add("orange");
        mtn.classList.remove("red");
        mtn.classList.add("orange");
        celtis.classList.remove("red");
        celtis.classList.add("orange");
        return;
    }



    // Vérifier le préfixe et changer la couleur
    if (moovPrefixes.some(prefix => value.startsWith(prefix))) {
        moov.classList.remove("gray");
        moov.classList.add("red");
    }
    if (mtnPrefixes.some(prefix => value.startsWith(prefix))) {
        mtn.classList.remove("gray");
        mtn.classList.add("red");
    }
    if (celtisPrefixes.some(prefix => value.startsWith(prefix))) {
        celtis.classList.remove("gray");
        celtis.classList.add("red");
    }
});

document.getElementById("pay").addEventListener("click", function () {
    alert("Paiement en cours...");
});
 */









const imgmoov = document.querySelector("#moov img");
const imgmtn = document.querySelector("#mtn img");
const imgceltis = document.querySelector("#celtis img");

const moovPrefixes = ["55", "56"]; // Ajoute les préfixes corrects
const mtnPrefixes = ["65", "66"];
const celtisPrefixes = ["75", "76"];

document.getElementById("phoneInput").addEventListener("input", function () {
    let value = this.value.trim();

    // Réinitialiser la taille des images
    [moov, mtn, celtis].forEach(img => {
        img.style.width = "35px";
        img.style.height = "35px";
    });

    if (moovPrefixes.some(prefix => value.startsWith(prefix))) {
        moov.style.width = "50px";
        moov.style.height = "50px";
    }
    if (mtnPrefixes.some(prefix => value.startsWith(prefix))) {
        mtn.style.width = "50px";
        mtn.style.height = "50px";
    }
    if (celtisPrefixes.some(prefix => value.startsWith(prefix))) {
        celtis.style.width = "50px";
        celtis.style.height = "50px";
    }
});
