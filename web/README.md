# Desafio Blog Rockr - Front-end

![Badge](https://img.shields.io/badge/types-Flow%20%7C%20TypeScript-blue)
![Badge](https://img.shields.io/badge/Bootcamp%20Rocketseat-ReactJS-blueviolet)

> Concluido :heavy_check_mark:

## Tópicos

🔹 [Descrição do projeto](#link-descrição-do-projeto)

🔹 [Funcionalidades](#information_source-funcionalidades)

🔹 [Pré-requisitos](#sparkles-pré-requisitos)

🔹 [Como configurar a aplicação](#floppy_disk-iniciar/configurar-banco-de-dados)

🔹 [Como rodar a aplicação](#arrow_forward-como-rodar-a-aplicação)

🔹 [Como rodar os testes](#building_construction-como-rodar-os-testes)

🔹 [Instruções e Disclaimer](#teacher-instruções-e-disclaimer)

🔹 [Layout da Aplicação](#scroll-layout-da-aplicação)

🔹 [Tarefas em aberto](#pencil-tarefas-em-aberto)

🔹 [Desenvolvedores](#octopus-desenvolvedores)

## :link: Descrição do projeto

<p align="justify">

  Neste [projeto-desafio](https://github.com/MGustav0/oneRecipe/blob/development/Desafio.md) demonstro meus conhecimentos em TypeScript ReactJS.

  Implemento a lógica de interação com dados da API criada e da API pública [MealDB](https://www.themealdb.com/api.php), a lógica para fazer login, recuperar senha, visualizar um dashboard com receitas, visualizar uma receita com detalhes e ser responsivo em 1080 pixels e no IPhone X (812 pixels).

</p>

## :information_source: Funcionalidades

✔️ Recuperação de dados da API criada e da API pública

✔️ Autenticação

✔️ Recuperação de senha

✔️ Navegação entre páginas com passagem de parâmetros e/ou outras informações

✔️ Enviar dados de um formulário em um modal

## :sparkles: Pré-requisitos

⚠️ [Node](https://nodejs.org/en/download/)

⚠️ [Yarn](https://yarnpkg.com/getting-started/install)

## :arrow_forward: Como rodar a aplicação

❗️ Você precisará seguir os passos a seguir para poder rodar a aplicação na sua máquina.

Navegue até a pasta criada e abra no Visual Studio Code, execute o comando `yarn` dentro da pasta no seu terminal para instalar todas as dependências. Após a instalação digite: `yarn start`.

Para visualizar os dados, deve-se rodar a API criada e criar um usuário na API via Insominia (ou semelhante).

Pronto! Agora basta acessar a aplicação à partir do link: http://localhost:3000/

## :building_construction: Como rodar os testes

Na mesma pasta do projeto, no terminal, digite:

```bash
yarn test
```

## :teacher: Instruções e Disclaimer

Ao rodar o back-end, crie um usuário e obtenha acesso ao dashboard e ao prato. Ao clicar em uma categoria, será redirecionado à um prato. Clicar na logo, redirecionará para o dashboard. Clicar no botão de desligar, fará o log-off da aplicação.

1. A API MealDB não disponibiliza listagem de várias receitas por padrão

2. Somente no meio do projeto eu me atentei que a API MealDB não se tratava de pratos de restaurante, mas de receitas, por isto a divergência entre o nome do projeto e o nome no layout.

3. Com a atualização dos React Hooks, não foi necessário/útil utilizar o Redux, pois o gerenciamento de estados pelos Hooks está mais fácil e direto de se fazer. Este requisito não foi cumprido.

## :scroll: Layout da Aplicação

### Login

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/01_-_signin.png" width="640" heigth="360" />

### Login em 812 pixels

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/02_-_mobile_signin.png" width="360" heigth="640" />

### Erro de login

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/03_-_signin_error.png" width="640" heigth="360" />

### Esqueceu a senha

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/04_-_forgot_password.png" width="640" heigth="360" />

### Recuperação de senha

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/05_-_reset_password.png" width="640" heigth="360" />

### Cadastro

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/06_-_siginup.png" width="640" heigth="360" />

### Dashboard

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/07_-_dashboard.png" width="640" heigth="360" />

### Dashboard em 812 pixels

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/08_-_mobile_dashboard.png" width="360" heigth="640" />

### Página de receita

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/09_-_recipe.png" width="640" heigth="360" />

### Página de receita em 812 pixels

<img src="https://github.com/MGustav0/oneRestaurant/blob/development/extras/screenshots/web/10_-_mobile_recipe.png" width="360" heigth="640" />

## :pencil: Tarefas em aberto

🖊 Veja no [trello!](https://trello.com/b/VfnBeDPz/onerestaurant)

## :octopus: Desenvolvedores

| [<img src="https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4>][(https://github.com/MGustav0](https://avatars1.githubusercontent.com/u/18315899?s=460&u=54d9c6ea66f2b27120bf39dabe1d36ff22a92b9d&v=4))" width=115><br><sub>Gustavo Moreira</sub>](https://github.com/MGustav0) |
| :---: |

## :copyright: Licença

The [MIT License](https://opensource.org/licenses/MIT) - Use freely, I am not responsible for the actions of third parties.
