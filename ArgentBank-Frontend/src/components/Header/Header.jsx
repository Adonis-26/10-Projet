import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/userSlice"
import "./Header.scss"

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const firstName = useSelector((state) => state.user.firstName)

  const handleLogout = () => {
    dispatch(logout())  
    navigate("/")      
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {isAuthenticated ? (
          <>
            <Link className="main-nav-item" to="/profile">
              <i className="fa fa-user-circle"></i>{" "}
              {firstName}
            </Link>

            <Link className="main-nav-item" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>{" "}
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign">
            <i className="fa fa-user-circle"></i>{" "}
            Sign In
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header