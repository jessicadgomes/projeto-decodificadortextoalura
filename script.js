function decodeText() {
    const inputText = document.getElementById('inputText').value;
    const encodingType = document.getElementById('encodingType').value;
    let decodedText = '';

    try {
        switch (encodingType) {
            case 'base64':
                decodedText = atob(inputText);
                break;
            case 'url':
                decodedText = decodeURIComponent(inputText);
                break;
            case 'hex':
                decodedText = hexToString(inputText);
                break;
            default:
                throw new Error('Tipo de codificação desconhecido');
        }
    } catch (error) {
        decodedText = 'Erro na decodificação: ' + error.message;
    }

    document.getElementById('outputText').value = decodedText;
}

function hexToString(hex) {
    let str = '';
    for (let i = 0; i < hex.length; i += 2) {
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return str;
}

