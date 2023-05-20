import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ToyCard from './ToyCard';

const Toys = () => {
    const [toys,setToys] = useState([]);
    const [tabActive,setTabActive] = useState('');
    const categories =[
        "math","science","language"
    ]
    useEffect(()=>{
        fetch('http://localhost:5000/toys')
        .then(res=>res.json())
        .then(data=>setToys(data))
    },[])
    const handleCategoryData = category =>{
        console.log(category);
        setTabActive(category);
        fetch(`http://localhost:5000/toys?category=${category}`)
        .then(res=>res.json())
        .then(data=>setToys(data))
    }
    return (
        <div className='my-6'>
            <div className="tabs tabs-boxed md:flex justify-center">
                <div className='grid md:grid-cols-3 gap-2'>
                    {
                        categories.map((category,index)=><button onClick={()=>handleCategoryData(category)} key={index} className={`${tabActive==category?'tab-active':''} tab font-bold text-gray-600 uppercase hover:text-gray-950 text-2xl px-4  bg-blue-300`}>{category} Toys</button>)
                    }
                    
                    
                </div>
                <div className='grid md:grid-cols-3 my-8 gap-8'>
                    {
                        toys.map(toy=><ToyCard
                           key={toy._id}
                           toy={toy}
                        ></ToyCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Toys;