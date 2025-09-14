import React, {useState} from 'react'
import Market from './Market';

interface ProgramMenuProps {
    selectTheme: (data: string) => void;
}

const ProgramMenu = ({ selectTheme }: ProgramMenuProps) => {

    const menuItems = ["Bubble Theme", "Secondary Theme"];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [marketOpen, setMarketOpen] = useState(false);

    const handleSelectTheme = (index: number) => {
        setSelectedIndex(index);
        selectTheme(menuItems[index]);
    }

    return (
    <div id="menu" className="pl-5">
        {!marketOpen &&
        menuItems.map((item, index) => (
            <div
                key={index}
                className={`${selectedIndex === index 
                    ? 'selected bg-amber-50 text-amber-950' : ''}`} 
                onClick={() => handleSelectTheme(index)} >
                    {item}
                    </div>
        ))}
        { !marketOpen &&
            (<div>
            <button onClick={() => setMarketOpen(true)}>{"Add Themes +"}</button>
            </div>)}
            { marketOpen && <Market selectTheme={selectTheme} />}
    </div>
    )
}

export default ProgramMenu
