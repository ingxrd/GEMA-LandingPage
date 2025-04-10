document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.newsletter-form');
  
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      const nome = document.getElementById('fname').value;
      const sobrenome = document.getElementById('lname').value;
      const email = document.getElementById('lemail').value;
  
      // Formatar os dados como FormData (o que o Google Apps Script espera)
      const formData = new FormData();
      formData.append('nome', nome);
      formData.append('sobrenome', sobrenome);
      formData.append('email', email);
  
      console.log("Enviando os dados:", { nome, sobrenome, email });
  
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbw4I7WDK8_s7IipJXFIlpxyeaHZtyFX2QLc6gco70HfIYydMx3D7ydDU1isA4iTYpid/exec', {
          method: 'POST',
          // Remova o mode: 'no-cors' para poder ver a resposta
          body: formData
        });
  
        // Verifique se o script do Google retornou conteúdo
        const result = await response.text();
        console.log('Resposta do servidor:', result);
  
        alert('Inscrição enviada com sucesso!');
        form.reset();
      } catch (error) {
        console.error('Erro no envio:', error);
        alert('Erro ao enviar dados. Por favor, tente novamente.');
      }
    });
  });