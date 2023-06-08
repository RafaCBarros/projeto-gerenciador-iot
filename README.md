# projeto-gerenciador-iot
Projeto para Programação Mobile, sétimo período: Uma ferramenta mobile para controle de dispositivos IoTs. O projeto foi desenvolvido por: eu (@RafaCBarros), Lucas Barros (@Lucasldab), Giovanna Souto (@gisoaz) e Larissa Negrão.

## Objetivo
O projeto é um estudo sobre programação mobile com React Native via realização do frontend de um projeto fictício de gerenciamento de dispositivos IoT.

## Pré-requisitos
- [Node.js > 12](https://nodejs.org) e npm
- [JDK > 11](https://www.oracle.com/java/technologies/downloads/#java11)
- [Android Studio e Android SDK](https://developer.android.com/studio)

## Dependências Base

- [@react-navigation/native ^6.1.6](https://reactnavigation.org/docs/getting-started/) e [@react-navigation/stack ^6.3.16](https://reactnavigation.org/docs/stack-navigator/) para navegação entre telas;
- [react-native-gesture-handler ^2.10.1](https://www.npmjs.com/package/react-native-gesture-handler) para respostas mais suaves e confiáveis de ações gestuais;
- [react-native-dropdown-select-list ^2.0.4](https://www.npmjs.com/package/react-native-dropdown-select-list) para componente de dropdown;
- [react-native-safe-area-context ^4.5.3](https://www.npmjs.com/package/react-native-safe-area-context),
- [react-native-svg ^13.9.0](https://www.npmjs.com/package/react-native-svg) para renderização de imagens vetores .svg

## Organização do Projeto
A pasta fonte, com os códigos realmente alterados, estão organizados entre Components(Components), Navigation (Navegação) e Screens(Telas).
### Components (Componentes)
São códigos utilizados pare renderizar uma pequena parte que compõe uma tela maior, muitas vezes podendo ser reutilizado a partir de pequenas alterações ou personalização nativa do componente. Exemplos incluem botões, campos de entrada e cartões de informação.
### Navigation (Navegação)
Pasta para guardar o script que permite a navegação entre telas do dispositivo.
### Screens (Telas)
São códigos que serão exibidos no celular, e geralmente formados por um ou mais componente em conjunto para resultar em uma imagem completa. Como não implementamos back-end ou uma pasta de dados, os códigos de tela também armazenam os dados como a lista de dispositivos e suas informações pertinentes.

## Executar
### Iniciar projeto no computador
Antes de mais nada, garanta que sua máquina possuí as configurações necessárias para rodar um ambiente de desenvolvimento, seguindo o passo-a-passo no [link](https://reactnative.dev/docs/environment-setup).

Uma vez seu ambiente esteja preparado, clone ou baixe o repositório e utilize o código a seguir para instalar as dependências necessárias. 
```
npm install
```
Após a instalação das dependências, use o código a seguir para iniciar o projeto.
```
npx react-native start
```
**Atenção**: Para o próximo passo é importante que você tenha acesso ao menos um emulador, ou dispositivo com sistema operacional que deseja testar.

Digite 'A', para testar em ambiente Android ou 'I', para testar em ambiente iOS.

## Materiais Referência
Além da documentação das dependências, também foi utilizado código do projeto [anterior](https://github.com/RafaCBarros/Biciclub) e estudo do canal de Youtube (notJust.dev)[https://www.youtube.com/@notjustdev]