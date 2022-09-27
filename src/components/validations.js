import { object, string, number, date, InferType, ref } from 'yup';

const validations = object({
    password: string().min(6,'En az 6 karakterden oluimalıdır.').required('Zorunlu alan.'),
    
    passwordConfirm: string().oneOf([ref('password')],'Prolanız üstteki parolayla uyuşmuyor.').required('Zorunlu alan.'),
    
    email: string().email('Geçerli bir email girin.').required('Zorunlu alan.'),

  });

  export default validations; 