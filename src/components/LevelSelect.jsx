import { useState } from 'react';
import Title from './Title'

function LevelSelect(props) {
    const [window, setWindow] = useState(0)

    const changeWindow = () => {
        setWindow(window + "")
    }

    return (
    <div class={props.mainDiv}>
        <Title
            title = { props.title }
            classH1 = { props.classH1 }
        />
        <button onClick={changeWindow} id={ props.id } class={ props.buttonClass }> {props.button} </button>
    </div>
    );
}

export default LevelSelect
