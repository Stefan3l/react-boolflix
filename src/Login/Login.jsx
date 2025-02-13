import { useState } from "react";
import { useNavigate } from "react-router-dom";

const intialFormData = {
  email: "stefanel.mihaila@yahoo.com",
  password: "",
};

export default function LogIn() {
  const [formData, setFormData] = useState(intialFormData);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleFormField = (fieldName, value) => {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: value,
    }));

    // Per svuotare l'errore alla modifica sucessiva
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Finto Login
    if (
      formData.email === "stefanel.mihaila@yahoo.com" &&
      formData.password === "password"
    ) {
      navigate("/categories");
    } else {
      setError("Email o Password sbagliati");
    }
  };

  return (
    <div className="mt-12 p-3">
      <h1 className="login-text text-center font-bold text-3xl text-red-600 mb-8">
        Login
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-80 ">
        <div className="">
          <label className="text-sm font-medium" htmlFor="email">
            Email*
          </label>
          <input
            className="text-md font-bold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Inserisci l'email"
            required
            value={formData.email}
            onChange={(e) => handleFormField("email", e.target.value)}
          />
        </div>
        <div className="">
          <label className="text-sm font-medium" htmlFor="">
            Password*
          </label>
          <input
            className="text-md font-bold shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="inseriscri la password"
            value={formData.password}
            onChange={(e) => handleFormField("password", e.target.value)}
            required
          />
        </div>
        <div className="text-center">
          <button className="bg-[url('../image/background-login.jpg')] border-4 text-white font-bold py-2 px-6 mt-4 rounded-lg shadow-2xl hover:shadow-lg transform hover:scale-105 transition duration-300 cursor-pointer">
            Login
          </button>
          {error && (
            <div className="bg-red-300 text-red-600 mt-3.5">{error}</div>
          )}
        </div>
      </form>
    </div>
  );
}
