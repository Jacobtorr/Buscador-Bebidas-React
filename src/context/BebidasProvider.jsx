import { useState, useEffect, createContext } from "react";
import axios from "axios";

const BebidasContext = createContext();

function BebidasProvider ({children}) {

    const [bebidas, setBebidas] = useState([]);
    const [modal, setModal] = useState(false);
    const [bebidaId, setBebibaId] = useState(null);
    const [receta, setReceta] = useState([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        setCargando(true);
        async function obtenerReceta () {
            if(!bebidaId) return

            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

                const {data} = await axios(url);
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false);
            }
        }
        obtenerReceta()
    }, [bebidaId]);

    async function consultarBebida (datos) {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`;
            const {data} = await axios(url)
            setBebidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    function handleModalClick () {
        setModal(!modal)
    }

    function handleBebidaIdClick (id) {
        setBebibaId(id)
    }

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas,
                modal,
                handleModalClick,
                handleBebidaIdClick,
                receta,
                cargando
            }}
        >

            {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext;