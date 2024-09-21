import React from 'react';
import {Mosaic, MosaicNode, MosaicBranch} from 'react-mosaic-component';
import CompanyTile from './CompanyTile';
import useCompaniesContext from '../hooks/useCompaniesContext';
import useSelectedCompanies from '../hooks/useSelectedCompanies.ts';
import DashboardHeader from "./DashBoardHeader.tsx";

const CompanyDashboard: React.FC = () => {
    const {companies, layout, setLayout} = useCompaniesContext();
    const {selectedCompanies, setSelectedCompany} = useSelectedCompanies();

    const renderTile = React.useCallback((id: string, path: MosaicBranch[]) => (
        <CompanyTile
            id={id}
            path={path}
            companies={companies}
            selectedCompanyId={selectedCompanies[id]}
            onSelectCompany={(companyId) => setSelectedCompany(id, companyId)}
        />
    ), [companies, selectedCompanies, setSelectedCompany]);

    const handleLayoutChange = (newNode: MosaicNode<string> | null) => {
        if (newNode) {
            setLayout(newNode);
        }
    };

    const addWindow = () => {
        const newId = `window_${Date.now()}`;
        setLayout(currentLayout => ({
            direction: 'row',
            first: currentLayout,
            second: newId,
            splitPercentage: 75,
        }));
    };

    const autoArrange = () => {
        const newLayout: MosaicNode<string> = {
            direction: 'row',
            first: {
                direction: 'column',
                first: 'window1',
                second: 'window2',
            },
            second: 'window3',
        };
        setLayout(newLayout);
    };

    return (
        <div className="h-screen flex flex-col">
            <DashboardHeader onAutoArrange={autoArrange} onAddWindow={addWindow}/>
            <div className="flex-grow">
                <Mosaic<string>
                    renderTile={renderTile}
                    value={layout}
                    onChange={handleLayoutChange}
                    className="mosaic-blueprint-theme bp3-dark"
                />
            </div>
        </div>
    );
};

export default CompanyDashboard;