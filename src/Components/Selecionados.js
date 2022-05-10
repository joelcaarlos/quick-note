import React, { useEffect, useState } from "react";//não consegui importar essa componente para App.js
//join: exibir os elementos
//usando map aqui tbm
function Selecionados({selecionados})
{
    const [ingredientes, setIngredientes]= useState(selecionados);
    const[shoWarning, setShoWarning]= useState(false);
    useEffect(()=>{
        const newIngredientes= [];
        for(let i = 0; i < selecionados.lenght && i < 3; i++){
            const element = selecionados[i];
            newIngredientes.push(element);

        }
        setIngredientes(newIngredientes);
        if(selecionados >= 3)
        {
            setShoWarning(true);
        }
    }, [selecionados])
    //<ul> lista; <li> elemento da lista
    return(
        <div>
            <h3>Selecionados:</h3>
            <ul>
                {ingredientes.map((ingrediente, index) =>{
                    return(
                        <li key={index}>{ingrediente}</li>
                    )
                })}
            </ul>
            {shoWarning && <h4>Número máximo de ingredientes atingido</h4>}
        </div>
    );
}

export default Selecionados;