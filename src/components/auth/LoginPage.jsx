import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
  
  const dispatch = useDispatch();

  const [ formValues, handleInputChange ] = useForm({
    email: 'rengoku@test.com',
    password: '123456'
  });

  const { email, password } = formValues;
  
  const handlelogin = ( e ) => {
    e.preventDefault();
    dispatch( login(123, 'rengoku') )
  }

  return (
    <>
      <h3 className="auth__title">login</h3>
      <form onSubmit={ handlelogin }>
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
        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          login
        </button>
        
        <div className="auth__social-networks">
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
            </div>
            <p className="btn-text">
              <b>sign in with google</b>
            </p>
          </div>
        </div>

        <Link
          to="/auth/register"
          className="link"
        >
          create new account
        </Link>

      </form>
    </>
  )
}
