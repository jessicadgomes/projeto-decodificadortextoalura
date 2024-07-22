function decodeText() {
    const encodingType = document.getElementById('encodingType').value;
    const inputText = document.getElementById('inputText').value;
    let outputText = '';

    switch (encodingType) {
        case 'base64':
            outputText = decodeBase64(inputText);
            break;
        case 'hex':
            outputText = decodeHex(inputText);
            break;
        case 'url':
            outputText = decodeURIComponent(inputText);
            break;
        case 'caesar':
            const shift = parseInt(prompt("Digite o valor do deslocamento (shift) para Cifrado César:"), 10);
            outputText = decodeCaesarCipher(inputText, shift);
            break;
        default:
            outputText = 'Tipo de codificação desconhecido.';
    }

    document.getElementById('outputText').value = outputText;
}

function decodeBase64(encodedText) {
    return atob(encodedText);
}

function decodeHex(encodedText) {
    let decodedText = '';
    for (let i = 0; i < encodedText.length; i += 2) {
        decodedText += String.fromCharCode(parseInt(encodedText.substr(i, 2), 16));
    }
    return decodedText;
}

function decodeCaesarCipher(text, shift) {
    shift = shift % 26;
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            let code = char.charCodeAt(0);
            let base = (code >= 65 && code <= 90) ? 65 : 97;
            return String.fromCharCode(((code - base - shift + 26) % 26) + base);
        }
        return char;
    }).join('');
}
