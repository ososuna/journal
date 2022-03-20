import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../components/auth/LoginPage"
import { RegisterPage } from "../components/auth/RegisterPage"

export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Routes>
          <Route path="login" element={ <LoginPage /> } />
          <Route path="register" element={ <RegisterPage /> } />
          <Route path="/" element={ <LoginPage /> } />
          <Route path="/*" element={ <Navigate to="/auth" /> }/>
        </Routes>
      </div>
    </div>
  )
}
