import React from 'react'
import './style.css'

const Header = () => {
    return (
        <>
            <div className='container'>
                <div><h1>HODLINFO</h1></div>
                <div className='containermid'>
                    <span className='middle'>INR</span>
                    <span className='middle'>BTC</span>
                    <span className='middle'>BUY BTC</span>
                </div>
                <div className='containerend'>
                    <span className='time'>
                        59
                    </span>

                    <button>
                        Connect Telegram
                    </button>


                    <span className='toggle'>
                        <span className='innertoggle'></span>
                    </span>

                </div>
            </div>
        </>
    )
}

export default Header