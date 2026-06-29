[![Expo](https://img.shields.io/badge/Expo-56.0-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.85-61DAFB?logo=react&logoColor=111827)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

## Antes de instalar
Certifique-se de que você tenha o ambiente mobile configurado para executar aplicações React Native com Expo.

Este projeto corresponde apenas ao aplicativo mobile. Para que as consultas funcionem corretamente, é necessário que a API do backend esteja rodando e acessível pela URL configurada no arquivo `.env`.

Também é necessário ter o **Node.js** e um gerenciador de pacotes instalado. Os comandos abaixo utilizam o **npm**.

## Guia de Instalação

#### Clone o repositório:
```
git clone https://github.com/GiovaniAppezzato/health-dashboard-app
```

#### Acesse a pasta do projeto:
```
cd health-dashboard-app
```

#### Instale as dependências:
```
npm install
```

#### Copiar .env
```
cp .env.example .env
```

#### Configure a URL da API
No arquivo `.env`, ajuste a variável abaixo conforme o endereço em que o backend estiver rodando:

```
EXPO_PUBLIC_API_BASE_URL=http://localhost:9000/api
```

<sup>Ao executar no emulador Android, pode ser necessário usar o endereço da máquina host em vez de `localhost`, dependendo da configuração do ambiente.</sup>

#### Inicie o projeto
```
npm start
```

#### Executar no Android
```
npm run android
```

#### Executar no iOS
```
npm run ios
```

**Tudo pronto!** 🎉  
A aplicação será aberta pelo Expo no dispositivo ou emulador selecionado.

<div align="center">
  Feito com ♡ por <a href="https://www.linkedin.com/in/giovani-appezzato">Giovani Appezzato</a><br>
    <b>Por favor, mantenha o código limpo e organizado. Obrigado!</b>
</div>
