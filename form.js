document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    body.innerHTML = `
        <h1>Choisissez un montant</h1>
        <div class="button-container">
<button class="price-button" data-price="5000"">5000 Fcfa</button>

<button class="price-button" data-price="10000"">10000 Fcfa</button>

<button class="price-button" data-price="15000"">15000 Fcfa</button>

        </div>

        <div id="payment-page" style="display: none; border: 1px solid #ccc; padding: 20px; margin-top: 20px; text-align: center;">
            <h2>Total à payer : <span id="price-display"></span></h2>
            <label>Numéro de téléphone :</label>
            <select id="country-code"></select>
            <input type="text" id="phone-number" placeholder="Entrez votre numéro">
            <p>Opérateur détecté : <span id="operator-display" style="font-weight: bold;"></span></p>
            <button id="pay-button">Payer</button>
        </div>
    `;

    const buttons = document.querySelectorAll(".price-button");
    const paymentPage = document.getElementById("payment-page");
    const priceDisplay = document.getElementById("price-display");
    const phoneInput = document.getElementById("phone-number");
    const countryCodeSelect = document.getElementById("country-code");
    const operatorDisplay = document.getElementById("operator-display");
    const payButton = document.getElementById("pay-button");

    const operators = {
        "MTN": /^67|65|64/, 
        "Moov": /^60|61|62|66/, 
        "Celltis": /^68|69/
    };

    const countries = [
        { code: "+229", name: "Bénin" },
        { code: "+225", name: "Côte d'Ivoire" },
        { code: "+233", name: "Ghana" },
        { code: "+234", name: "Nigeria" }
    ];

    countries.forEach(country => {
        let option = document.createElement("option");
        option.value = country.code;
        option.textContent = `${country.name} (${country.code})`;
        countryCodeSelect.appendChild(option);
    });

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const price = this.getAttribute("data-price");
            priceDisplay.textContent = price + " Fcfa";
            payButton.textContent = "Payer " + price + " Fcfa";
            paymentPage.style.display = "block";
        });
    });

    phoneInput.addEventListener("input", function() {
        const phone = phoneInput.value.replace(/\D/g, "");
        let detectedOperator = "";
        for (const [operator, regex] of Object.entries(operators)) {
            if (regex.test(phone)) {
                detectedOperator = operator;
                break;
            }
        }
        operatorDisplay.textContent = detectedOperator;
operatorDisplay.style.color = detectedOperator ? "darkgreen" : "black";

    });
});
