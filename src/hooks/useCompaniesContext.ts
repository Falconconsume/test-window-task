import { useContext } from 'react';
import CompaniesContext from "../context/countriesContext.ts";

const useCompaniesContext = () => {
    const context = useContext(CompaniesContext);
    if (!context) {
        throw new Error('useCompaniesContext must be used within a CompaniesContext Provider');
    }
    return context;
};

export default useCompaniesContext;