// Injection du HTML et du CSS dans la page
document.body.innerHTML = `
    <div id="app" style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; min-height: 100vh; position: relative;">
        <div id="mainPage" style="text-align: center; padding: 20px; background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            <h3 style="color: #2c3e50; margin-bottom: 25px;">Choisissez un montant</h3>
            <div style="display: flex; justify-content: center; gap: 10px; flex-wrap: wrap;">
                <button class="priceButton" data-price="5000" style="background: #27ae60; color: white; padding: 12px 20px; margin: 5px; border-radius: 8px; border: none; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">5 000 Fcfa</button>
                <button class="priceButton" data-price="10000" style="background: #27ae60; color: white; padding: 12px 20px; margin: 5px; border-radius: 8px; border: none; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">10 000 Fcfa</button>
                <button class="priceButton" data-price="15000" style="background: #27ae60; color: white; padding: 12px 20px; margin: 5px; border-radius: 8px; border: none; font-weight: bold; transition: all 0.3s ease; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">15 000 Fcfa</button>
            </div>
        </div>

        <div id="paymentPage" style="display: none; text-align: center; padding: 20px; background: linear-gradient(to bottom, #2ecc71, #27ae60); border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15); color: white; position: relative; margin-top: 20px;">
            <div style="padding: 20px;">
                <img src="paie1.webp" style="width: 120px; height: 70px; margin-bottom: 15px; border-radius: 5px;">
                <p style="margin: 0; font-size: 16px;">Total à payer</p>
                <h2 id="amountDisplay" style="margin: 10px 0; font-size: 28px; font-weight: bold;">0 Fcfa</h2>
            </div>
        </div>

        <div id="paymentOptions" style="display: none; background-color: white; border-radius: 10px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); padding: 20px; margin-top: 20px;">
            <div style="background: linear-gradient(to right, #2ecc71, #27ae60); color: white; padding: 15px; border-radius: 8px 8px 0 0; margin: -20px -20px 20px -20px; text-align: center;">
                <p style="margin: 0; font-size: 16px;">Sélectionner un mode de paiement</p>
            </div>

            <form id="paymentForm">
                <div style="margin-bottom: 15px;">
                    <label for="name" style="display: block; margin-bottom: 5px; font-weight: bold; color: #2c3e50; text-align: left;">Nom et prénom</label>
                    <input type="text" id="name" placeholder="Ex: Jean DUPOIS" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 6px; box-sizing: border-box; font-size: 14px;">
                </div>

                <div style="margin-bottom: 20px;">
                    <label for="phone" style="display: block; margin-bottom: 5px; font-weight: bold; color: #2c3e50; text-align: left;">Numéro de téléphone</label>
                    <div style="display: flex; gap: 0; width: 100%;">
                        <div id="country-select" style="display: flex; align-items: center; justify-content: center; padding: 0 10px; border: 1px solid #ddd; border-right: none; background-color: #f5f5f5; height: 40px; cursor: pointer; border-radius: 6px 0 0 6px; min-width: 90px; flex: 0 0 90px;">
                            <span id="country-flag" style="margin-right: 8px; font-size: 18px;">🇧🇯</span>
                            <span id="country-code" style="font-size: 14px;">+229</span>
                            <span style="margin-left: 5px;">▼</span>
                        </div>
                        <input id="phone" type="tel" placeholder="Ex:01 65 00 00 00" style="flex: 1; padding: 10px; border: 1px solid #ddd; height: 20px; border-left: none; border-radius: 0 6px 6px 0; outline: none; font-size: 14px; min-width: 0;">
                    </div>
                    <div id="country-dropdown" style="position: absolute; width: 200px; background-color: white; border: 1px solid #ddd; border-radius: 6px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); display: none; z-index: 10; margin-top: 5px;">
                        <div class="country-option" data-code="+229" data-country="BJ" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">🇧🇯 Bénin (+229)</div>
                        <div class="country-option" data-code="+228" data-country="TG" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">🇹🇬 Togo (+228)</div>
                        <div class="country-option" data-code="+234" data-country="NG" style="padding: 10px; cursor: pointer; border-bottom: 1px solid #eee;">🇳🇬 Nigeria (+234)</div>
                        <div class="country-option" data-code="+226" data-country="BF" style="padding: 10px; cursor: pointer;">🇧🇫 Burkina Faso (+226)</div>
                    </div>
                </div>

                <div style="text-align: center; margin: 20px 0;">
                    <p style="margin-bottom: 15px; color: #2c3e50; font-weight: bold;">Choisissez votre opérateur</p>
                    <div style="display: flex; justify-content: center; gap: 20px; margin-bottom: 20px;">
                        <div id="moov" class="paymentMethod" style="cursor: pointer; transition: all 0.3s;">
                            <img src="moov.jpg" alt="Moov" style="width: 50px; height: 50px; border-radius: 8px; border: 2px solid transparent;">
                        </div>
                        <div id="mtn" class="paymentMethod" style="cursor: pointer; transition: all 0.3s;">
                            <img src="mtn.jpg" alt="MTN" style="width: 50px; height: 50px; border-radius: 8px; border: 2px solid transparent;">
                        </div>
                        <div id="celtis" class="paymentMethod" style="cursor: pointer; transition: all 0.3s;">
                            <img src="celtis.png" alt="Celtis" style="width: 50px; height: 50px; border-radius: 8px; border: 2px solid transparent;">
                        </div>
                    </div>
                </div>

                <button id="pay" type="button" style="width: 100%; background: #27ae60; color: white; border: none; padding: 15px; font-size: 16px; font-weight: bold; border-radius: 6px; cursor: pointer; transition: background 0.3s; box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);">Payer maintenant</button>
                <p style="text-align: center; font-size: 12px; color: #7f8c8d; margin-top: 15px;">🛡 Paiement sécurisé par RICODE SYSTEMS</p>
            </form>
        </div>
    </div>
`;

