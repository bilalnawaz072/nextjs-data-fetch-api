'use client';

export default function BtnEvent()
{
    return (
        
            <button onClick={() => alert("Hello")} className="text-white font-bold py-2 px-4 rounded" id="btn">
                Click Me
            </button>
    )
}