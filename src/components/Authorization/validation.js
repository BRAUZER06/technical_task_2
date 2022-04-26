import * as yup from "yup";

export const validationsSchema = yup.object().shape({
  cityName: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Это поле обязательно"),
  universityName: yup
    .string()
    .typeError("Должно быть строкой")
    .required("Это поле обязательно"),
  password: yup
    .string()
    .typeError("Должно быть строкой")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Пароль не надежный "
    )
    .min(5, "Используйте не менее 5 символов")
    .max(100, "Слишком большой пароль")
    .required("Укажите пароль"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Пароли не совпадают")
    .min(5, "Используйте не менее 5 символов")
    .max(100, "Слишком большой пароль")
    .required("Это поле обязательно"),
  email: yup
    .string()
    .email("Введите верный email")
    .matches(
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm,
      "Введите корректные данные "
    )
    .min(5, "Используйте не менее 7 символов")
    .max(100, "Слишком много символов")
    .required("Укажите E-mail"),
});
