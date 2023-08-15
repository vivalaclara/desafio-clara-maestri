
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
        if (itens.length === 0 ){ //se o array de itens está vazio, já considere o pedido como inválido
            return "Não há itens no carrinho de compra!";
        }
        
        //testando se a forma de pagamento é válida
        pagamentosValidos = ['credito', 'debito', 'dinheiro'] //array com as strings das formas válidas de pagamento

        if (!pagamentosValidos.includes(metodoDePagamento)){
            return "Forma de pagamento inválida!"; //se a forma de pagamento não estiver disponível no array, será inválido 
        }
        
         let valor = 0 //inicializar o valor dos respectivos itens VÁLIDOS

         let produtos = [] //inicializar um array para guardar os itens VÁLIDOS de um pedido 

         let valores = [] //inicializar um array para guardar os valores dos itens VÁLIDOS pedidos 

        //testando se os itens no pedido são válidos 
        for (const item of itens ){ //selecionar cada item do array de itens fornecido
            const [cod,qtd] = item.split(',')

            if (!this.cardapio[cod]){
                return "Item inválido!";
            }
            if (parseInt(qtd) < 1){ //transformando a string da quantidade em int para verificar se há pelo menos um item
                return "Quantidade inválida!";
            }
            valor = this.cardapio[cod].valor * parseInt(qtd); //calculando o valor de cada item 
            
            valores.push(valor) //adicionando os valores dos itens 

            produtos.push(cod) //adicionando os itens válidos
        }

        //testando se os itens adicionais estão acompanhados de seus itens iniciais em um pedido
        if (!produtos.includes('cafe') && produtos.includes('chantily')){
            return "Item extra não pode ser pedido sem o principal";
        }
        if (!produtos.includes('sanduiche') && produtos.includes('queijo')){
            return "Item extra não pode ser pedido sem o principal";
        }

        return "";
    }

}

export { CaixaDaLanchonete };
