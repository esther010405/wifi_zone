document.body.innerHTML = `
    <style>

/* Style du modal */
.modal {

    display: none; 
    justify-content: center;
    position: fixed;
    top: 5;
    left: 400;
    width: 500px;
    height: 100%; 
    background-color: rgb(206, 224, 221); /* Fond semi-transparent */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  
}

/* Contenu du modal */
.modal-content {
 
}

/* Animation d'apparition */
.modal.show {
    opacity: 1;
}
.modal.show .modal-content {
    transform: translateY(0);
}

/* Style du bouton de fermeture */
.close-btn {
    background: red;
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
  
    position: absolute;
    top: -0px;
    right: 0px;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}


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
        width: 30%;
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



        #phone {
       
            flex: 1;
            padding: 10px;
            height:60px
            border: none;
            outline: none;
        }
    </style>
    <div id="mainPage" style="max-width: 400px; margin: auto; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h3>Choisissez un montant</h3>
        <button class="priceButton" data-price="5000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">5 000 Fcfa</button>
        <button class="priceButton" data-price="10000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">10 000 Fcfa</button>
        <button class="priceButton" data-price="15000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">15 000 Fcfa</button>
    </div>
<div class="modal">
   
    <div class="conteneur" style="position: absolute;top: 52%; left: 50%; transform: translate(-50%, -50%); border-radius:15px" id="conteneur">

        <div class="modal-content">
            <button class="close-btn"></button>
        
            <div id="paymentPage" style="display: none;position: relative; width: 500px; height:200px;  padding-top: 20px; font-family: Arial, sans-serif; color: white; text-align: center;background:linear-gradient(to top, rgb(81 255 122), rgb(0 231 255 / 94%));">
                <!--<img src="/home/esther/pageJS/WhatsApp Image 2025-02-26 at 17.18.15.jpeg"  style=" width:500px; height:200px; font-family: Arial, sans-serif;">-->
                <div style= "position: absolute; color: white;top: 50%; left: 50%; transform: translate(-50%, -50%); ">
                <img src="paie1.webp"  style="width: 100px; height: 60px;">
                    <p>Total à payer</p>
                    <h2 id="amountDisplay">0 Fcfa</h2>
                </div>
            </div>
        </div>
        <div id="paymentOptions" style="display: none;padding-bottom:20px;  max-width: 500px; margin-top:-18px; margin-left:auto; margin-right:auto; ;  position: relative; text-align: center;">
            <div style="background: linear-gradient(to top, rgb(49 229 109), rgb(81 255 122)); padding-bottom: 30px;">

                    <p style="color: #00f;">Sélectionner un mode de paiement</p>
                   
                    </div>
                    <div style="background: white; flex-direction: column; align-items: center;">
                    <br><br>
                    <label for="phone" class="" style="display: flex; margin-left: 25px;">Nom et prénom</label>
                    <input type="text" id="name" placeholder="Nom et Prénoms" style="width: 90%; padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px;heigth:10px;">
                    <br><br>
                    
                    <label for="phone" class="" style="display: flex; margin-left: 25px;">Numéro de téléphone</label>
                    <div class="input-container" style="width: 90%; margin: 5px; justify-self: center">
                    <!-- Drapeau et code pays -->
                    <div  style="display:flex; width: 100%;  border: 1px solid #ccc;  border-radius: 5px;heigth:10px;" >
                        <div class="country-select" id="country-select" style="border: none;heigth:10px;">
                        <span id="country-flag">🇧🇯</span>
                        <span id="country-code">+229</span>
                        <span class="arrow">▼</span>
                        </div>
                        
                        <!-- Champ pour numéro de téléphone -->
                        <input id="phone" class="phone-input" type="tel" name="phone" style="border: none;heigth:10px;" placeholder="Entrez votre numéro" />
                        
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
                            <img src="moov.jpg" alt="Moov" style="width: 35px; height: 35px;" id="moov img">
                        </button>
                        <button id="mtn" class="paymentMethod" style="width: 70px;height: 70px;border-radius: 8px;background: none;border: none;">
                            <img src="mtn.jpg" alt="MTN" style="width: 35px; height: 35px;" id="mtn img">
                        </button>
                        <button id="celtis" class="paymentMethod" style="width: 70px;height: 70px;border-radius: 8px;background: none; border: none;">
                            <img src="celtis.png" alt="celtis" style="width: 35px; height: 35px;" id="celtis img">
                        </button>
                    <br><br>
                    <button id="pay" style="    background: #1a8719;color: white;border: none;padding: 15px; width: 75%;cursor: pointer;border-radius: 8px;"></button>
                    <p style="font-size: 12px; color: gray; margin-top: 10px;">🛡 Paiement sécurisé fourni par RICODE SYSTEMS</p>
                
            </div>
            
        </div>

    </div>
   

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
const countryFlag = document.getElementById("countryFlag");
const paymentOptions = document.getElementById("paymentOptions");
const moov = document.getElementById("moov");
const mtn = document.getElementById("mtn");
const celtis = document.getElementById("celtis");
const payer = document.getElementById("pay");
const img1= document.querySelector("#moov img");
const img2 = document.querySelector("#mtn img");
const img3 = document.querySelector("#celtis img");


 const phoneInputField = document.querySelector("#phone");
 const modal = document.querySelector('.modal');
 const closeButton = document.createElement('button');

 

  document.addEventListener("DOMContentLoaded", function () {




    const countrySelect = document.querySelector("#country-select");
    const countryDropdown = document.querySelector("#country-dropdown");
    const countryFlag = document.querySelector("#country-flag");
    const countryCodeDisplay = document.querySelector("#country-code");

    // Fonction pour basculer l'affichage du menu déroulant des pays
    const toggleCountryDropdown = () => {
        countryDropdown.style.display = countryDropdown.style.display === "block" ? "none" : "block";
    };

    // Sélectionner un pays
    const selectCountry = (event) => {
        const selectedOption = event.target;
        const countryCode = selectedOption.getAttribute("data-code");
        const flag = selectedOption.textContent.trim().split(" ")[0];

        countryFlag.textContent = flag;
        countryCodeDisplay.textContent = countryCode;
        countrySelect.setAttribute("data-code", countryCode);
        countryDropdown.style.display = "none";

      
    };

    // Validation du numéro de téléphone
 
    // Événements
    countrySelect.addEventListener("click", toggleCountryDropdown);
    countryDropdown.addEventListener("click", selectCountry);

    // Fermer le menu si on clique en dehors
    document.addEventListener("click", (event) => {
        if (!countrySelect.contains(event.target) && !countryDropdown.contains(event.target)) {
            countryDropdown.style.display = "none";
        }
    });

   
});



// Ajout du bouton "Fermer" dans le modal
closeButton.classList.add('close-btn');
closeButton.innerHTML = '✖';
document.querySelector('.modal-content').appendChild(closeButton);

// Fonction pour afficher le modal
const showModal = () => {
    modal.classList.add('show');
    modal.style.display = 'flex';
};

// Fonction pour cacher le modal
const closeModal = () => {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = 'none';
        mainPage.style.display = 'block';
    }, 300); // Attendre la fin de l'animation
};

// Affichage du modal au clic sur un bouton de prix
priceButtons.forEach(button => {
    button.addEventListener("click", () => {
        mainPage.style.display = 'none';
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('show'), 10); // Petit délai pour l'animation
        const price = button.getAttribute("data-price");
        amountDisplay.innerText = price + " Fcfa";
        payer.innerText = "Payer " + price + " Fcfa";
        paymentPage.style.display = "block";
        paymentOptions.style.display = "block";
    });
});

// Fermeture du modal avec le bouton
closeButton.addEventListener("click", closeModal);

// Fermeture du modal en cliquant en dehors
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Éviter l'entrée de caractères non numériques
phoneInputField.addEventListener("keypress", function (event) {
    const char = String.fromCharCode(event.keyCode);
    if (!/[0-9]/.test(char)) {
        event.preventDefault(); // Bloque la saisie de caractères non numériques
    }
});

// Préfixes Moov par pays
const moovPrefixes = [
    
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
    const countryCode = document.querySelector("#country-code").textContent; // Récupère l'indicatif du pays


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

    if (countryCode === "+229") {
        // Vérifie si "01" est déjà présent après "+229"
        if (!value.startsWith("01")) {
            value = "01" + value;
            phoneInputField.value = value; // Met à jour le champ téléphone
        }
    }
     // Extraire le préfixe après "01"
     const prefix = value.substring(2, 4); // Exclut "01"

    // Vérifier le préfixe et changer la couleur
    if (moovPrefixes.some(prefix => value.startsWith(prefix))) {
        moov.classList.remove("gray");
        moov.classList.add("red");
        img1.style.width = "50px";
        img1.style.height = "50px";
    }else{
        img1.style.width = "35px";
        img1.style.height = "35px"; 
    }
    if (mtnPrefixes.some(prefix => value.startsWith(prefix))) {
        mtn.classList.remove("gray");
        mtn.classList.add("red");
        img2.style.width = "50px";
        img2.style.height = "50px";
    }else{
        img2.style.width = "35px";
        img2.style.height = "35px"; 
    }
    if (celtisPrefixes.some(prefix => value.startsWith(prefix))) {
        celtis.classList.remove("gray");
        celtis.classList.add("red");
        img3.style.width = "50px";
        img3.style.height = "50px";
    }else{
        img3.style.width = "35px";
        img3.style.height = "35px"; 
    }
});

document.getElementById("pay").addEventListener("click", function () {
    alert("Paiement en cours...");
});


