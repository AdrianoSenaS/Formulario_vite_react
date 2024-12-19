import { useState } from 'react';
import './App.css';
import logo1 from './assets/logo1.jpg';
import logo2 from './assets/logo2.jpg';

const RegistrationForm = () => {
  const [buttonText, setButtonText] = useState("Enviar Inscrição");
  const [isSending, setIsSending] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    course: '',
    cpf: '',
    fullName: '',
    birthDate: '',
    birthCity: '',
    birthState: '',
    maritalStatus: '',
    rg: '',
    fatherName: '',
    motherName: '',
    phone: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    email: '',
    city: '',
    state: '',
    paymentOption: '',
    dueDate: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText("Enviando...");
    try {
      const response = await fetch('url api aqui', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormSubmitted(true); // Mostra a mensagem de agradecimento
      } else {
        
        alert('Erro ao enviar o e-mail.');
        console.log(response.statusText);
      }
    } catch (error) {
      console.error('Erro:', error);
    }
    setIsSending(false);
    setButtonText("Enviar Inscrição");
  };

  return (
    <div className="form-container">
      {formSubmitted ? (
        <div className="thank-you-message">
          <h2>Obrigado por se inscrever!</h2>
          <p>Aguarde, um representante entrará em contato em breve para finalizar sua inscrição.</p>
          <p>Após a conclusão você terá acesso ao cusrso em até 24 horas.</p>
        </div>
      ) : (
        <>
          <h1>Ficha de Inscrição 📝</h1>
          <p>Preencher todos os dados abaixo</p>
          <form onSubmit={handleSubmit} className="form-content">
            <fieldset>
              <legend>Escolha curso:</legend>
              <label>
                <input
                  type="radio"
                  name="course"
                  value="Teologia Bíblica para Lideres Cristãos"
                  checked={formData.course === 'Teologia Bíblica para Lideres Cristãos'}
                  onChange={handleChange}
                />
                Teologia Bíblica para Lideres Cristãos
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="course"
                  value="Formando o Professor EBD"
                  checked={formData.course === 'Formando o Professor EBD'}
                  onChange={handleChange}
                />
                Formando o Professor EBD
              </label>
            </fieldset>

            <fieldset>
              <legend>Dados Pessoais</legend>
              <input type="text" name="cpf" placeholder="CPF" value={formData.cpf} onChange={handleChange} required />
              <input type="text" name="fullName" placeholder="Nome completo" value={formData.fullName} onChange={handleChange} required />
              <span>Data De Nacimento</span><br />
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} required />
              <input type="text" name="birthCity" placeholder="Cidade de Nascimento" value={formData.birthCity} onChange={handleChange} required />
              <input type="text" name="birthState" placeholder="Estado de Nascimento" value={formData.birthState} onChange={handleChange} required />
              <input type="text" name="maritalStatus" placeholder="Estado Civil" value={formData.maritalStatus} onChange={handleChange} required />
              <input type="text" name="rg" placeholder="RG" value={formData.rg} onChange={handleChange} required />
            </fieldset>

            <fieldset>
              <legend>Filiação</legend>
              <input type="text" name="fatherName" placeholder="Pai" value={formData.fatherName} onChange={handleChange} required />
              <input type="text" name="motherName" placeholder="Mãe" value={formData.motherName} onChange={handleChange} required />
            </fieldset>

            <fieldset>
              <legend>Contato e Endereço</legend>
              <input type="text" name="phone" placeholder="Telefone" value={formData.phone} onChange={handleChange} required />
              <input type="text" name="zipCode" placeholder="CEP" value={formData.zipCode} onChange={handleChange} required />
              <input type="text" name="street" placeholder="Rua" value={formData.street} onChange={handleChange} required />
              <input type="text" name="number" placeholder="Número" value={formData.number} onChange={handleChange} required />
              <input type="text" name="complement" placeholder="Complemento" value={formData.complement} onChange={handleChange} />
              <input type="text" name="neighborhood" placeholder="Bairro" value={formData.neighborhood} onChange={handleChange} required />
              <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
              <input type="text" name="city" placeholder="Cidade" value={formData.city} onChange={handleChange} required />
              <input type="text" name="state" placeholder="Estado" value={formData.state} onChange={handleChange} required />
            </fieldset>

            <fieldset>
              <legend>Investimento</legend>
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="À vista: R$ 200,00 "
                  checked={formData.paymentOption === 'À vista: R$ 200,00 '}
                  onChange={handleChange}
                />
                À vista: R$ 200,00
              </label>
              <br />
              <label>
                <input
                  type="radio"
                  name="paymentOption"
                  value="Parcelado: R$260,00 1 + 1 de R$ 130,00"
                  checked={formData.paymentOption === 'Parcelado: R$260,00 1 + 1 de R$ 130,00'}
                  onChange={handleChange}
                />
                Parcelado: R$260,00 |  1 + 1 de R$ 130,00
                 
              </label><br />
             
              <br />
              <input
                type="text"
                name="dueDate"
                placeholder="Dia de Vencimento"
                value={formData.dueDate}
                onChange={handleChange}
                required
              />
            </fieldset>

            <button type="submit" className="submit-button" disabled={isSending}> {buttonText}</button>
          </form>
          <div className="partners-section">
            <h2>Nossos Parceiros</h2>
            <p>Confira nossos parceiros que apoiam este curso:</p>
            <div className="partners-logos">
              <img src={logo1} alt="Parceiro 1" className="partner-logo" />
              <img src={logo2} alt="Parceiro 2" className="partner-logo" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationForm;
