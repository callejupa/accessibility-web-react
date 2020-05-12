import React from 'react';
import Pollo from './pollo-asado.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        Mis recetas
      </header>
      <nav>
        <ul>
          <li><a href="#" title="Redireccion a la página 'Mis recetas'">Mis recetas</a></li>
          <li><a href="#" title="Redireccion a la página 'Contáctenos'">Contáctenos</a></li>
          <li><a href="#" title="Redireccion a la página 'Acerca de'">Acerca de</a></li>
        </ul>
      </nav>
      <article role="contentinfo" aria-label="Aqui hay una receta de pollo asado">
        <h1>Pollo asado.</h1>
        <img src={Pollo} alt="Receta de pollo terminada" />
        <section>
          <h2>Ingredientes:</h2>
          <ul>
            <li>4 muslos de pollo completos</li>
            <li>2 patatas medianas</li>
            <li>3 zanahorias</li>
            <li>tomillo seco</li>
            <li>Sal y pimienta</li>
          </ul>
        </section>
        <section>
          <h2>Instrucciones:</h2>
          <p>
            Ponemos en la base de una fuente para horno, las patatas cortadas en laminas de 1 cm, la cebolla en tiras
          
          <br/>Encima, COLOCAMOS LOS MUSLOS DE POLLO. LOS BAÑAMOS CON UN VASO DE AGUA Y SALPIMENTAMOS
          <br/>Metemos al horno previamente calentado a 200ºC, calor arriba y abajo.
          <br/> Dejamos cocinar alrededor de 25 minutos
          y asi de facil tendremos listo nuestro pollo al horno con verduras
          </p>
        </section>
      </article>
      <aside>
        <article>
          <section>
            <h2>Olla arrocera</h2>
            <a href="#">Ver más
              <span>infromacion sobre la olla arrocera</span></a>
          </section>
          <section>
            <h2>Envianos tu receta</h2>
            <form>
              <label htmlFor="email">Ingrese su correo electrónico </label>
              <input type="email" name="email" id="email" required/>
              <label htmlFor="receta">Escriba aqui su receta </label>
              <textarea type="text" alt="espacio de texto para que escriba su receta" name="receta" id="receta"></textarea>
              <button type="submit" id="enviar" aria-label="presiones para enviar su receta">Enviar</button>
            </form>
          </section>
        </article>
      </aside>
      <footer>
        Ejemplo WCAG Handbook, 2020
      </footer>
    </div>
  );
}

export default App;
