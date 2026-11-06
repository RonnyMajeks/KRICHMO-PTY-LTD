function initQuoteForm() {
  const form = document.getElementById('quote-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('q-name').value.trim();
    const phone = document.getElementById('q-phone').value.trim();
    const details = document.getElementById('q-details').value.trim();
    
    if (!name || !phone || !details) {
      showFormMessage(form, 'Please fill in all required fields.', 'error');
      return;
    }

    const message = `Hello KRICHMO,%0A%0AI would like to request a quote.%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Project Details:* ${details}%0A%0APlease let me know the next steps.`;
    const whatsappUrl = `https://wa.me/${KRICHMO_CONFIG.contact.whatsapp}?text=${message}`;
    
    showFormMessage(form, 'Opening WhatsApp to send your enquiry...', 'success');
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      form.reset();
    }, 1500);
  });
}

function showFormMessage(form, message, type) {
  let msgDiv = form.querySelector('.form-message');
  if (!msgDiv) {
    msgDiv = document.createElement('div');
    msgDiv.className = 'form-message';
    form.prepend(msgDiv);
  }
  msgDiv.textContent = message;
  msgDiv.className = `form-message ${type}`;
  msgDiv.style.display = 'block';
  
  if (type === 'success') {
    setTimeout(() => { msgDiv.style.display = 'none'; }, 4000);
  }
}