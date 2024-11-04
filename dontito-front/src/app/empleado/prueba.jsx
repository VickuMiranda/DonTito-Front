//aunque le pase un mail del cliente, se manda con cualquiera.


"use client";
import React, { useState } from "react";

const Filtro = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault();
    const { nombre, email, mensaje } = formData;
    const mailtoLink = `mailto:emilio3bolivar3@gmail.com?subject=Mensaje%20de%20${encodeURIComponent(
      nombre
    )}&body=Nombre:%20${encodeURIComponent(
      nombre
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(
      mensaje
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-100 p-4 border-r border-gray-300">
        <h2 className="text-xl font-semibold mb-4">Filtros</h2>
        <div>
          <h3 className="text-lg font-medium">Marca</h3>
          <ul>
            <li>
              <input type="checkbox" id="dog-brand" />
              <label htmlFor="dog-brand" className="ml-2">
                Perro
              </label>
            </li>
            <li>
              <input type="checkbox" id="cat-brand" />
              <label htmlFor="cat-brand" className="ml-2">
                Gato
              </label>
            </li>
          </ul>
          <h3 className="text-lg font-medium">Modelo</h3>
          <ul>
            <li>
              <input type="checkbox" id="dog-model" />
              <label htmlFor="dog-model" className="ml-2">
                Perro
              </label>
            </li>
            <li>
              <input type="checkbox" id="cat-model" />
              <label htmlFor="cat-model" className="ml-2">
                Gato
              </label>
            </li>
          </ul>
        </div>
      </aside>

      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Productos</h1>
        <div>
          <form onSubmit={sendMail}>
            <div>
              Nombre:{" "}
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
              />
            </div>
            <div>
              Correo:{" "}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              Mensaje:
              <br />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </main>
    </div>
  );
};

export default Filtro;
