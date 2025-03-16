# Site de Casamento

Este é um modelo simples de site de casamento criado com HTML e CSS. O site inclui:

- Cabeçalho com os nomes dos noivos
- Seção de foto
- Seção com informações sobre a história do casal
- Seção com detalhes sobre a localização da cerimônia e da festa
- Formulário para confirmação de presença

## Como usar

1. Faça o download ou clone este repositório
2. Abra o arquivo `index.html` em seu navegador para visualizar o site
3. Personalize o conteúdo conforme necessário:
   - Altere os nomes, datas e informações no arquivo HTML
   - Substitua as imagens por fotos do casal
   - Atualize as informações de localização e o mapa
   - Modifique as cores e estilos no arquivo CSS

## Personalização

### Cores

As cores principais do tema podem ser alteradas no arquivo `styles.css`:

- Cor de destaque: `#d4a373` (tom dourado/bege)
- Cor de fundo principal: `#f9f7f7` (branco acinzentado)
- Cor de fundo secundária: `#f0e6e6` (rosa claro)
- Cor do texto: `#333` (cinza escuro)
- Cor do rodapé: `#3a3a3a` (cinza muito escuro)

### Fontes

O site utiliza as seguintes fontes do Google Fonts:

- 'Playfair Display' para títulos
- 'Montserrat' para o texto

## Configuração do Formulário de Confirmação

Existem duas opções para configurar o envio de emails de confirmação:

### Opção 1: Usando EmailJS (Frontend)

1. Crie uma conta gratuita em [EmailJS](https://www.emailjs.com/) (permite até 200 emails/mês no plano gratuito)
2. Crie um serviço de email (Gmail, Outlook, etc.)
3. Crie um template de email
4. Obtenha sua chave pública
5. Edite o arquivo `email.js` e substitua:
   - `YOUR_PUBLIC_KEY` pela sua chave pública
   - `YOUR_SERVICE_ID` pelo ID do seu serviço
   - `YOUR_TEMPLATE_ID` pelo ID do seu template
6. No arquivo `index.html`, certifique-se de que o script está apontando para `email.js`:
   ```html
   <script src="email.js"></script>
   ```

### Opção 2: Usando PHP (Backend)

1. Certifique-se de que seu servidor suporta PHP
2. Verifique se a função `mail()` do PHP está habilitada no servidor
3. Edite o arquivo `send_email.php` e atualize os emails se necessário
4. No arquivo `index.html`, altere o script para usar o PHP:
   ```html
   <script src="php-email.js"></script>
   ```

## Funcionalidades

- Design responsivo que se adapta a diferentes tamanhos de tela
- Formulário de confirmação de presença
- Mapas integrados com a localização da cerimônia e da festa
- Efeitos visuais sutis para melhorar a experiência do usuário

## Observações

- A opção EmailJS é mais fácil de configurar e não requer um servidor com PHP, mas tem limite de emails
- A opção PHP requer um servidor com suporte a PHP, mas não tem limite de emails (depende apenas do seu servidor)
- Ambas as opções incluem validação de formulário e feedback visual para o usuário
