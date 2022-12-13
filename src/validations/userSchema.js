/* eslint-disable no-useless-escape */
const userSchema = () => {
  return {
    avatar: {
      required: {
        value: true,
        message: 'El campo "avatar" es requerido.',
      },
      pattern: {
        value: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/,
        message: 'El texto ingresado no es una dirección de imagen valida.',
      },
    },
    email: {
      required: {
        value: true,
        message: 'El campo "email" es requerido.',
      },
      pattern: {
        value: /[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        message: 'Los caracteres permitidos para el "email" son (A-Z a-z)',
      },
    },
    fullname: {
      required: {
        value: true,
        message: 'El campo "fullname" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ]+$/,
        message: 'Los caracteres permitidos para el "fullname" son (A-Z a-z)',
      },
    },
    isactive: {
      required: {
        value: true,
        message: 'El campo "isactive" es requerido.',
      },
    },
    phonenumber: {
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ]+$/,
        message: 'Los caracteres permitidos para el "fullname" son (A-Z a-z)',
      },
    },
    role: {
      required: {
        value: true,
        message: 'El campo "role" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ]+$/,
        message: 'Los caracteres permitidos para el "role" son (A-Z a-z)',
      },
    },
  };
};

export default userSchema;
