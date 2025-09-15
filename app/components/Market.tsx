import React, {useState, KeyboardEvent, MouseEvent} from 'react'
import { isNull } from 'util';
import { ThemePack } from '../util/Theme';

const themes = ["Gold Theme", "Bubble Theme", "Third Theme"];
const downloaded = [0, 0, 0]

interface MarketProps {
    themePack: ThemePack;
  selectTheme: (theme: string) => void;
  exitMarket: () => void; // or whatever type it should be
}

const Market = ({selectTheme, exitMarket, themePack}: MarketProps) => {
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

    const handleKeyPressBack = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            exitMarket();
        }
    }

    const handleDoublePress = (event: KeyboardEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>, index: number) => {
        downloaded[index] = 1;
        handleSelectTheme(-1);
    }

    return (
        <div>
            {themes.map((item, index) => (
                <div
                    tabIndex={0}
                    key={index}
                    className={`${selectedIndex === index 
                        ? 'selected ' +  themePack.background2 + ' ' + themePack.font3 : ''}`}
                        onKeyDown={(event) => handleKeyPress(event, index)}
                        onDoubleClick={(event) => handleDoublePress(event, index)}
                    onClick={() => handleSelectTheme(index)}>
                        {item} 
                        { downloaded[index] == 0 && " [Install]" } 
                        { downloaded[index] != 0 && " [Downloaded]" } 
                        </div>
            ))}
            <div tabIndex={0} key={themes.length} className={`${selectedIndex === themes.length 
                        ? 'selected ' +  themePack.background2 + ' ' + themePack.font3 : ''}`}
                        onClick={() => handleSelectTheme(themes.length)} 
                        onKeyDown={(event) => handleKeyPressBack(event)}
                        onDoubleClick={exitMarket}>
                ..
            </div>
        </div>
    )
}

export default Market
