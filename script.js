const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {
        let cortes = barbearia.cortes;
        for(let i = 0; i < cortes.length; i++){
                return cortes[i];
            }
        }
    return "Corte não encontrado";
}


function buscaBarbaPorId(id) {
    let barbas = barbearia.barbas;
    for(let i = 0; i < barbas.length;i++){
        if(barbas[i].id === id){
            return barbas[i];
        }
    }
    return "Barba não encontrada";
}

function verificaStatusBarbearia() {
    if(barbearia.estaAberto === true){
        return "Estamos abertos";
    }
    return "Estamos fechados";
}

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
let pedido = {};
let pedidoCortes = buscaCortePorId(corteId);
let pedidoBarbas  = buscaBarbaPorId(barbaId);

        pedido.nome = nomeCliente;
        pedido.pedidoCorte = pedidoCortes.tipo;
        pedido.pedidoCortePreco = pedidoCortes.valor;
        pedido.pedidoBarba = pedidoBarbas.tipo;
        pedido.pedidoBarbaPreco = pedidoBarbas.valor;
    return pedido;
}
  

function atualizarServico(lista, id, valor, tipo) {
       for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id){
            lista[i].valor = valor;
            lista[i].tipo = tipo;
        }
    }
    return lista;      
}


//calculaTotal(). Esta função recebe um pedido como parâmetro. Acesse as propriedades pedidoCortePreco e pedidoBarbaPreco, some o valor das duas e retorne a soma.


function calculaTotal(pedido) {
    
    let pedidoCortes = pedido.pedidoCortePreco;
    let pedidoBarbas = pedido.pedidoBarbaPreco;

    soma = pedidoCortes + pedidoBarbas;
    return  soma;
}
