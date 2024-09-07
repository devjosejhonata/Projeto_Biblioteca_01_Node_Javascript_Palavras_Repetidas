
// Função para filtrar palavras duplicadas em um parágrafo.
// Retorna uma lista de palavras que aparecem mais de uma vez.
function filtraOcorrencias(paragrafo) {
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

// Função para formatar a saída dos resultados da contagem de palavras duplicadas para salvar em um arquivo.
function montaSaidaArquivo(listaPalavras) {

    let textoFinal = ''; // String que armazenará o texto formatado final

    // Itera sobre cada parágrafo processado
    listaPalavras.forEach((paragrafo, indice) => {
        
        const duplicadas = filtraOcorrencias(paragrafo).join(', '); // Filtra e junta as palavras duplicadas em uma string
        textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas} \n`; // Adiciona o resultado formatado ao texto final
    });

    return textoFinal; // Retorna o texto final formatado
}

// Exporta a função montaSaidaArquivo para ser usada em outros módulos
export { montaSaidaArquivo }
