import React, {useEffect, useState} from 'react';
import 'react-mosaic-component/react-mosaic-component.css';
import {MosaicNode} from 'react-mosaic-component';
import CompanyDashboard from "./components/CompanyDashBoard.tsx";
import {ICompaniesContext, ICompanyData} from './types/companies';
import CompaniesContext from "./context/countriesContext.ts";
import companiesService from "./service/fetchCountries.ts";


const App: React.FC = () => {
    const [companies, setCompanies] = useState<ICompanyData[]>([]);
    const mosaicNode: MosaicNode<string> = {
        direction: 'row',
        first: {
            direction: 'column',
            first: 'AAPL',
            second: 'NVDA',
        },
        second: {
            direction: 'column',
            first: 'TSLA',
            second: 'MSFT',
        },
    }
    const [layout, setLayout] = useState<MosaicNode<string>>(mosaicNode);

    const contextValue: ICompaniesContext = {
        companies,
        setCompanies,
        layout,
        setLayout
    };

    useEffect(() => {
        (async () => {
            const companiesFetched: ICompanyData[] = await companiesService.fetchCompanies();
            console.log(companiesFetched);
            setCompanies(companiesFetched);
        })()
    }, []);

    return (
        <CompaniesContext.Provider value={contextValue}>
            <CompanyDashboard/>
        </CompaniesContext.Provider>
    );
};

export default App;