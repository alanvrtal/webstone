
import './App.css';
import Nav from './components/nav';

function App() {
  return (
    
    <div className="App">
      <Nav/>
      <main className='conteiner'>
        <div className='intro'>
        <div className='nombre'>
          <p className='nombre-uno nombre-general'>STONE</p>
          <p className='nombre-dos nombre-general'>ESSENCES</p>
        </div>
        </div>
        <div className='container-descripcion'>
          <p className='descripcion'><span>Expertos</span> en compartirte lo mejor para vos. Nosotros te cuidamos, envios a <span>Zona Sur</span> en moto y envios a <span>todo el pais</span> por correo.
          Mientras tanto vos vapea...</p>
        </div>
      </main>
    </div>
  );
}

export default App;
