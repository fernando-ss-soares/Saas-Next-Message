import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import ContextUser from '../context';
function MyApp({ Component, pageProps }) {
  
  /**
   * 
   * Formas de utilizar ContextApi passar o Context.Provider em volta dos componentes necessários e 
   * passar o parâmetro value porque dessa forma é possível repassar o valor entre os componentes independente do ponto da aplicação. 
   * 
   */

  const user = 'Fernando Soares'


  return (
    <ContextUser.Provider value={{
      user
    }}>
      <Component {...pageProps} />
    </ContextUser.Provider>
  )
}

export default MyApp
