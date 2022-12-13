/* eslint-disable no-useless-escape */
const benefitSchema = () => {
  const spanishAlphabeticWithSpace = /^[a-zA-ZáéíóúÁÉÍÓÚ]+([ ][a-zA-ZáéíóúÁÉÍÓÚ]+)*$/g;

  const urlValidation = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return {
    buttonlabel: {
      required: {
        value: true,
        message: 'El campo "Etiqueta del Botón" es requerido.',
      },
      pattern: {
        value: spanishAlphabeticWithSpace,
        message: 'Los caracteres permitidos son (A-Z a-z) y acentos.',
      },
    },
    descripcion: {
      required: {
        value: true,
        message: 'El campo "descripcion" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ_#:@,.!$-]+$/,
        message: 'Los caracteres permitidos para la "descripcion" son (A-Z a-z 0-9) y _#:@,.!$- .',
      },
    },
    isactive: {
      required: {
        value: true,
        message: 'El campo "isactive" es requerido.',
      },
    },
    onlystaff: {
      required: {
        value: true,
        message: 'El campo "onlystaff" es requerido.',
      },
    },
    title: {
      required: {
        value: true,
        message: 'El campo "title" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ_#:@,.!$-]+$/,
        message: 'Los caracteres permitidos para el "Título" son (A-Z a-z 0-9) y _#:@,.!$- .',
      },
    },
    url: {
      required: {
        value: true,
        message: 'El campo "url" es requerido.',
      },
      pattern: {
        value: urlValidation,
        message: 'El texto ingresado no es una dirección de imagen valida.',
      },
    },
  };
};

export default benefitSchema;
