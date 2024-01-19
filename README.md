# API-DevioFood

<details open="open">
  <summary><h2 style="display: inline-block">📜 Sumário</h2></summary>

- [Sobre o projeto](#sobre-o-projeto)
- [Usando](#usando)
- [Rotas](#rotas)


</details>

## 📋 Sobre o projeto
### tecnologias e ferramentas

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Javascript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![PostegresSql](https://img.shields.io/badge/postegresql-%23007ACC.svg?style=for-the-badge&logo=sql&logoColor=white)
![prisma](https://img.shields.io/badge/prisma-%23007ACC.svg?style=for-the-badge&logo=prisma&logoColor=white)

### Idealização do projeto
- Esse projeto foi pensado para ser uma Api de uma hamburgueria, no qual o cliente vai escolher os produtos para serem feitos, assim gerando uma ordem para a cozinha. E com isso, a cozinha terá acesso a ordem de pedido do cliente e cozinhará os pratos e no final dará baixa no pedido.

## 🏁 Usando

Link do deploy para testar em nuvem

```bash
https://driven

```

Clone o repositorio

```bash
$ git clone https://github.com/igorhnovais/API-DevioFood

```

Instale as dependências

```bash
$ npm i
```

E por fim, rode o comando para iniciar a aplicação

```bash
$ npm run dev
```
<a name="contribuindo"></a>

## 🏁 Rotas
### -> health

1. Rota para teste se o servidor esta rodando do projeto:
    
    Route get: ```"/health"``` 

    Desrição: nela você consegue ver se sua aplicação esta rodando

    Status:
    ```bash
        200
    ```
    
    Saída:
    ```bash
        "server running ok"
    ```

### -> products
1. Rota para buscar por um produto especifico:
    
    Route post: ```"/products/filter"``` 

    Desrição: nela você consegue pesquisar por um produto atraves do nome ou pelo codigo

    Status:
    ```bash
        200
    ```
    Entrada:
    ```bash
        {
            "filter": "202031" || "hamburguer medio"
        }
    ```
    
    Saída:
    ```bash
        [
            {
                "id": 2,
                "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                "name": "hamburguer medio",
                "price": 3250,
                "code": 202031
            }
        ]
    ```

2. Rota para pegar todos os produtos da hamburgueria:
    
    Route get: ```"/products"``` 

    Desrição: nela você consegue visualizar todos os produtos existentes na hamburgueria. 

    Status:
    ```bash
        200
    ```
    
    Saída:
    ```bash
        [
            {
                "id": 1,
                "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                "name": "hamburguer simples",
                "price": 3050,
                "code": 202056
            },
            {
                "id": 2,
                "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                "name": "hamburguer medio",
                "price": 3250,
                "code": 202031
            },
            {
                "id": 3,
                "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                "name": "hamburguer grande",
                "price": 3450,
                "code": 202088
            },
            {
                "id": 4,
                "image": "https://img.freepik.com/fotos-gratis/hamburguer-isolado-no-fundo-branco-fastfood-de-hamburguer-fresco-com-carne-e-queijo_90220-1329.jpg",
                "name": "hamburguer gigante",
                "price": 3650,
                "code": 202014
            }
        ]
    ```

### -> order

1. Rota para adicionar um produto a ordem:
    
    Route post: ```"/orders"``` 

    Desrição: nela você consegue adicionar uma nova ordem 

    Status:
    ```bash
        201
    ```
    Entrada:
    ```bash
        {
            productId: 2,
            nameCustumer: "cleber",
            observation: "sem obs",
            transshipment: 0,
            total: 3050,
            drop: false,
            description: "bla bla",
            aditional: "bacon",
            quantity: 2
        }
    ```
    
    Saída:
    ```bash
        {
            id: 2,
            productId: 2,
            nameCustumer: "cleber",
            observation: "sem obs",
            transshipment: 0,
            total: 3050,
            drop: false,
            description: "bla bla",
            aditional: "bacon",
            quantity: 2
        }
    ```
2. Rota para deletar um produto do pedido:
    
    Route delete: ```"/orders/:id"``` 

    Desrição: nela você consegue remover uma ordem

    Status:
    ```bash
        200
    ```
    
    Saída:
    ```bash
        {
            id: 1,
            productId: 2,
            nameCustumer: "cleber",
            observation: "sem obs",
            transshipment: 0,
            total: 3050,
            drop: false,
            description: "bla bla",
            aditional: "bacon",
            quantity: 2
        }
    ```
3. Rota para atualizar o pedido:
    
    Route put: ```"/orders-update"``` 

    Desrição: nela você consegue atualizar uma ordem para que fique com status de baixado

    Status:
    ```bash
        200
    ```
    entrada:
    ```bash
        {
            "nameCustumer": "cleber"
        }
    ```
    
    Saída:
    ```bash
        {
            id: 1,
            productId: 2,
            nameCustumer: "cleber",
            observation: "sem obs",
            transshipment: 0,
            total: 3050,
            drop: true,
            description: "bla bla",
            aditional: "bacon",
            quantity: 2
        }
    ```
4. Rota para ver o resumo do pedido do cliente:
    
    Route get: ```"/orders"``` 

    Desrição: nela você consegue atualizar uma ordem para que fique com status de baixado

    Status:
    ```bash
        200
    ```
    entrada:
    ```bash
        {
            "nameCustumer": "cleber"
        }
    ```
    
    Saída:
    ```bash
        {
            "nameCustomer": "cleber",
            "balance": 7100,
            "infos": [
                {
                "total": 3050,
                "observation": "sem obs",
                "drop": true,
                "description": "bla bla",
                "aditional": "bacon",
                "quantity": 2,
                "transshipment": 0
                },
                {
                "total": 4050,
                "observation": "sem obs",
                "drop": false,
                "description": "bla bla",
                "aditional": "bacon",
                "quantity": 1,
                "transshipment": 0
                }
            ]
        }
    ```