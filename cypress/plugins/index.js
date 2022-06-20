/// <reference types="cypress" />

const faker = require('faker');

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on) => {
    on("task", {
        MassaDeTeste() {
            DADOS = {
                "valor": "1500",
                "formaPagamento": "1",
                "NroParcelas": "10",
                "nomeCliente": "João da Silva",

                "nroPedido": `${faker.random.number()}`,
                "installmentPayment": [{
                        "bankNumber": "237",
                        "installments": [{
                            "installment": 1,
                            "installmentValue": "400000",
                            "interest": false,
                            "totalValueOfInstallments": "400000",
                            "rateInterest": "1%"
                        }],
                        "flag": "visa"
                    },
                    {
                        "bankNumber": "999",
                        "installments": [{
                                "installment": 1,
                                "installmentValue": "400000",
                                "interest": false,
                                "totalValueOfInstallments": "400000",
                                "rateInterest": ""
                            },
                            {
                                "installment": 2,
                                "installmentValue": "250000",
                                "interest": true,
                                "totalValueOfInstallments": "500000",
                                "rateInterest": "2%"
                            }
                        ],
                        "flag": ""
                    }
                ],
                "faturaCartao": {
                    "identificador": "1245",
                    "nome": "João da Silva",
                    "endereco": {
                        "logradouro": "Av. Republica do Brasil",
                        "numero": "1988",
                        "complemento": "Fundos",
                        "cidade": "São Paulo",
                        "uf": "SP",
                        "cep": "11233111",
                        "pais": "BR"
                    },
                    "telefone": "(21)99999-9999",
                    "email": "jose@hotmail.com"
                },
                "antifraude": {
                    //"clienteIP": "177.139.52.16",
                    //"device": "4738d516f09cab3a2c1ee973bec88a5a367a59e4",
                    "nomeComprador": "Charles Xavier",
                    "documento": "121212121",
                    "telefoneDDD": "21",
                    "telefoneNumero": "2121-8800",
                    "moeda": "BRL",
                    "email": "jose@hotmail.com",
                    "enderecoEntrega": {
                        "infoNumero": "Casa 2",
                        "infoComplemento": "Fundos",
                        "logradouro": "Av. Republica do Brasil",
                        "numero": "1988",
                        "complemento": "Fundos",
                        "cidade": "São Paulo",
                        "uf": "SP",
                        "cep": "11233111",
                        "pais": "BR"
                    },
                    "produtos": [{
                        "nome": "Celular Samsung S20",
                        "valor": "1500",
                        "quantidade": "1",
                        "codigo": "001",
                        "sku": "SM-001"
                    }],
                    "merchantDefinedData": [{
                        "mddFieldId": "1",
                        "mddFieldValue": "1970-10-01"



                    }]
                }
            };
            return DADOS;
        }
    })
}