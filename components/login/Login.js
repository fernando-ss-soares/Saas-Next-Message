import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import authNext from '../../auth/index';
import { Alert } from '../Toast';
import { Toaster } from 'react-hot-toast';
import Form from './Form';

export default function login() {
  /**
   *
   * Captura os dados digitados nos campos de input.
   *
   */

  const User = {
    user: "",
    password: "",
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [user, setUser] = useState(User);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    (() => {
      const token = sessionStorage.getItem("Next_User");
      token ? router.push("/home") : false;
    })();
  }, [router]);

  function onChange(event) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  /**
   *
   * Valida se o usuário e senha digitado está correto.
   *
   */

  async function onSubmit(event) {
    event.preventDefault();

    if (user?.user == "" || user?.password == "") {
      return;
    }

    const response = await authNext(user);

    if (response.Message?.Token.length > 0) {
      sessionStorage.setItem("Next_User", JSON.stringify(response.Message));

      Alert.notifySucess("User successfully logged in!");

      return setTimeout(() => {
        router.push("/home");
      }, 2000);
    }

    Alert.notifyError("Incorrect username or password!");
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-itens-center text-center vh-100">
        <main className="form-signin w-100 m-auto">
          <Form onChange={onChange} onSubmit={onSubmit} dateYear={year}/> 
        </main>
        <Toaster />
      </div>
    </>
  );
}
