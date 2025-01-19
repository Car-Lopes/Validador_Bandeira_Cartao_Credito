function validarBandeiraCartao(numeroCartao) {
    const bandeiras = [
        { nome: 'Visa', regex: /^4/ },
        { nome: 'MasterCard', regex: /^(5[1-5]|2(2[2-9][1-9]|2[3-9]|[3-6]|7[0-1]|720))/ },
        { nome: 'Elo', regex: /^(4011|4312|4389|4576|5041|5066|5090|6277|6362|6363|650|651|655)/ },
        { nome: 'American Express', regex: /^3[47]/ },
        { nome: 'Discover', regex: /^(6011|65|64[4-9])/ },
        { nome: 'Hipercard', regex: /^6062/ },
        { nome: 'Diners Club', regex: /^(301|305|36|38)/ },
        { nome: 'Aura', regex: /^50/ },
        { nome: 'JCB', regex: /^35/ },
        { nome: 'Voyager', regex: /^86/ },
        { nome: 'EnRoute', regex: /^21/ }
    ];

    for (let bandeira of bandeiras) {
        if (bandeira.regex.test(numeroCartao)) {
            return bandeira.nome;
        }
    }

    return 'Bandeira desconhecida';
}

// Exemplo de uso
const numeroCartao = '869943163245617';
const bandeira = validarBandeiraCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);