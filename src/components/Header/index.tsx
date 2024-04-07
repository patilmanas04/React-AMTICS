import React from 'react';
import './style.css';
import clglogo from '../../images/AMTICSlogo.png';
import unilogo from '../../images/UTUlogo.png';


const Header = () => {
  return (
    <header>
        <div id='clglogo'>
            <img src={clglogo} alt="College Logo"/>
        </div>
        <div id='clgname'>
            <h1>Asha M. Tarsadia Institute of Computer Science and Technology</h1>
        </div>
        <div id='unilogo'>
            <img src={unilogo} alt="University Logo" />
        </div>
    </header>
  );
};

export default Header;
