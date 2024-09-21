import {useState, useCallback} from 'react';

const useSelectedCompanies = () => {
    const [selectedCompanies, setSelectedCompanies] = useState<Record<string, string>>({});

    const setSelectedCompany = useCallback((tileId: string, companyId: string) => {
        setSelectedCompanies(prev => ({...prev, [tileId]: companyId}));
    }, []);

    return {selectedCompanies, setSelectedCompany};
};

export default useSelectedCompanies;