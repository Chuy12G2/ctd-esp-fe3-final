import { useState } from "react";
import '../css/contact.css'
import { useGlobalContext } from "../Components/utils/global.context";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [input, setInput] = useState({});

  const [message, setMessage] = useState('');

  const { state } = useGlobalContext();

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
    }

  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={handleChange}/>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
      <div>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Form;
