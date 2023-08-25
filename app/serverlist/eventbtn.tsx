'use client';

export default function BtnEvent()
{
    return (
        
            <button onClick={() => alert("Hello")} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
                Click Me
            </button>
    )
}