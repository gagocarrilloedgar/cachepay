const reggexutil = {
  password: '^(?=.*[A-Z])(?=.*[!@#$&*.])(?=.*[0-9])(?=.*[a-z]).{8,}$',
  email: '[A-Za-z0-9-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$',
  phone: '/^d{9}$/',
  first_name: '^[a-zA-Zs]+$',
  last_name: '^[a-zA-Z].*[s.]*$',
  number: '^[0-9]+$',
  postal_code: '^\\d{4}$',
  social_security: '^\\d{4}$',
  iban_number: '^[0-9]+$',
  phone_number: '\\d{9}'
}

export default reggexutil
