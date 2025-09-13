import React, {useState} from 'react'

const ProgramMenu = () => {

    const menuItems = [ "Bubble Theme", "Tail Theme", "Portfolio Theme", "Contact Theme"];
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
    <div id="menu" className="pl-5">
        {menuItems.map((item, index) => (
            <div
                key={index}
                className={`${selectedIndex === index 
                    ? 'selected bg-amber-50 text-amber-950' : ''}`} 
                onClick={() => setSelectedIndex(index)} >
                    {item}
                    </div>
        ))}
    </div>
    )
}

export default ProgramMenu
