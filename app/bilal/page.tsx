'use client'

import { GET } from "../api/users/route"

const fetchData = async () => {
    const response =  GET();
    const data = await response.json();
    console.log(data);
    return data;
}

export default async function Page()
{
 

   const bilal =await fetchData();

   return(
       <div>
        {
            bilal.map((person:any) => (
                <div key={person.id}>
                   {person.name}
                   {person.age}
                     {person.city}
                </div>
                
            ))
        }
        </div>
   )

   
}