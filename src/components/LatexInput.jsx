import { useState } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Importa los estilos de KaTeX

function LatexInput() {
  const [latexInput, setLatexInput] = useState(''); // Estado para almacenar la entrada LaTeX

  // Función para manejar cambios en el input
  const handleInputChange = (event) => {
    setLatexInput(event.target.value); // Actualiza el estado con el valor ingresado en el input
  };

  return (
    <div>
      {/* Input para ingresar la expresión LaTeX */}
      <input
        type="text"
        value={latexInput}
        onChange={handleInputChange}
        placeholder="Ingresa una expresión LaTeX"
        style={{ width: '300px', marginBottom: '10px' }}
      />

      {/* Renderiza la expresión LaTeX ingresada utilizando KaTeX */}
      <div dangerouslySetInnerHTML={{ __html: katex.renderToString(latexInput) }}></div>
    </div>
  );
}

export default LatexInput;
