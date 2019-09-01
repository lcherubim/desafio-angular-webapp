# Desafio Angular WebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md)

## Rodar em ambiente local

Para rodar a aplicação em ambiente local deve-se instalar as dependências (npm install) e rodar iniciar a aplicação (ng serve).

As váriaves de ambiente estão configuradas da seguinte forma:

apiUrl: 'http://localhost:3000/registros' em dev (ng serve, ng build), nesse caso deve-se rodar a API tbm localmente (veja mais na documentação da API) ou alterar a URL do ambiente e apontar para a API publicada no Herokuapp.

apiUrl: 'https://desafio-nodejs-webapi.herokuapp.com/registros' em prod (ng build --prod) - A API está apontando para um bando de teste MySQL online, caso queria rodar tbm em banco local, deve-se criar o banco (veja mais na documentação a API) e alterar as configurações do banco na API.

## Demonstração

Para fins de demonstração, a aplicação foi publicada no www.netlify.com, fazendo integração contínua com a branch master deste repositório.

Confira a demo em: https://desafio-angular-webapp.netlify.com

Objetivo: pesquisar agências próximas a localização do usuário em um raio de x km e salvar informações do acesso (localização, device, browser e numero da agência) em um banco de dados.

## API

https://github.com/lcherubim/desafio-nodejs-webapi

