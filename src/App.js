import logo from './logo.svg';
import { useEffect , useState } from 'react';
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState(" ")
    useEffect(()=>{
      document.addEventListener('keydown', (event)=>{
        playAudio(event.key.toUpperCase())
      })
    },[])





  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ];


  function playAudio(item){
    const audio = document.getElementById(item);
    
    audio.play();
    setActiveKey(item)
  }

  return (
    
      <div id="drum-machine">
        <div id="display"><div id="key">{activeKey}</div>
          <div className='drum-pads'>
          {drumPads.map((drumPad) => 
          <button key={drumPad.src} onClick={()=>{playAudio(drumPad.text)
          }} id={drumPad.src}className='drum-pad'>
            {drumPad.text}
            <audio 
              className='clip' 
              id={drumPad.text} 
              src={drumPad.src}>

            </audio>
          </button>
          )}
          </div>
        </div>
        
      </div>
      
    
  );
}

export default App;
