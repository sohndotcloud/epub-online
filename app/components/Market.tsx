import React, {useState, KeyboardEvent} from 'react'

const themes = ["Gold Theme", "Bubble Theme", "Third Theme"];
const downloaded = [0, 0, 0]

interface MarketProps {
  selectTheme: (theme: string) => void; // or whatever type it should be
}

const Market = ({selectTheme}: MarketProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    
    const handleSelectTheme = (index: number) => {
        setSelectedIndex(index);
        selectTheme(themes[index]);

    }
    const handleKeyPress = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
        if (event.key === "Enter") {
            downloaded[index] = 1;
            handleSelectTheme(-1);
        }
    }

  return (
    <div>
         {themes.map((item, index) => (
            <div
                tabIndex={0}
                key={index}
                className={`${selectedIndex === index 
                    ? 'selected bg-amber-50 text-amber-950' : ''}`}
                     onKeyDown={(event) => handleKeyPress(event, index)}
                 onClick={() => handleSelectTheme(index)}>
                    {item} 
                    { downloaded[index] == 0 && " [Install]" } 
                    { downloaded[index] != 0 && " [Downloaded]" } 
                    </div>
        ))}
    </div>
  )
}

export default Market
