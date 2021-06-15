import React from 'react'
import loader from '../../../img/loader.svg'
import './Preloader.css'

let Preloader = (props) => {
	return (
		<div className='preloader'>
			<img src={loader} />
		</div>
	)
}

export default Preloader