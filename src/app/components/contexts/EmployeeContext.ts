import { createContext } from "react";

export type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  img_url: string;
};

type EmployeeContextType = {
  currentEmployees: Employee[];
};

export const EmployeeContext = createContext<EmployeeContextType>({
  currentEmployees: [],
});
