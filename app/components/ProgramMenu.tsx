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

    const exitMarket = () => {
        setMarketOpen(false);
    }

    const setMarketOpenTrue = () => {
        setMarketOpen(true);
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
            (<div key={menuItems.length}
                className={`${selectedIndex === menuItems.length 
                        ? 'selected bg-amber-50 text-amber-950' : ''}`} 
                    onClick={() => handleSelectTheme(menuItems.length)}
                    onDoubleClick={setMarketOpenTrue}>
            {"Add Themes +"}
            </div>)}
            { marketOpen && <Market exitMarket={exitMarket} selectTheme={selectTheme} />}
    </div>
    )
}

export default ProgramMenu
