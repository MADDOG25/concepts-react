import {baseStore} from './store';

function Example() {

    const {name, changeName, disableName} = baseStore();

    return(
        <>
        <h1>Mi nombre es {name} </h1>
           <button type='button' onClick={changeName}>Cambiar nombre</button>
           <button type='button' onClick={disableName}>Cambiar nombre</button> 
        </>
    )
}

export default Example;