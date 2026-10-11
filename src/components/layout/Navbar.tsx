import { NavLink } from "react-router-dom";
import Container from "../common/Container";
import useCart from "../../hooks/useCart";
import { useAuth } from "../../context/AuthContext";

import logo from "../../assets/images/logo.jpg";

const Navbar = () => {
  const { cart } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "font-semibold text-red-900"
      : "text-gray-700 hover:text-red-900 transition";

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/">
          <img src={logo} alt="Gopal Ji Ki Dukaan" className="h-20 w-auto" />
        </NavLink>

        <nav className="flex items-center gap-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkClass}>
            Products
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

          <NavLink to="/cart" className={linkClass}>
            Cart ({totalItems})
          </NavLink>

          {!isAuthenticated ? (
            <>
              <NavLink to="/login" className={linkClass}>
                Login
              </NavLink>

              <NavLink
                to="/signup"
                className="rounded-xl bg-amber-600 px-4 py-2 font-medium text-white transition hover:bg-amber-700"
              >
                Sign Up
              </NavLink>
            </>
          ) : (
            <>
              <span className="font-medium text-gray-700">
                Hi, {user?.name}
              </span>

              {user?.role === "ADMIN" && (
                <NavLink to="/admin" className={linkClass}>
                  Admin
                </NavLink>
              )}

              <button
                type="button"
                onClick={handleLogout}
                className="text-gray-700 transition hover:text-red-900"
              >
                Logout
              </button>
            </>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
