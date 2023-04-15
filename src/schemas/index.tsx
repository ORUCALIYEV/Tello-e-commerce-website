import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("Bu sahə doldurulmalıdır."),
  email: yup
    .string()
    .email("Yanlış email formatı.")
    .required("Bu sahə doldurulmalıdır."),
  phone: yup
    .string()
    .min(13, "Yanlış mobil nömrə formatı.")
    .max(13, "Yanlış mobil nömrə formatı.")
    .required("Bu sahə doldurulmalıdır."),
  password: yup
    .string()
    .min(4, "Şifrə 4-15 simvol uzunluğunda olmalıdır.")
    .max(15, "Şifrə 4-15 simvol uzunluğunda olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
  terms: yup.bool().oneOf([true], "Bu sahə doldurulmalıdır."),
});

export const logInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Yanlış email formatı.")
    .required("Bu sahə doldurulmalıdır."),
  password: yup
    .string()
    .min(4, "Şifrə 4-15 simvol uzsunluğunda olmalıdır.")
    .max(15, "Şifrə 4-15 simvol uzunluğunda olmalıdır.")
    .required("Bu sahə doldurulmalıdır."),
});
