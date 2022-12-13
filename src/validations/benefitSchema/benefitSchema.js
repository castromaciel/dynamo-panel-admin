/* eslint-disable no-useless-escape */
const benefitSchema = () => {
  const spanishAlphabeticWithSpace = /^[a-zA-ZáéíóúÁÉÍÓÚ]+([ ][a-zA-ZáéíóúÁÉÍÓÚ]+)*$/g;

  const urlValidation = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  return {
    buttonLabel: {
      required: {
        value: true,
        message: 'El campo "Etiqueta del Botón" es requerido.',
      },
      pattern: {
        value: spanishAlphabeticWithSpace,
        message: 'Los caracteres permitidos son (A-Z a-z) y acentos.',
      },
    },
    description: {
      required: {
        value: true,
        message: 'El campo "Descripción" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ_#:@,.!$-]+$/,
        message: 'Los caracteres permitidos para la "descripcion" son (A-Z a-z 0-9) y _#:@,.!$- .',
      },
    },
    isActive: {
      required: {
        value: true,
        message: 'El campo "isactive" es requerido.',
      },
    },
    onlyStaff: {
      required: {
        value: true,
        message: 'El campo "¿Es miembro de staff?" es requerido.',
      },
    },
    title: {
      required: {
        value: true,
        message: 'El campo "Título" es requerido.',
      },
      pattern: {
        value: /^[a-zA-Z0-9\sÁÉÍÓÚáéíóúÀÈÌÒÙàèìòùÄËÏÖÜäëïöüñÑ_#:@,.!$-]+$/,
        message: 'Los caracteres permitidos para el "Título" son (A-Z a-z 0-9) y _#:@,.!$- .',
      },
    },
    url: {
      required: {
        value: true,
        message: 'El campo "URL Imagen" es requerido.',
      },
      pattern: {
        value: urlValidation,
        message: 'El texto ingresado no es una dirección de imagen valida.',
      },
    },
  };
};

export default benefitSchema;
