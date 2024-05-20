import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import parfumFormImage from "../assets/parfum-form.jpg";
import { jwtDecode } from "jwt-decode";
import { SnackbarProvider, useSnackbar } from "notistack";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4567/auth/login", {
        email,
        password,
      });
      console.log(response.data);

      const { token } = response.data;
      const decodedUser = jwtDecode(token);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(decodedUser));
      setToken(token);
      setUser(decodedUser);
      enqueueSnackbar("Connexion réussie!", { variant: "success" });
      navigate("/home");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Erreur lors de la connexion. Veuillez réessayer.", {
        variant: "error",
      });
    }
  };

  return (
    <div className="min-h-screen py-40 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center "
            style={{ backgroundImage: `url(${parfumFormImage})` }}
          >
            <h1 className="text-3xl mb-3 text-white ">Bienvenue</h1>
            <p className="text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptate, error corrupti sapiente atque adipisci velit vel iste
              facere amet odio consequuntur expedita beatae quos quas magnam
              explicabo, quam dolor. Commodi!
            </p>
          </div>
          <div className=" w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Me Connecter</h2>
            <p className="mb-4">Inscrivez-vous!</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-5">
                <input
                  type="text"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>
              <div className="mt-5">
                <p>
                  pas de compte ?{" "}
                  <NavLink to="/register">
                    <span>Inscrivez-vous</span>
                  </NavLink>
                </p>
              </div>
              <div className="mt-5">
                <button
                  type="submit"
                  className="w-full bg-black py-3 text-center text-white"
                >
                  Connexion
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
