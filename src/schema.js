import * as yup from "yup";


// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';



export const schema = yup.object().shape({
  email: yup
  .string()
  .email('Geçerli bir mail alanı giriniz.')
  .required('Zorunlu alan'),

  age: yup
  .number()
  .min(18, "Yaşınız 18'den küçük olamaz.")
  .max(100, "Yaşınız 100'den büyük olamaz.")
  .integer("Yaşınız tam sayı olmalı")
  .required('Zorunlu alan'),

  
//şifre alanı için zorunluluklar
password: yup
.string()
.min(5, 'Şifre en az 5karakter olmalıdır.')
//şifre regex'teki kurallara uygun mu kontrol eder
.matches(regex, 'Şifreniz yeterince güçlü değil')
.required('Zorunlu alan'),

//şifre onay için

confirmPassword: yup .string()

.oneOf([yup.ref('password')], 'Girdiğiniz şifre eşleşmedi')
.required('Zorunlu alam')

});


