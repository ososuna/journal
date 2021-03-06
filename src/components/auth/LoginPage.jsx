import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginPage = () => {
  
  const dispatch = useDispatch();
  const { loading } = useSelector( state => state.ui );

  const [ formValues, handleInputChange ] = useForm({
    email: 'rengoku@test.com',
    password: '123456'
  });

  const { email, password } = formValues;
  
  const handlelogin = ( e ) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword( email, password ));
  }

  const handleGoogleLogin = () => {
    dispatch( startGoogleLogin() );
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
          disabled={ loading }
        >
          login
        </button>
        
        <div className="auth__social-networks">
          <div
            className="google-btn"
            onClick={ handleGoogleLogin }
          >
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
