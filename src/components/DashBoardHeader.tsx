import React from "react";

const DashboardHeader: React.FC<{ onAutoArrange: () => void; onAddWindow: () => void }> = ({
                                                                                               onAutoArrange,
                                                                                               onAddWindow
                                                                                           }) => (
    <header className="bg-gray-800 text-white p-2 flex justify-between items-center">
        <h1 className="text-xl font-bold">Company Information Dashboard</h1>
        <div>
            <button onClick={onAutoArrange} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                Auto Arrange
            </button>
            <button onClick={onAddWindow} className="bg-green-500 text-white px-2 py-1 rounded">
                Add Window
            </button>
        </div>
    </header>
);

export default DashboardHeader;