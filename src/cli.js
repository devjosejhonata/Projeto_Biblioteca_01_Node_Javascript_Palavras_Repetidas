
import fs from 'fs'; // Importa o módulo 'fs' para manipulação de arquivos
import path from 'path'; // Importa o módulo 'path' para manipulação de caminhos de arquivos
import trataErros from './erros/funcoesErro.js'; // Importa a função para tratamento de erros
import { contaPalavras } from './index.js'; // Importa a função de contagem de palavras
import { montaSaidaArquivo } from './helpers.js'; // Importa a função que monta a saída para arquivo
import { Command } from 'commander'; // Importa a biblioteca commander para criação de comandos CLI
import chalk from 'chalk'; // Importa a biblioteca chalk para colorir o texto no terminal

const program = new Command(); // Cria uma nova instância do comando CLI

// Configuração do comando CLI com opções e argumentos
program
  .version('0.0.1') // Define a versão da CLI
  .option('-t, --texto <string>', 'caminho do texto a ser processado') // Define a opção de caminho do texto
  .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados') // Define a opção de caminho de destino
  .action((options) => { // Define a ação a ser executada com as opções fornecidas pelo usuário

      const { texto, destino } = options; // Desestrutura as opções para obter os caminhos de texto e destino

      if (!texto || !destino) { // Verifica se ambos os caminhos foram fornecidos
        console.error(chalk.red('erro: favor inserir caminho de origem e destino')); // Exibe erro no console se faltar algum caminho
        program.help(); // Exibe a ajuda do programa
        return; // Sai da função
      }

      const caminhoTexto = path.resolve(texto); // Resolve o caminho absoluto do texto
      const caminhoDestino = path.resolve(destino); // Resolve o caminho absoluto do destino

      try {
        processaArquivo(caminhoTexto, caminhoDestino); // Processa o arquivo com os caminhos fornecidos
        console.log(chalk.green('Texto processado com sucesso')); // Exibe mensagem de sucesso
      } catch(erro) {
          console.log(chalk.red('ocorreu um erro no processamento'), erro); // Exibe erro em caso de falha no processamento
      }
});

program.parse(); // Faz o parse dos argumentos da linha de comando

// Função para processar o arquivo de texto, lendo seu conteúdo e contando palavras duplicadas
function processaArquivo(texto, destino) {
    fs.readFile(texto, 'utf-8', (erro, texto) => { // Lê o arquivo de texto no encoding UTF-8
        try {
            if (erro) throw erro; // Lança o erro se houver problema ao ler o arquivo
            const resultado = contaPalavras(texto); // Conta as palavras duplicadas no texto
            criaESalvaArquivo(resultado, destino); // Cria e salva o resultado em um arquivo de destino
        } catch(erro) {
            trataErros(erro); // Trata o erro usando a função personalizada de tratamento de erros
        }
    });    
}

// Função para criar e salvar o arquivo com o resultado da contagem de palavras duplicadas
function criaESalvaArquivo(listaPalavras, endereco) {

    const arquivoNovo = `${endereco}/resultado.txt`; // Define o nome do arquivo de saída
    const textoPalavras = montaSaidaArquivo(listaPalavras); // Gera o texto formatado para o arquivo

    fs.promises.writeFile(arquivoNovo, textoPalavras) // Usa o método de Promises do 'fs' para escrever o arquivo
     .then(() => {
         console.log('arquivo criado'); // Exibe mensagem de sucesso ao criar o arquivo
     }).catch((erro) => {
        throw erro; // Lança o erro em caso de falha ao escrever o arquivo
     }).finally(() => console.log('operação finalizada')); // Exibe mensagem de finalização da operação
}
