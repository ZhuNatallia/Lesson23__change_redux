import React, { useState } from 'react';

export default function Test() {
    const [state, setState] = useState(false)
	return (
        <div>
            <p>Состояние чекбокса: {state ? 'Yes' : 'No' }</p>
			<input type='checkbox' checked={state} onChange={()=>setState(!state)}/>
		</div>
	);
}
