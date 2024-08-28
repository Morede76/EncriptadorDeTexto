document.getElementById('botonEncriptar').addEventListener('click', function() {
    let ingreseTexto = document.getElementById('ingreseTexto').value;
    let encryptedText = ingreseTexto
        .replace(/a/g, 'xa')
        .replace(/e/g, 'xe')
        .replace(/i/g, 'xi')
        .replace(/o/g, 'xo')
        .replace(/u/g, 'xu');
    document.getElementById('resultado').value = encryptedText;
});

document.getElementById('botonDesencriptar').addEventListener('click', function() {
    let ingreseTexto = document.getElementById('ingreseTexto').value;
    let decryptedText = ingreseTexto
        .replace(/xa/g, 'a')
        .replace(/xe/g, 'e')
        .replace(/xi/g, 'i')
        .replace(/xo/g, 'o')
        .replace(/xu/g, 'u');
    document.getElementById('resultado').value = decryptedText;
});

document.getElementById('botonCopiar').addEventListener('click', function() {
    let resultado = document.getElementById('resultado');
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(resultado.value);
});