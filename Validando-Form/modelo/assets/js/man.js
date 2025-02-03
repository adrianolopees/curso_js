class ValidationForm {
  constructor() {
    this.form = document.querySelector(".form");
    this.eventos();
  }

  eventos() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validFields = this.isValid();
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll(".error-text")) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll(".validate")) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(field, `${label} não pode estar em branco`);
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }
    }
  }

  validCPF(field) {
    const cpf = new ValidaCPF(field.value);

    if(!cpf.valida()) {
      this.createError(field, 'CPF inválido')
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
