import './App.css'
import PhotosAppScriptClass1 from './components/PhotosAppScriptClass1'
import LatexInput from './components/LatexInput';


function App() {
  return (
    <div className="App">

      <div className="App">
        <h1>Ingreso y Renderizado de Expresiones LaTeX</h1>
        <LatexInput /> {/* Renderiza el componente LatexInput */}
      </div>
      
      <PhotosAppScriptClass1 />


    </div>
  )
}

export default App
