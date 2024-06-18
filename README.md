# API-ATV

API Catálogo de Produtos

Esta é uma API CRUD para gerenciar um catálogo de produtos, construída com Node.js, Express, Sequelize e MySQL. A estrutura segue o padrão MVC e utiliza dotenv para gerenciar variáveis de ambiente, além de suportar migrações e seeders para o banco de dados.
Requisitos
```
    Node.js (v14 ou superior)
    MySQL
````

Configuração
1. Clone o Repositório
git clone https://github.com/seu-usuario/api-catalogo-produtos.git
cd api-catalogo-produtos

2. Instale as Dependências
```
  npm install
```

4. Configure as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```
DB_NAME=nome do banco
DB_USER=nome do usuário
DB_PASS=senha do banco
DB_HOST=local do host
DB_DIALECT=dialeto do banco
PORT=porta de conexão
```
4. Configure o Banco de Dados
Certifique-se de que você tem um banco de dados MySQL rodando e execute as migrações e seeders:
```
  npx sequelize-cli db:migrate
  npx sequelize-cli db:seed:all
```

5. Métodos CRUD
Criar Produto
    URL: /api/produtos
    Método: POST
    Descrição: Cria um novo produto.
    Corpo da Requisição:
```
{
  "nome": "Nome do Produto",
  "descricao": "Descrição do Produto",
  "preco": 10.0,
  "quantidade": 100
}
```

Listar Produtos
    URL: /api/produtos
    Método: GET
    Descrição: Retorna uma lista de todos os produtos.


Obter Produto
    URL: /api/produtos/:id
    Método: GET
    Descrição: Retorna os detalhes de um produto específico.
    Parâmetros de URL: id - ID do produto


Atualizar Produto
    URL: /api/produtos/:id
    Método: PUT
    Descrição: Atualiza um produto existente.
    Parâmetros de URL: id - ID do produto
    Corpo da Requisição:
```
  {
  "nome": "Nome do Produto",
  "descricao": "Descrição do Produto",
  "preco": 20.0,
  "quantidade": 200
}
```

Deletar Produto
    URL: /api/produtos/:id
    Método: DELETE
    Descrição: Deleta um produto.
    Parâmetros de URL: id - ID do produto


Iniciar o Servidor
 
  no cmd ou terminal, rodar o comando:
```
npm start
```

