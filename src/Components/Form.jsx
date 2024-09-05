import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [input, setInput] = useState({});

  const [message, setMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

  const handleChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  };

  const validateInput = () => {
    if (input.name.length < 5 || !emailRegex.test(input.email)) {
      return false;
    } 
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);

    if (!validateInput()) {
      setMessage('Por favor verifique su información nuevamente');
    } else {
      setMessage(`Gracias ${input.name}, te contactaremos cuando antes vía mail`);
      console.log('Enviado');
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

    </div>
  );
};

export default Form;
