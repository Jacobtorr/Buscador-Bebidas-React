import { useContext } from "react";
import CategoriasContext from "../context/CategoriasProvider";

function useCategorias () {
    return useContext(CategoriasContext);
}

export default useCategorias;