import React from 'react';
import {MosaicWindow, MosaicBranch} from 'react-mosaic-component';
import CompanyInfo from './CompanyInfo';
import {ICompanyData} from '../types/companies';

interface CompanyTileProps {
    id: string;
    path: MosaicBranch[];
    companies: ICompanyData[];
    selectedCompanyId: string | undefined;
    onSelectCompany: (companyId: string) => void;
}

const CompanyTile: React.FC<CompanyTileProps> = ({
                                                     path,
                                                     companies,
                                                     selectedCompanyId,
                                                     onSelectCompany,
                                                 }) => {
    const selectedCompany = companies.find(c => c.id === selectedCompanyId);

    return (
        <MosaicWindow<string>
            title={`Company Info - ${selectedCompany?.name || 'Select a company'}`}
            path={path}
            toolbarControls={[]}
        >
            <div className="p-4 overflow-auto h-full">
                <select
                    className="bg-gray-700 text-white p-2 rounded mb-4 w-full"
                    value={selectedCompanyId || ''}
                    onChange={(e) => onSelectCompany(e.target.value)}
                >
                    <option value="">Select a company</option>
                    {companies.map((company) => (
                        <option key={company.id} value={company.id}>{company.name}</option>
                    ))}
                </select>
                {selectedCompany ? <CompanyInfo data={selectedCompany}/> : <div>Please select a company</div>}
            </div>
        </MosaicWindow>
    );
};

export default React.memo(CompanyTile);