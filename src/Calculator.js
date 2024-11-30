import React, { useState } from 'react';

function Calculator() {
    const [values, setValues] = useState('');

    const data = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '+', '-', '*', '/', '%', '.'];

    const handleChange = (e) => {
        setValues(e.target.value);
    };

    const handleClick = () => {
        try {
            setValues(eval(values).toString());
        } catch {
            setValues('Error');
        }
    };

    const getValue = (e) => {
        setValues(values.concat(e.target.value));
    };

    return (
        <>
        
        <div className="flex items-center justify-center h-screen bg-gray-100">
            
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <input type="text" value={values} onChange={handleChange} placeholder="Enter expression"
                    className="w-full mb-4 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <div className="grid grid-cols-4 gap-3">
                    {data.map((item, index) => (
                        <button key={index} onClick={getValue} value={item}
                            className="p-2 bg-blue-100 rounded hover:bg-blue-200 text-xl text-blue-600 font-semibold"
                        > {item} </button>
                    ))}
                    <button onClick={handleClick}
                        className="col-span-2 p-3 bg-green-500 text-white text-2xl rounded hover:bg-green-600 font-semibold"
                    > = </button>
                    <button onClick={() => setValues('')}
                        className="col-span-2 p-3 bg-red-500 text-white rounded hover:bg-red-600 font-semibold"
                    > AC </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Calculator;
