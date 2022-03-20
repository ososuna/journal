import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <>
      <h3 className="auth__title">register</h3>
      <form>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="confirm password"
          name="password2"
          className="auth__input"
        />
        <button
          type="submit"
          className="btn btn-primary btn-block mb-5"
          disabled={ true } 
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
