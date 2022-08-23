# Teppa - Teste para Devs Fullstack

Nesse teste você deverá criar uma aplicação com frontend em React e backend em Nodejs+Express.

A ideia é simular o funcionamento de um CRUD em uma aplicação real com front e backend.

A aplicação deverá conter um CRUD e nele os formulários de Create e Update deverão ser multi step. 

Você pode definir o que será cadastrado, use a criatividade!

Requisitos:
- Front e back devem ser escritos em Typescript
- Frontend em React (16.8+)
- Backend em NodeJs+Express
- Firestore como banco de dados

Diferenciais (Não obrigatórios):
- Publicar o front no Firebase Hosting e o back no Cloud Run do GCP ou Heroku
- Rules do Firestore
- Validação de campos no front e back
- Registro e Login

Ao finalizar o teste envie um e-mail com o link do github da sua resolução e a URL do front (caso realizado o deploy) para contato@teppadev.com.br com o assunto SEUNOME-TesteDevFullStack

Entendemos que cada candidato tem uma realidade e por isso **não definimos uma data limite de entrega**, o teste ficará aberto até o preenchimento da vaga.

🚀🚀

***

## Estrutura:

A ideia desse projeto foi de construir um mono repo com a separação dos dois sistemas ``back-end`` e ``front-end``. Apesar disso, o deploy do back-end através do Heroku foi feito em um repositório separado que foi ser verificado [aqui](https://github.com/JVmano/heroku-user-api).

O projeto da interface está configurado para utilizar o endpoint da API que está no Heroku, para utilizar novamente a localhost mude a url no arquivo ``front-end/src/hooks/useApi.ts``:

```js
const api = axios.create({
  baseURL: 'http://localhost:3333/users/',
  headers: {'Content-Type': 'application/json'}
})
```

A documentação de cada pasta se encontra na ``README.md`` de cada pasta.

As URLs de deploy de cada serviço são:
Back-end => [Heroku](https://secure-wave-58660.herokuapp.com/)
Front-end => [Firebase Hosting](https://teppa-db.web.app/)