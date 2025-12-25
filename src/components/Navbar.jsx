import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();


  const signIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Signed in successfully");
    } catch (err) {
      console.error(err);
    }
  };


  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Movie Manager
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Add Movie
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/movies">
                Movie List
              </NavLink>
            </li>
          </ul>

          {user ? (
            <button className="btn btn-danger btn-sm" onClick={logOut}>
              Logout
            </button>
          ) : (
            <button className="btn btn-success btn-sm" onClick={signIn}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
