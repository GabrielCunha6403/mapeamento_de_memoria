var tamanho_memoria_principal = parseInt(prompt("Tamanho da Memória Principal (Bytes):"));
var tamanho_memoria_cache = parseInt(prompt("Tamanho da Memória Cache (Bytes):"));
var tamanho_bloco = parseInt(prompt("Tamanho do Bloco/Linha (Bytes):"));
var read_address = prompt("Digite o endereço a ser lido:");

var tamanho_enderenco = Math.log2(tamanho_memoria_principal);
var qtd_linhas;

var memoria_principal = new Array(tamanho_memoria_principal);
var memoria_cache = new Array(tamanho_memoria_cache);

console.log(tamanho_memoria_principal);
console.log(tamanho_memoria_cache);

function alocarNaCache(indexDoBloco) {
    //let address = indexDoBloco % 
}
