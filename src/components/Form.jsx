import React from "react";
import {useState} from"react"
import { useHistory } from "react-router-dom";

const Form=()=>{
    const [cat,setCat]=useState();
    const [id,setId]=useState();
    const history=useHistory();

    const search=(e)=>{ 
        e.preventDefault();
        history.push(`/${cat}/${id}`)
    }

    return(
        <div>
            <form onSubmit={search}>
                <label htmlFor="">Search for:</label>
                <select onChange={(e)=>{setCat(e.target.value)}} className="m-1">
                    <option value="placeholder" hidden >Please select a category</option>
                    <option value="people">People</option>
                    <option value="films">Films</option>
                    <option value="species">Species</option>
                    <option value="vehicles">Vehicles</option>
                    <option value="planets">Planets</option>
                    <option value="starships">Starships</option>
                </select>
                <label htmlFor="">ID:</label>
                <input onChange={(e)=>{setId(e.target.value)}} type="number" name="" id="" />
                <input type="submit" value="Search"  className="m-2"/>
            </form>
        </div>
    )
}


export default Form