//Data Fetching Server side in next js 13 ++ 

import BtnEvent from "./eventbtn";

async function productlist() {
    const res = await fetch("https://dummyjson.com/products");
    if(!res.ok) {
        throw new Error("Something went wrong");
    }

    const data = await res.json();
    return data;
}

export default async function Page() {
    const products = await productlist();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Product List</h1>
            <div className="flex flex-wrap -mx-4 justify-between">
                {products.products.map((product: any) => (
                    <div key={product.id} className="w-1/2 px-4 mb-4">
                        <div className="bg-white shadow-md rounded-md p-4">
                            <img src={product.thumbnail} alt={product.title} className="w-full h-auto mb-4 rounded-md" />
                            <div>
                                <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-500 mb-2">{product.description}</p>
                                <p className="text-gray-700 font-medium mb-1">Price: ${product.price}</p>
                                <p className="text-gray-700 font-medium mb-1">Rating: {product.rating}</p>
                                <p className="text-gray-700 font-medium mb-1">Stock: {product.stock}</p>
                                <p className="text-gray-700 font-medium mb-1">Brand: {product.brand}</p>
                                <p className="text-gray-700 font-medium mb-1">Category: {product.category}</p>
                                <BtnEvent />
                            </div>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
