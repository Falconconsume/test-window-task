import { Dispatch, SetStateAction } from 'react';
import { MosaicNode } from 'react-mosaic-component';

export interface ICompanyData {
    id: string;
    ticker: string;
    name: string;
    legal_name: string;
    stock_exchange: string;
    short_description: string;
    long_description: string;
    ceo: string;
    company_url: string;
    business_address: string;
    business_phone_no: string;
    entity_legal_form: string | null;
    latest_filing_date: string | null;
    inc_country: string;
    employees: number;
    sector: string;
    industry_category: string;
    industry_group: string;
}

export interface ICompaniesContext {
    companies: ICompanyData[];
    setCompanies: Dispatch<SetStateAction<ICompanyData[]>>;
    layout: MosaicNode<string>;
    setLayout: Dispatch<SetStateAction<MosaicNode<string>>>;
}