const nomes = ["Trentos", "trentos", "Matheus Trentin", "trentos", "Trentos", "Trentos", "Trentos"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)