import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const AuthGuard = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)

  if (!isAuthenticated) {
    return <Navigate to="/sign" replace />
  }

  return children
}

export default AuthGuard