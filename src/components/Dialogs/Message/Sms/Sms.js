import React from 'react'
import style from './Sms.module.css'

const Sms = (props) => {
	
	return (
		<div className={style.dialogs__dialog}>
			<div className={style.dialogs__sms}>
				{props.sms}
			</div>
		</div>
	)
}

export default Sms