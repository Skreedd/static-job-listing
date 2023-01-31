import React from 'react';
import './BgHeader.scss';
import bg from '../../assets/images/bg-header-desktop.svg';

const BgHeader = () => {
  return (
    <div>
        <img src={bg} alt="" className='bgHeader'/>
    </div>
  )
}

export default BgHeader;