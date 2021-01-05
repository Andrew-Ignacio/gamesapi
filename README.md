# API de games
Esta API contém uma lista de jogos.
Para um desenvolvedor utilizar a ferramenta é necessário ser um usuário cadastrado no banco de dados.

## Endpoints

### GET /games
Este endpoint retorna todos os games cadastrados
#### Parametros
Nenhum
#### Respostas
##### OK! 200
Caso receba essa resposta, a listagem dos games será enviada normalmente.
Exemplo de resposta:
```
[
    {
        "id": 1,
        "title": "Read Dead Redemption 2",
        "price": "100",
        "createdAt": "2020-12-24T02:28:59.000Z",
        "updatedAt": "2020-12-24T02:46:08.000Z"
    },
    {
        "id": 3,
        "title": "GTA V",
        "price": "20",
        "createdAt": "2020-12-24T02:29:31.000Z",
        "updatedAt": "2020-12-26T18:04:28.000Z"
    },
    {
        "id": 4,
        "title": "Cyberpunk 2077",
        "price": "200",
        "createdAt": "2020-12-24T02:29:46.000Z",
        "updatedAt": "2021-01-04T21:18:04.000Z"
    }
]
```
##### Falha na autenticação! 401
Esta resposta acontece quando algum erro de autenticação acontece. Motivos: Token inválido, Token expirado. Exemplo de resposta: 
```
Unauthorized
```

### POST /auth
Este endpoint realiza a autenticação para utilização da API.
#### Parametros
email: E-mail do usuário cadastrado.
password: Senha do usuário cadastrado.
Exemplo:
```
{
    "email": "andrew@outlook.com.br",
    "password": "123"
}
```
#### Respostas
##### OK! 200
Caso receba essa resposta, o token JWT será retornado para o desenvolvedor.
Exemplo de resposta:
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJkYXJrbWFnZUBvdXRsb29rLmNvbS5iciIsImlhdCI6MTYwOTg4NDExNywiZXhwIjoxNjA5OTcwNTE3fQ.bdwGVi_UZnPJ2i956doqNfnIbBS_P9yzIgm-pp4GTPY"
}
```
##### Não aceitável! 406
Esta resposta acontece quando algum erro de autenticação acontece. Motivos: Senha ou Email incorreto. Exemplo de resposta: 
```
Not Acceptable
```
