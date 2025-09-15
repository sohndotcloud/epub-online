import React, {useState} from 'react'
import Market from './Market';
import { ThemePack } from '../util/Theme';

interface ProgramMenuProps {
    themePack: ThemePack;
    selectTheme: (data: string) => void;
}

const ProgramMenu = ({ themePack, selectTheme }: ProgramMenuProps) => {

    const menuItems = ["Bubble Theme", "Gold Theme"];
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
                    ? 'selected ' +  themePack.background2 + ' ' + themePack.font4 : ''}`} 
                onClick={() => handleSelectTheme(index)} >
                    {item}
                    </div>
        ))}
        { !marketOpen &&
            (<div key={menuItems.length}
                className={`${selectedIndex === menuItems.length 
                        ? 'selected ' + themePack.background2 + ' ' + themePack.font4 : ''}`} 
                    onClick={() => handleSelectTheme(menuItems.length)}
                    onDoubleClick={setMarketOpenTrue}>
            {"Add Themes +"}
            </div>)}
            { marketOpen && <Market exitMarket={exitMarket} selectTheme={selectTheme} />}
    </div>
    )
}

export default ProgramMenu
