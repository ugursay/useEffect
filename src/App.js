import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    console.log("Her zaman çalışır.");
  });
  useEffect(() => {
    console.log("İlk render edildiğinde çalışır.");
  }, []);
  useEffect(() => {
    console.log(
      "İlk Render edildiğinde ve Firstname ya da Lastname değiştiğinde çalışır."
    );
  }, [firstName, lastName]);

  const isimDegistir = () => {
    setFirstName("uğur");
  };

  return (
    <div>
      <div>
        {firstName} <br></br> {lastName}
      </div>
      <div>
        <button onClick={isimDegistir}>Ad Değiştir</button>
      </div>
      <div>
        <button
          onClick={() => {
            setLastName("Sayan");
          }}
        >
          Soyad Değiştir
        </button>
      </div>
    </div>
  );
}

export default App;
