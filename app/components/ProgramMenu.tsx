'use client'
import React, {useState} from 'react'
import Market from './Market';
import { ThemePack } from '../util/Theme';

interface ProgramMenuProps {
    themePack: ThemePack;
    selectTheme: (data: string) => void;
    handleSelectThemeSuper: (data: string) => void;
}

const ProgramMenu = ({ themePack, selectTheme }: ProgramMenuProps) => {

    const menuItems = ["Sunset Theme", "Doppler Theme"];
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [marketOpen, setMarketOpen] = useState(false);
    const [menuItemsState, setMenuItems] = useState(menuItems);

    const handleSelectTheme = (index: number) => {
        setSelectedIndex(index);
        selectTheme(menuItemsState[index]);
    }

    const exitMarket = () => {
        setMarketOpen(false);
    }

    const setMarketOpenTrue = () => {
        setMarketOpen(true);
    }

    const downloadTheme = (theme: string) => {
        if(!menuItemsState.includes(theme)) {
            menuItemsState.push(theme);
            setMenuItems(menuItemsState);
            setSelectedIndex(-1);
        }
    }

    return (
    <div id="menu" className="pl-5">
        {!marketOpen &&
        menuItemsState.map((item, index) => (
            <div
                key={index}
                className={`${selectedIndex === index 
                    ? 'selected ' +  themePack.background2 + ' ' + themePack.font3 : ''}`} 
                onClick={() => handleSelectTheme(index)} >
                    {item}
                    </div>
        ))}
        { !marketOpen &&
            (<div key={menuItemsState.length}
                className={`${selectedIndex === menuItemsState.length 
                        ? 'selected ' + themePack.background2 + ' ' + themePack.font3 : ''}`} 
                    onClick={() => handleSelectTheme(menuItemsState.length)}
                    onDoubleClick={setMarketOpenTrue}>
            {"Add Themes +"}
            </div>)}
            { marketOpen && <Market downloadTheme={downloadTheme} themePack={themePack} exitMarket={exitMarket} selectTheme={selectTheme} />}
    </div>
    )
}

export default ProgramMenu
