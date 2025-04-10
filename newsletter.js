document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.newsletter-form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nome = document.getElementById('fname').value;
    const sobrenome = document.getElementById('lname').value;
    const email = document.getElementById('lemail').value;

    const formData = new FormData();
    formData.append('nome', nome);
    formData.append('sobrenome', sobrenome);
    formData.append('email', email);

    console.log("Enviando os dados:", { nome, sobrenome, email });

    try {
      await fetch('https://script.google.com/macros/s/SEU_ID_AQUI/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });

      // ✅ Não tente ler a resposta com no-cors!
      alert('Inscrição enviada com sucesso!');
      form.reset();
    } catch (error) {
      console.error('Erro no envio:', error);
      alert('Erro ao enviar dados. Por favor, tente novamente.');
    }
  });
});
