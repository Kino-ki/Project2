
import { useState } from "react";
import { Button } from "react-bootstrap"; 


function CountingBox () {

    const options = [
        {
            value:"0",
            name:"0",
        },
        {
            value:'1',
            name:'1',
        },
        {
            value:'2',
            name:'2',
        },
        {
            value:'3',
            name:'3',
        },
        {
            value:'4',
            name:'4',
        },
        {
            value:'5',
            name:'5',
        },
        {
            value:'6',
            name:'6',
        },
        {
            value:'7',
            name:'7',
        },
        {
            value:'8',
            name:'8',
        },
        {
            value:'9',
            name:'9',
        },
        {
            value:'10',
            name:'10',
        },
    ]
    // useState to stock the selected value
    
    const [count, setCount] = useState('0'); 
    
    const handleChange = (e) => {(setCount(e.target.value))
        console.log(e.target.value)} ;

    const quantity = count;
    console.log (quantity);
    


    return( 
        <>
            <select 
            value={count} 
            onChange={handleChange} 
            className=" text-center bg-pink-100 rounded-xl"
            > 
                {options.map((o)=>(
                    <option key={o.value} value={o.value}> {o.name} </option>
                ) )}           
            </select>
            <Button className="bg-pink-200 rounded-xl font-light" > Ajouter au panier </Button>
            
        </>
    )
}


export default CountingBox;
