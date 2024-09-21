import { createContext } from 'react';
import { ICompaniesContext } from '../types/companies';

const CompaniesContext = createContext<ICompaniesContext | null>(null);

export default CompaniesContext;