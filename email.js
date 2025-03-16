// Configuração do EmailJS
// Você precisará criar uma conta em https://www.emailjs.com/ (gratuito para até 200 emails/mês)
// Depois de criar a conta, você precisará:
// 1. Criar um serviço de email (Gmail, Outlook, etc.)
// 2. Criar um template de email
// 3. Obter sua chave pública

// Inicializar EmailJS
(function() {
    // Substitua 'YOUR_PUBLIC_KEY' pela sua chave pública do EmailJS
    emailjs.init('Vjp6Z47Q_rHE7aRPx');
})();

// Função para enviar o email
function sendEmail(name, message) {
    // Mostrar mensagem de carregamento
    document.getElementById('submit-btn').disabled = true;
    document.getElementById('form-status').textContent = 'Enviando...';
    
    // Preparar os parâmetros para o EmailJS
    const templateParams = {
        to_name: 'Juliana e Jonathan',
        from_name: name,
        message: name + ' confirmou presença no casamento, Mensagem:' + message || 'Sem mensagem adicional',
        // Emails que receberão a confirmação
        to_email: 'ninoloth@gmail.com'
    };
    
    // Substitua 'YOUR_SERVICE_ID' e 'YOUR_TEMPLATE_ID' pelos seus IDs
    return emailjs.send('service_9o8djb8','template_2hasr74', templateParams);
}

// Configurar o evento de envio do formulário
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('rsvp-form');
    
    if (form) {        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Obter os valores do formulário
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            
            // Enviar o email
            sendEmail(name, message)
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('form-status').textContent = 'Confirmação enviada com sucesso!';
                    document.getElementById('form-status').style.color = 'green';
                    form.reset();
                    
                    // Redirecionar para a página de agradecimento após 2 segundos
                    setTimeout(function() {
                        window.location.href = 'thanks.html';
                    }, 2000);
                })
                .catch(function(error) {
                    console.log('FAILED...', error);
                    document.getElementById('form-status').textContent = 'Erro ao enviar. Por favor, tente novamente.';
                    document.getElementById('form-status').style.color = 'red';
                })
                .finally(function() {
                    document.getElementById('submit-btn').disabled = false;
                });
        });
    }
});