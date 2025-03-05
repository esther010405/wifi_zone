document.body.innerHTML = `

    <div id="mainPage" style="max-width: 400px; margin: auto; padding: 20px; font-family: Arial, sans-serif; text-align: center;">
        <h3>Choisissez un montant</h3>
        <button class="priceButton" data-price="5000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">5 000 Fcfa</button>
        <button class="priceButton" data-price="10000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">10 000 Fcfa</button>
        <button class="priceButton" data-price="15000" style="background: green; color: white; padding: 10px; margin: 5px; border-radius: 5px; border: none;">15 000 Fcfa</button>
    </div>

    <div class="conteneur" style="position: absolute; color: white;top: 50%; left: 50%; transform: translate(-50%, -50%); " id="conteneur">


    <div id="paymentPage" style="display: none;position: relative; width: 500px; height:200px;  padding-top: 20px; font-family: Arial, sans-serif; color: white; text-align: center;background:linear-gradient(135deg, #00c853, #b2ff59)">
        <!--<img src="/home/esther/pageJS/WhatsApp Image 2025-02-26 at 17.18.15.jpeg"  style=" width:500px; height:200px; font-family: Arial, sans-serif;">-->
        <div style= "position: absolute; color: white;top: 50%; left: 50%; transform: translate(-50%, -50%); ">
           <!-- <img src="Capture d’écran du 2025-02-27 11-37-46.png"  style="width: 40px; height: 40px;">-->
            <p>Total à payer</p>
            <h2 id="amountDisplay">0 Fcfa</h2>
        </div>
    </div>
    
    <div id="paymentOptions" style="display: none;padding-bottom:20px;  max-width: 500px; margin-top:-18px; margin-left:auto; margin-right:auto; background: white;  position: relative; text-align: center;">
        <div style="background-color:#e0f7fa; padding-bottom:30px" ><br>




            <p>Sélectionner un mode de paiement</p>
            <button id="moov" class="paymentMethod" style="width: 85px; height: 65px;">
                <img src="moov.jpg" alt="Moov" style="width: 50px; height: 50px;">
            </button>
            <button id="mtn" class="paymentMethod" style="width: 85px; height: 65px;">
                <img src="mtn.jpg" alt="MTN" style="width: 50px; height: 50px;">
            </button>
            <button id="celtis" class="paymentMethod" style="width: 85px; height: 65px;">
                <img src="celtis.png" alt="celtis" style="width: 50px; height: 50px;">
            </button><br>
        </div>
     
        <br><br>
        <label for="phone" class="" style="display: flex; margin-left: 25px;">Nom et prénom</label>
        <input type="text" id="name" placeholder="Nom et Prénoms" style="width: 90%; padding: 10px; margin: 5px; border: 1px solid #ccc; border-radius: 5px;heigth:10px;">
        <br><br>
        
        <label for="phone" class="" style="display: flex; margin-left: 25px;">Numéro de téléphone</label>
        <div class="input-group" style="width: 90%; padding: 10px; margin-left: 20px; heigth:10px;">
            <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="countryDropdown" data-bs-toggle="dropdown" aria-expanded="false">🇧🇯</button>
            <ul class="dropdown-menu" id="countryList">
            </ul>
            <input type="tel" id="phone" class="form-control" placeholder="Entrez votre numéro">
        </div>
           
        <br><br>
        <button id="pay" style="background: green; color: white; border: none; padding: 15px; width: 75%; cursor: pointer;"></button>
        <p style="font-size: 12px; color: gray; margin-top: 10px;">🛡 Paiement sécurisé fourni par Kkiapay</p>
    </div>
    </div>

`;

const style = document.createElement('style');
style.innerHTML = `
    .gray {
        background-color: lightgray;
    }
    .red {
        background-color:rgba(240, 168, 13, 0.97); /* Changed to a shade of green */

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
const payer=document.getElementById("pay");

const phoneInputField = document.querySelector("#phone");

document.addEventListener("DOMContentLoaded", function () {
    const countries = [
        { code: "bj", name: "Bénin", flag: "🇧🇯" },
        { code: "tg", name: "Togo", flag: "🇹🇬" },
        { code: "bf", name: "Burkina Faso", flag: "🇧🇫" },
        { code: "ne", name: "Niger", flag: "🇳🇪" }
    ];

    const countryDropdown = document.getElementById("countryDropdown");
    const countryList = document.getElementById("countryList");

    countries.forEach(country => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.classList.add("dropdown-item");
        a.href = "#";
        a.textContent = `${country.flag} ${country.name}`;
        a.dataset.flag = country.flag;
        a.addEventListener("click", function () {
            countryDropdown.textContent = this.dataset.flag;
        });
        li.appendChild(a);
        countryList.appendChild(li);
    });
});

priceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = button.getAttribute("data-price");
        amountDisplay.innerText = price + " Fcfa";
        payer.innerText= "Payer "+ price+" Fcfa";
        mainPage.style.display = "none";
        paymentPage.style.display = "block";
        paymentOptions.style.display = "block";
    });
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
    "60", "61", "62", "63", "64", "65", "66", "67", "68", "69","58","55", "45", // Bénin
    "01", "02",  // Côte d’Ivoire
    "60", "61", "62", "66", "67",  // Togo
    "66", "67",  // Burkina Faso
    "88", "89",  // Niger
    "05", "06",  // Gabon
    "90", "91", "92", "93", "94",  // Tchad
    "75", "76"   // Centrafrique
];

// Préfixes MTN par pays (Exemples)
const mtnPrefixes = [
    "50", "51", "52", "53", "54", "56", "57", "97","91","96","66","61",   // Bénin
    "07", "08",  // Côte d’Ivoire
    "90", "91", "92", "93", "94", "95",  // Togo
    "70", "71", "72", "73", "74",  // Burkina Faso
    "80", "81", "82", "83", "84",  // Niger
    "77", "78",  // Gabon
    "97", "98", "99"   // Tchad
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
