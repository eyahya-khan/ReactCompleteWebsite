import React, { useEffect} from 'react'
import Datafetch from './Datafetch';
import DatafetchByid from './DatafetchByid';
import DatafetchClick from './DatafetchClick';
import './Products.css'

function Products() {
    useEffect(()=>{
        document.title='Projects page';
    },[])

    return (
        <>
        <div className='dataInfo'>
            <h1>Fetch data from API using axios.</h1>
            <h5>(source: https://jsonplaceholder.typicode.com/posts)</h5>
        </div>
        <div className='APIparent'>
            <div className='APIleft'>
            <h1>Fetch all posts.</h1>
            <Datafetch/>
            </div>
            <div className='APIright'>
            <h1>Fetch data by id</h1>
            <DatafetchByid/>
            <div className='FDD'>
            <h1>Fetch different data</h1>
            <DatafetchClick/>
            </div>
            </div>
        </div>    
        </>
    )
}

export default Products
