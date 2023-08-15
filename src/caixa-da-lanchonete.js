
//DESCONTOS E TAXAS 
//Pagamento em dinheiro tem 5% de desconto
//Pagamento a crédito tem acréscimo de 3% no valor total
//OUTRAS REGRAS
//Caso item extra seja informado num pedido que não tenha o respectivo item principal, apresentar mensagem "Item extra não pode ser pedido sem o principal".
//Combos não são considerados como item principal.
//É possível pedir mais de um item extra sem precisar de mais de um principal.
//Se não forem pedidos itens, apresentar mensagem "Não há itens no carrinho de compra!"
//Se a quantidade de itens for zero, apresentar mensagem "Quantidade inválida!".
//Se o código do item não existir, apresentar mensagem "Item inválido!"
//Se a forma de pagamento não existir, apresentar mensagem "Forma de pagamento inválida!"


class CaixaDaLanchonete {
 //criando o cardápio da lanchonete 
 cardapio = {
    'cafe': { descricao: 'Café', valor: 3.00 },
    'chantily': { descricao: 'Chantily (extra do Café)', valor: 1.50 },
    'suco': { descricao: 'Suco Natural', valor: 6.20 },
    'sanduiche': { descricao: 'Sanduíche', valor: 6.50 },
    'queijo': { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
    'salgado': { descricao: 'Salgado', valor: 7.25 },
    'combo1': { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
    'combo2': { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }}
;
    calcularValorDaCompra(metodoDePagamento, itens) {
        if (itens.length === 0 ){
            return "Não há itens no carrinho de compra!";
        }
        return "";
    }

}

export { CaixaDaLanchonete };
