# Meus produtos

Aplicativo React Native (Expo) para cadastrar, buscar, filtrar e remover produtos, com persistência em AsyncStorage.

## Tecnologias

- Expo + React Native + TypeScript
- AsyncStorage
- Expo Image Picker
- Lucide React Native

## Funcionalidades

- Cadastro de produto (nome, descrição, preço, quantidade, categoria, marca e imagem opcional)
- Validação: nome e categoria obrigatórios; quantidade e preço numéricos ≥ 0
- Lista de produtos na mesma tela
- Busca por nome + filtro por categoria (funcionam juntos)
- Mensagem quando nenhum produto corresponde à busca
- Remoção de itens com atualização no armazenamento
- Persistência ao fechar e reabrir o app (incluindo imagens em base64)

## Como rodar (Expo Go)

```bash
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go no celular.
