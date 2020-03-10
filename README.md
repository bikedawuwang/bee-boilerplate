# bee-boilerplate

## Description

基于 react + typescript + mobx 的前端脚手架

可以帮助用户快速搭建前端开发环境，可以搭配 [Bumblebee](https://github.com/JimLiuxinghai/Bumblebee)食用，风味更佳！

## Getting Started

您可以使用 [honeybee-cli](https://github.com/bikedawuwang/bee-cli) 快速搭建， 也可以 clone 到本地使用！

```shell

npm install -g honeybee-cli

yarn global add honeybee-cli

```

## Directory Structure

```
|-- bee-boilerplate
    |-- README.md
    |-- directoryList.md
    |-- package.json
    |-- tsconfig.json
    |-- tslint.json
    |-- webpack.config.ts
    |-- config
    |   |-- webpack.dev.config.ts
    |   |-- webpack.prod.config.ts
    |-- public
    |   |-- index.html
    |-- src
        |-- index.tsx
        |-- assets
        |   |-- .DS_Store
        |   |-- images
        |   |-- js
        |-- component
        |   |-- App
        |       |-- index.less
        |       |-- index.tsx
        |-- services
        |   |-- Http.ts
        |-- store
        |   |-- app.ts
        |   |-- index.ts
        |-- util
            |-- index.ts

```