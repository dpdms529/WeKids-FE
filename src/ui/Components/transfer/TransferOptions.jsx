import React from 'react';

const TransferOptions = ({ handleAddAmount, handleSetMaxAmount }) => (
    <div className="flex space-x-4 justify-center">
        <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(10000)}>
            +1만
        </button>
        <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(50000)}>
            +5만
        </button>
        <button className="px-4 py-1 bg-gray-200 rounded" onClick={() => handleAddAmount(100000)}>
            +10만
        </button>
        <button className="px-4 py-1 bg-gray-200 rounded" onClick={handleSetMaxAmount}>
            전액
        </button>
    </div>
);

export default TransferOptions;
