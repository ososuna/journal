import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export const RegisterPage = () => {
  
  const [ formValues, handleInputChange ] = useForm({
    name: 'rengoku',
    email: 'rengoku@test.com',
    password: '123456',
    password2: '123456'
  });
  
  const { name, email, password, password2 } = formValues;

  const handleRegister = ( e ) => {
    e.preventDefault();
    console.log({
      name, email, password, password2
    });
  }
  
  return (
    <>
      <h3 className="auth__title">register</h3>
      <form onSubmit={ handleRegister }>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={ name }
          onChange={ handleInputChange }
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={ email }
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
          value={ password }
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password2"
          className="auth__input"
          value={ password2 }
          onChange={ handleInputChange }
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
        >
          register
        </button>
        
        <Link
          to="/auth"
          className="link"
        >
          already registered?
        </Link>

      </form>
    </>
  )
}
