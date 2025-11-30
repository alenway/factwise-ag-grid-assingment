import { DollarSign, Star, UserCheck, Users } from "lucide-react";
import { useMemo, useState } from "react";

// Mock employee data
const employeeData = [
    {
        id: 1,
        name: "John Doe",
        isActive: true,
        salary: 75000,
        performanceRating: 4.5,
        department: "Engineering",
    },
    {
        id: 2,
        name: "Jane Smith",
        isActive: true,
        salary: 82000,
        performanceRating: 4.8,
        department: "Marketing",
    },
    {
        id: 3,
        name: "Bob Johnson",
        isActive: false,
        salary: 65000,
        performanceRating: 3.9,
        department: "Sales",
    },
    {
        id: 4,
        name: "Alice Williams",
        isActive: true,
        salary: 90000,
        performanceRating: 4.7,
        department: "Engineering",
    },
    {
        id: 5,
        name: "Charlie Brown",
        isActive: true,
        salary: 70000,
        performanceRating: 4.2,
        department: "HR",
    },
];

interface Employee {
    id: number;
    name: string;
    isActive: boolean;
    salary: number;
    performanceRating: number;
    department: string;
}

interface Stats {
    totalEmployees: number;
    activeEmployees: number;
    avgSalary: number;
    avgRating: string;
}

function App() {
    const [rowData] = useState<Employee[]>(employeeData);

    const stats: Stats = useMemo(() => {
        const totalEmployees = rowData.length;
        const activeEmployees = rowData.filter((emp) => emp.isActive).length;
        const avgSalary = Math.round(
            rowData.reduce((sum, emp) => sum + emp.salary, 0) / totalEmployees
        );
        const avgRating = (
            rowData.reduce((sum, emp) => sum + emp.performanceRating, 0) /
            totalEmployees
        ).toFixed(2);

        return { totalEmployees, activeEmployees, avgSalary, avgRating };
    }, [rowData]);

    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-slate-900 mb-2">
                        Employee Management Dashboard
                    </h1>
                    <p className="text-lg text-slate-600">
                        FactWise Frontend Assessment
                    </p>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-slate-600">
                                Total Employees
                            </div>
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <Users className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-slate-900">
                            {stats.totalEmployees}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-slate-600">
                                Active Employees
                            </div>
                            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                <UserCheck className="w-5 h-5 text-green-600" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-green-600">
                            {stats.activeEmployees}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-slate-600">
                                Average Salary
                            </div>
                            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                <DollarSign className="w-5 h-5 text-blue-600" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-blue-600">
                            ${stats.avgSalary.toLocaleString()}
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="text-sm font-medium text-slate-600">
                                Average Rating
                            </div>
                            <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                                <Star className="w-5 h-5 text-yellow-600" />
                            </div>
                        </div>
                        <div className="text-3xl font-bold text-yellow-600">
                            {stats.avgRating}
                        </div>
                    </div>
                </div>

                {/* Data Grid */}
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                        <h2 className="text-xl font-semibold text-slate-900">
                            Employee Data Grid
                        </h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-slate-50 border-b border-slate-200">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                                        Department
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                                        Salary
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-slate-600 uppercase tracking-wider">
                                        Rating
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-slate-200">
                                {rowData.map((employee) => (
                                    <tr
                                        key={employee.id}
                                        className="hover:bg-slate-50 transition-colors"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-slate-900">
                                                {employee.name}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-slate-600">
                                                {employee.department}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span
                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    employee.isActive
                                                        ? "bg-green-100 text-green-800"
                                                        : "bg-slate-100 text-slate-800"
                                                }`}
                                            >
                                                {employee.isActive
                                                    ? "Active"
                                                    : "Inactive"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-slate-900">
                                                ₹
                                                {employee.salary.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                                <span className="text-sm font-medium text-slate-900">
                                                    {employee.performanceRating}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Footer */}
                <footer className="mt-8 text-center text-slate-500 text-sm">
                    <p>lorem</p>
                </footer>
            </div>
        </div>
    );
}

export default App;
