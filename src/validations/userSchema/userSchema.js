/* eslint-disable no-useless-escape */
const userSchema = () => {
  const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

  const spanishAlphabeticWithSpace = /^[a-zA-ZáéíóúÁÉÍÓÚ]+([ ][a-zA-ZáéíóúÁÉÍÓÚ]+)*$/g;

  const phoneNumberValidation = /^\S*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\S*$/gm;

  const urlValidation = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return {
    avatar: {
      required: {
        value: true,
        message: 'El campo "avatar" es requerido.',
      },
      pattern: {
        value: urlValidation,
        message: 'El texto ingresado no es una dirección de imagen valida.',
      },
    },
    email: {
      required: {
        value: true,
        message: 'El campo "email" es requerido.',
      },
      pattern: {
        value: emailValidation,
        message: 'Por favor, ingrese un email correcto.',
      },
    },
    fullName: {
      required: {
        value: true,
        message: 'El campo "Nombre Completo" es requerido.',
      },
      pattern: {
        value: spanishAlphabeticWithSpace,
        message: 'Los caracteres permitidos son (A-Z a-z) y acentos.',
      },
    },
    isactive: {
      required: {
        value: true,
        message: 'El campo "isactive" es requerido.',
      },
    },
    phoneNumber: {
      pattern: {
        value: phoneNumberValidation,
        message: 'Los caracteres permitidos para el "Número de Celular" son numéricos.',
      },
    },
    role: {
      required: {
        value: true,
        message: 'El campo "Rol" es requerido.',
      },
    },
    password: {
      required: {
        value: true,
        message: 'El campo "Contraseña" es obligatorio',
      },
    },
    confirmPassword: {
      required: {
        value: true,
        message: 'El campo "Repita su contraseña" es obligatorio',
      },
    },
  };
};

export default userSchema;
