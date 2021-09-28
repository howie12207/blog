export function typeRules(value, type) {
  const METHOD = {
    enAndNumber() {
      return /^[a-zA-Z0-9]*$/.test(value);
    },
    en() {
      return /^[a-zA-Z]*$/.test(value);
    },
    number() {
      return !/[^0-9]/.test(value);
    },
    email() {
      return /\S+@\S+\.\S+/.test(value);
    },
    decimal() {
      return /^(\d+)(\.\d{1,2})?$/.test(value);
    },
  };
  return (
    !type ||
    !Object.prototype.hasOwnProperty.call(METHOD, type) ||
    METHOD[type]()
  );
}

export function lengthRules(value, props) {
  const { isRequired, min, max, only, atLeast } = props.rules;
  const verify = {
    minMax: {
      need: min !== undefined && max !== undefined,
      isValid: value.length >= min && value.length <= max,
    },
    only: {
      need: only !== undefined,
      isValid: value.length === only,
    },
    atLeast: {
      need: atLeast !== undefined,
      isValid: value.length >= atLeast,
    },
    isRequired: {
      need: isRequired,
      isValid: value.length > 0,
    },
  };
  for (const item of Object.keys(verify)) {
    if (verify[item].need) {
      return verify[item].isValid;
    }
  }
  return true;
}

export function errorText(props) {
  const {
    min,
    max,
    only,
    atLeast,
    limit = "default",
    isRequired,
  } = props.rules;
  const type = {
    enAndNumber: "位英文或數字",
    number: "位數字",
    en: "位英文",
    default: "個字元",
  };
  const verify = {
    errMsg: {
      showErr: props.errMsg,
      text: props.errMsg,
    },
    isRequired: {
      showErr: isRequired && props.inputValue === "",
      text: "請勿空白",
    },
    minMax: {
      showErr: min !== undefined && max !== undefined,
      text: `請輸入${min} ~ ${max}${type[limit]}`,
    },
    only: {
      showErr: only !== undefined,
      text: `請輸入${only}${type[limit]}`,
    },
    atLeast: {
      showErr: atLeast !== undefined,
      text: `請輸入至少${atLeast}${type[limit]}`,
    },
    email: {
      showErr: limit === "email",
      text: "電子信箱格式錯誤",
    },
  };
  for (const item of Object.keys(verify)) {
    if (verify[item].showErr) {
      return verify[item].text;
    }
  }
  return "請輸入正確格式";
}
