let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {
    let v = nombres[i];
    let message;

    // NaN
    if (Number.isNaN(v)) {
        message = "INVALIDE";
    }

    // Infinity ou -Infinity
    else if (v === Infinity || v === -Infinity) {
        message = "INFINI";
    }

    // -0
    else if (v === 0 && 1 / v === -Infinity) {
        message = "ZERO NEGATIF";
    }

    // Entier
    else if (Number.isInteger(v)) {
        if (Number.isSafeInteger(v)) {
            message = "ENTIER SUR";
        } else {
            message = "ENTIER HORS LIMITES";
        }
    }

    // Decimal
    else {
        message = "DECIMAL";
    }

    console.log(String(v) + " -> " + message);

}