const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    const array = productDetails('Alcool gel', 'Máscara');
    assert.deepStrictEqual(Array.isArray(array), true);
    assert.deepStrictEqual(array.length, 2);
    assert.deepStrictEqual(typeof array[0], 'object');
    assert.deepStrictEqual(typeof array[1], 'object');
    assert.notDeepStrictEqual(array[0], array[1]);
    assert.deepStrictEqual(array[0].details.productId.includes(`123`), true);
    assert.deepStrictEqual(array[1].details.productId.includes(`123`), true);
  });
});
