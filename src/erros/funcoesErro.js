import chalk from 'chalk'; // Importa a biblioteca chalk para colorir o texto no terminal

// Exporta a função que trata os erros ocorridos durante a execução da aplicação
export default function trataErros(erro) {

    // Verifica se o erro é de arquivo não encontrado
    if(erro.code === 'ENOENT') {
        throw new Error(chalk.red('Arquivo não encontrado')); // Lança um novo erro com uma mensagem personalizada
    } else { 
        return 'Erro na aplicação'; // Retorna uma mensagem genérica de erro para outros tipos de erro
    }
}
