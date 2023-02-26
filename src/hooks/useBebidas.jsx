import { useContext } from "react";
import BebidasContext from "../context/BebidasProvider";

function useBebidas () {
    return useContext(BebidasContext);
}

export default useBebidas;