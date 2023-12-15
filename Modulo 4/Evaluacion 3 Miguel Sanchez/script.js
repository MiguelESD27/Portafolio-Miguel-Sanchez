function showDiscountCode() {
    const termsCheckbox = document.getElementById('termsCheckbox');

    if (termsCheckbox.checked) {
        const discountCode = generateDiscountCode();
        alert(`¡Código de descuento generado: ${discountCode}`);
    } else {
        alert("Debes aceptar los términos y condiciones para obtener el código de descuento.");
    }
}

function generateDiscountCode() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    let code = '';
    for (let i = 0; i < 8; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }
    return code;
}

const getCodeButton = document.getElementById('getCodeButton');
getCodeButton.addEventListener('click', showDiscountCode);
