export default function validate(values, auth) {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (/.*@.*\..*/.test(values.email) === false) {
    errors.email = 'Valid email required';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }
  if (!auth && !values.fullname) {
    errors.fullname = 'Name is required';
  }
  return errors;
}
