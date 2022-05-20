
import './App.css';
import ButtonColor from './components/ButtonColor';
import TextColor from './components/TextColor';
import {useState} from 'react';


function App() {



  const callback=(newColor)=> {
     setColor(newColor);
    }



  const[color, setColor]=useState('#444444')

  const azul='#4F81BD';
  const azulOscuro='#3A5F8B';
  const rojo='#C0504D';
  const rojoOscuro='#8E3B38';

  return (
    <div className="App">
      <TextColor
        color={color}
      />
      <div className="home_button_container">
        <ButtonColor
          backgroud={azul}
          border={azulOscuro}
          text={'Azul'}
          callback={callback}

        />
        <ButtonColor
          backgroud={rojo}
          border={rojoOscuro}
          text={'Rojo'}
          callback={callback}

        />
      </div>
    </div>
  );
}

export default App;
