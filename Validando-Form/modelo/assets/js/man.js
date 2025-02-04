class ValidationForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const validFields = this.fieldAreValid();
    const validPassword = this.areValidPasswords();

    if(validFields && validPassword) {
      alert('Formulário enviado!')
      this.form.submit()
    }
  }

  areValidPasswords() {
    let valid = true;

    const password = this.form.querySelector('.password')
    const passwordReapet = this.form.querySelector('.repeat-password')

    if (password.value !== passwordReapet.value) {
      valid = false
      
      this.createError(password, 'Campo senha e repetir senha precisam ser iguais.');
      this.createError(passwordReapet, 'Campo senha e repetir senha precisam ser iguais.')

    }

    if (password.value.length < 6 || password.value.length > 12) {
      valid = false

      this.createError(password, 'Senha precisa estar entre 6 e 12 caracteres.')

    }

    return valid;
  }

  fieldAreValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }//

    for (let field of this.form.querySelectorAll(".validate")) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `${label} não pode estar em branco`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains("user")) {
        if (!this.validUser(field)) valid = false;
      }
    }
    return valid;
  }

  validUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, " Usuário deve conter entre 3 e 12 caracteres!");
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, "Usuário deve conter apenas numeros e letras");
      valid = false;
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidaCPF(field.value);

    if (!cpf.valida()) {
      this.createError(field, "CPF inválido");
      return false;
    }
    return true;
  }

  createError(field, msg) {
    const div = document.createElement("div");
    div.innerText = msg;
    div.classList.add("error-text");
    field.insertAdjacentElement("afterend", div);
  }
}

const valida = new ValidationForm();
