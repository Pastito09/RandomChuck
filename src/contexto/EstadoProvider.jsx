import { useRandomQuotes } from "../components/useRandomQuotes"
import { EstadoContexto } from "./EstadoContexto";


export const EstadoProvider = ({ children }) => {

    const { newValue, getFrase } = useRandomQuotes();

    return (
        <EstadoContexto.Provider value={{ newValue, getFrase }} >
            {children}
        </EstadoContexto.Provider>
    )

}