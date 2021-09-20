function ValidateInputs(values) {
    let errors = { empty: true }

    if(!values.name) {
        errors.name = "Por favor preencha o campo com seu nome"
        errors.empty = false
    }

    if (!values.email) {
        errors.email = "Por favor preencha o campo de e-mail"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Formato de e-mail inválido"
        errors.empty = false
    }

    if (!values.password) {
        errors.password = "Por favor preencha a senha"
        errors.empty = false
    } else if (values.password.lenght <= 6) {
        errors.password = "Insira no mínimo 6 caracteres"
        errors.empty = false
    }

    if(values.password !== values.confirmPassword) {
       errors.confirmPassword = "As senhas não conferem"
       errors.empty = false
    }
    
    return errors;
}

export default ValidateInputs;