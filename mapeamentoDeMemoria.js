var tamanho_memoria_principal = parseInt(prompt("Tamanho da memória Principal (Bytes):"));
var tamanho_memoria_cache = parseInt(prompt("Tamanho da memória Cache (Bytes):"));
var tamanho_bloco = parseInt(prompt("Tamanho do Bloco (Bytes):"));

var largura_bloco_linha = Math.log2(tamanho_memoria_cache);
var qtd_linhas = 

var tamanho_enderenco = Math.log2(tamanho_memoria_principal * 8);

var memoria_principal = new Array(tamanho_memoria_principal);
var memoria_cache = new Array(tamanho_memoria_cache);

console.log(tamanho_memoria_principal);
console.log(tamanho_memoria_cache);

function alocarNaCache(indexDoBloco) {
    //let address = indexDoBloco % 
}
