
// Exporta a função 'contaPalavras' que recebe um texto como argumento e conta a ocorrência de palavras repetidas.
export function contaPalavras(texto) {
    
    // Extrai parágrafos do texto
    const paragrafos = extraiParagrafos(texto);

    // Mapeia os parágrafos para verificar palavras duplicadas
    const contagem = paragrafos.flatMap((paragrafo) => {
        if (!paragrafo) return []; // Se o parágrafo for vazio, retorna um array vazio
        return verificaPalavrasDuplicadas(paragrafo); // Verifica as palavras duplicadas no parágrafo
    });

    return contagem; // Retorna a contagem de palavras duplicadas
}

// Função para extrair parágrafos de um texto, convertendo o texto para minúsculas e dividindo-o por quebras de linha.
function extraiParagrafos(texto) {
    return texto.toLowerCase().split('\n');
}

// Função para limpar uma palavra, removendo pontuações e caracteres especiais.
function limpaPalavras(palavra) {
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

// Função para verificar palavras duplicadas em um parágrafo.
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' '); // Divide o parágrafo em palavras

    const resultado = {}; // Objeto que armazenará a contagem de palavras

    // Itera sobre cada palavra do parágrafo
    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3) { // Considera apenas palavras com 3 ou mais caracteres
            const palavraLimpa = limpaPalavras(palavra); // Limpa a palavra de caracteres especiais
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1; // Incrementa a contagem da palavra limpa no objeto resultado
        }
    });

    return resultado; // Retorna o objeto com a contagem de palavras
}
