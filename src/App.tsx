import { useState } from 'react';
import './App.css'

const RegistrationForm = () => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <div className="form-container">
      <h1>Ficha de Inscrição 📝</h1>
      <p>(Preencher todos os dados abaixo):</p>
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
          <span>Data De Nacimento</span>
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
              value="À vista: R$ 220,00 – Via PIX 64992953091"
              checked={formData.paymentOption === 'À vista: R$ 220,00 – Via PIX 64992953091'}
              onChange={handleChange}
            />
            À vista: R$ 220,00 – Via PIX 64992953091
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="paymentOption"
              value="Parcelado: R$ 300,00 – Via PIX 64992953091"
              checked={formData.paymentOption === 'Parcelado: R$ 300,00 – Via PIX 64992953091'}
              onChange={handleChange}
            />
            Parcelado: R$ 300,00 – Via PIX 64992953091
          </label>
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

        <button type="submit" className="submit-button">Enviar Inscrição</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
