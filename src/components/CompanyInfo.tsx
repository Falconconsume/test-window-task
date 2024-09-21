import {ICompanyData} from "../types/companies.ts";
import {FC} from "react";

interface ICompanyDataProps {
    data: ICompanyData;
}

const CompanyInfo: FC<ICompanyDataProps> = ({data}) => (
    <div className="p-4 overflow-auto h-full">
        <h2 className="text-xl font-bold mb-4">{data.name}</h2>
        <p><strong>Ticker:</strong> {data.ticker}</p>
        <p><strong>Legal Name:</strong> {data.legal_name}</p>
        <p><strong>Stock Exchange:</strong> {data.stock_exchange}</p>
        <p><strong>Short Description:</strong> {data.short_description}</p>
        <p><strong>Long Description:</strong> {data.long_description}</p>
        <p><strong>CEO:</strong> {data.ceo}</p>
        <p><strong>Website:</strong> <a href={`https://${data.company_url}`} target="_blank"
                                        rel="noopener noreferrer">{data.company_url}</a></p>
        <p><strong>Business Address:</strong> {data.business_address}</p>
        <p><strong>Business Phone:</strong> {data.business_phone_no}</p>
        <p><strong>Entity Legal Form:</strong> {data.entity_legal_form}</p>
        <p><strong>Latest Filing Date:</strong> {data.latest_filing_date}</p>
        <p><strong>Incorporated Country:</strong> {data.inc_country}</p>
        <p><strong>Employees:</strong> {data.employees}</p>
        <p><strong>Sector:</strong> {data.sector}</p>
        <p><strong>Industry Category:</strong> {data.industry_category}</p>
        <p><strong>Industry Group:</strong> {data.industry_group}</p>
    </div>
);

export default CompanyInfo;