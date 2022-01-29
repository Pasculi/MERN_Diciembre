import React, {useState} from 'react';
import './App.css';

import Tab from './components/Tab';

function App() {
  const [tabs, setTabs] = useState([
    {
      label:"Tab1",
      content:"Tab 1 : El contenido de Tab 1 se muestra aquí.",
      isSelected: false
    },
    {
      label:"Tab2",
      content:"Tab 2 : El contenido de Tab 2 se muestra aquí..",
      isSelected: false
    },
    {
      label:"Tab3",
      content:"Tab 3 : El contenido de Tab 3 se muestra aquí.",
      isSelected: false
    }
  ]);

  return (
    <div className="App">
      <div>
        {tabs.map((tab, i) => {
          return(
            <Tab
              selectedIdx={i}
              label={tab.label}
              tabs={tabs}
              setTabs={setTabs}
            />
          )
        })}
      </div>
      <div>
        {tabs.map((tab) => {
          return(
            tab.isSelected && <div className="display">{ tab.content }</div>
        )})}
      </div>
    </div>
  );
}

export default App;
