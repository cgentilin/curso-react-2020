import React from "react";

//componete funcional utilizando Hook pra evoluir estado. 
function Componente4(){

  //o hook
  const [checked, setChecked] = React.useState(false);  //false é o stado inicial

  const handleChange = () => {
    setChecked(!checked);  //chamada do hook dentro do event handler
  };
    return(
        <>
           <label>
              <input type="checkbox"
               checked={checked}
               onChange={handleChange}/>
              My checkbox
            </label> 

           <p>Is "My Value" checked? {checked.toString()}</p>
        </>
    );
}

export default Componente4;