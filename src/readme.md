Explicando o que cada arquivo da pasta src faz.

index.js: Este arquivo é o núcleo da lógica do projeto. Ele contém funções que manipulam o texto, limpam palavras de caracteres especiais e verificam quais palavras se repetem.
- Função contaPalavras(texto): Essa função é o ponto de entrada para o processamento de texto. Ela recebe o texto completo, o divide em parágrafos e, em seguida, verifica as palavras duplicadas em cada parágrafo.

- Função extraiParagrafos(texto): Converte o texto em minúsculas e o divide por quebras de linha para criar uma lista de parágrafos.

- Função limpaPalavras(palavra): Remove pontuações e caracteres especiais de uma palavra, deixando apenas letras e números.

- Função verificaPalavrasDuplicadas(texto): Esta função analisa cada parágrafo, divide o texto em palavras e conta quantas vezes cada palavra aparece.

helpers.js: Este arquivo contém funções auxiliares que ajudam a formatar os dados para serem salvos em um arquivo de saída.

- Função filtraOcorrencias(paragrafo): Recebe um objeto que contém a contagem de palavras e retorna apenas aquelas que aparecem mais de uma vez.

- Função montaSaidaArquivo(listaPalavras): Formata os dados de contagem de palavras duplicadas em um texto legível que será salvo em um arquivo.

cli.js: Este arquivo configura a interface de linha de comando (CLI) usando a biblioteca commander para permitir que o usuário execute o programa no terminal.

- Configuração de Comando (program): Define as opções que o usuário pode fornecer, como o caminho do arquivo de texto e o destino para o arquivo de resultados.

- Função processaArquivo(texto, destino): Lê o arquivo de texto, conta as palavras duplicadas, e chama a função para salvar os resultados.

- Função criaESalvaArquivo(listaPalavras, endereco): Cria e salva o arquivo de resultados em um local especificado pelo usuário.

funcoesErro.js: Este arquivo cuida do tratamento de erros de maneira centralizada. Ele garante que, se houver um problema durante a leitura ou escrita de arquivos, uma mensagem de erro significativa seja exibida.

- Função trataErros(erro): Verifica o tipo de erro e retorna uma mensagem apropriada para o usuário.