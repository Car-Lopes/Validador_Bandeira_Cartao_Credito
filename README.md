<a href="https://fontmeme.com/fonts/flenja-font/"><img src="https://fontmeme.com/permalink/250119/80e8bb69828a5bfe428e1d1499d51d66.png" alt="flenja-font" border="0"></a>

Este projeto é um validador de bandeira de cartão de crédito que identifica a bandeira de um cartão com base no número fornecido. Ele suporta várias bandeiras populares, como Visa, MasterCard, Elo, American Express, Discover e Hipercard.

## Funcionalidades

- Identifica a bandeira do cartão de crédito com base no número do cartão.
- Suporta as seguintes bandeiras:
  - Visa
  - MasterCard
  - Elo
  - American Express
  - Discover
  - Hipercard
  - Diners Club
  - Aura
  - JCB
  - Voyager
  - EnRoute

## Como Usar

1. Clone o repositório para o seu ambiente local:
    ```sh
    git clone https://github.com/Car-Lopes/Validador_Bandeira_Cartao_Credito
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd src
    ```

3. Execute o script :
    ```sh
    node index.js
    ```

4. O script irá validar a bandeira do cartão de crédito com base no número fornecido no código.

## Exemplo de Uso

```js
const numeroCartao = '3549227684073324';
const bandeira = validarBandeiraCartao(numeroCartao);
console.log(`A bandeira do cartão é: ${bandeira}`);