// Ajout des styles CSS dynamiquement
const style = document.createElement('style');
style.innerHTML = `
    body {
        margin: 0;
        padding: 0;
        background-color: #f5f7fa;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .priceButton:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        background: #2ecc71;
    }
    #pay:hover {
        background: #239b56;
    }
    .country-option:hover {
        background-color: #f0f0f0;
    }
    .paymentMethod img {
        transition: all 0.3s ease;
    }
    .paymentMethod.selected img {
        transform: scale(1.3);
        border: 2px solid #2ecc71 !important;
        box-shadow: 0 0 0 3px rgba(46, 204, 113, 0.3);
    }
    input:focus {
        border-color: #2ecc71;
        box-shadow: 0 0 0 2px rgba(46, 204, 113, 0.2);
    }
`;
document.head.appendChild(style);

// Logique JavaScript
const priceButtons = document.querySelectorAll(".priceButton");
const paymentPage = document.getElementById("paymentPage");
const mainPage = document.getElementById("mainPage");
const amountDisplay = document.getElementById("amountDisplay");
const paymentOptions = document.getElementById("paymentOptions");
const payer = document.getElementById("pay");
const phoneInput = document.getElementById("phone");
const countrySelect = document.getElementById("country-select");
const countryDropdown = document.getElementById("country-dropdown");
const countryOptions = document.querySelectorAll(".country-option");

// Opérateurs
const moov = document.getElementById("moov");
const mtn = document.getElementById("mtn");
const celtis = document.getElementById("celtis");

// Préfixes pour les opérateurs
const moovPrefixes = ["55", "56", "60", "61", "62"];
const mtnPrefixes = ["65", "66", "90", "91"];
const celtisPrefixes = ["75", "76", "77"];

// Variable pour suivre l'opérateur sélectionné
let selectedOperator = null;

// Afficher la page de paiement
priceButtons.forEach(button => {
    button.addEventListener("click", () => {
        const price = button.getAttribute("data-price");
        amountDisplay.textContent = `${price} Fcfa`;
        payer.textContent = `Payer ${price} Fcfa`;
        mainPage.style.display = "none";
        paymentPage.style.display = "block";
        paymentOptions.style.display = "block";
    });
});

// Sélection du pays
countrySelect.addEventListener("click", (e) => {
    e.stopPropagation();
    const rect = countrySelect.getBoundingClientRect();
    countryDropdown.style.position = "fixed";
    countryDropdown.style.top = `${rect.bottom + window.scrollY}px`;
    countryDropdown.style.left = `${rect.left + window.scrollX}px`;
    countryDropdown.style.display = countryDropdown.style.display === "block" ? "none" : "block";
});

// Sélection d'un pays dans la liste
countryOptions.forEach(option => {
    option.addEventListener("click", () => {
        const countryCode = option.getAttribute("data-code");
        const countryFlag = option.textContent.trim().split(" ")[0];
        document.getElementById("country-flag").textContent = countryFlag;
        document.getElementById("country-code").textContent = countryCode;
        countryDropdown.style.display = "none";
    });
});

// Sélection d'un opérateur
[moov, mtn, celtis].forEach(operator => {
    operator.addEventListener("click", () => {
        if (selectedOperator) {
            selectedOperator.classList.remove("selected");
        }
        operator.classList.add("selected");
        selectedOperator = operator;
    });
});

// Détection des préfixes pour les opérateurs
phoneInput.addEventListener("input", function() {
    let value = this.value.trim();
    if (selectedOperator && !selectedOperator.classList.contains("auto-selected")) {
        selectedOperator.classList.remove("selected");
        selectedOperator = null;
    }
    if (moovPrefixes.some(prefix => value.startsWith(prefix))) {
        if (selectedOperator && selectedOperator.id !== "moov") {
            selectedOperator.classList.remove("selected");
        }
        moov.classList.add("selected");
        selectedOperator = moov;
        selectedOperator.classList.add("auto-selected");
    } else if (mtnPrefixes.some(prefix => value.startsWith(prefix))) {
        if (selectedOperator && selectedOperator.id !== "mtn") {
            selectedOperator.classList.remove("selected");
        }
        mtn.classList.add("selected");
        selectedOperator = mtn;
        selectedOperator.classList.add("auto-selected");
    } else if (celtisPrefixes.some(prefix => value.startsWith(prefix))) {
        if (selectedOperator && selectedOperator.id !== "celtis") {
            selectedOperator.classList.remove("selected");
        }
        celtis.classList.add("selected");
        selectedOperator = celtis;
        selectedOperator.classList.add("auto-selected");
    }
});

// Bouton de paiement
payer.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const phone = phoneInput.value;
    if (!name || !phone || !selectedOperator) {
        alert("Veuillez remplir tous les champs et sélectionner un opérateur.");
        return;
    }
    const operatorName = selectedOperator.id.toUpperCase();
    alert(`Paiement de ${amountDisplay.textContent} en cours pour ${name} (${phone}) via ${operatorName}.`);
});

// Fermer le dropdown si on clique ailleurs
document.addEventListener("click", (e) => {
    if (!countrySelect.contains(e.target) && !countryDropdown.contains(e.target)) {
        countryDropdown.style.display = "none";
    }
});
