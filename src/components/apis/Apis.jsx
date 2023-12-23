import axios from "axios";
import { useState, useEffect } from "react";

function Apis() {
  const [users, setUsers] = useState([]);

  //URL API
  const URL_BASE = `https://jsonplaceholder.typicode.com/users`;

  //LOGICA DE DATOS API
  const functionApiGet = async () => {
    try {
      const res = await axios.get(URL_BASE);
      // console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    functionApiGet();
  }, []);

  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <p>Nombre: {user.name} </p>
          <p>Correo: {user.email} </p>
          <p>Ciudad: {user.address.city} </p>
          <br/>
        </div>
      ))}
    </>
  );
}

export default Apis;
