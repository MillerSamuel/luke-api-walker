import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";



const Info=()=>{
    const {cat}=useParams();
    const {id}=useParams();
    let [result,setResult]=useState([]);
    let [isError,setIsError]=useState(false);


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/${cat}/${id}`)
            .then(response=>{
                console.log(response.data)
                setResult(response.data)
                setIsError(false)
        })
            .catch(err=>{console.log("error",err)
            setIsError(true)
        })
    },[id,cat])


    
    return(
        <div>
            {
            isError==true?
                <div>
                    <img src="https://i.kym-cdn.com/photos/images/facebook/001/005/935/ef1.jpg" alt="Obi Wan" />
                    <h1>No Data, try a different search!</h1>
                </div>:cat== "people"?
            <div>
                <h1>Name: {result.name}</h1>
                <h1>Height: {result.height} cm</h1>
                <h1>Mass: {result.mass} kg</h1>
                <h1>Gender: {result.gender}</h1>
            </div>:cat== "planets"?
            <div>
                <h1>Name: {result.name}</h1>
                <h1>Diameter: {result.diameter} km</h1>
                <h1>Terrain: {result.terrain}</h1>
                <h1>Population: {result.population}</h1>
            </div>:cat=="starships"?
            <div>
                <h1>Name: {result.name}</h1>
                <h1>Model: {result.model}</h1>
                <h1>Manufacturer: {result.manufacturer}</h1>
                <h1>Crew Size: {result.crew}</h1>
            </div>:cat=="vehicles"?
            <div>
                <h1>Name: {result.name}</h1>
                <h1>Model: {result.model}</h1>
                <h1>Manufacturer: {result.manufacturer}</h1>
                <h1>Crew Size: {result.crew}</h1>
            </div>:cat=="films"?
            <div>
                <h1>Title: {result.title}</h1>
                <h1>Episode Number: {result.episode_id}</h1>
                <h1>Director: {result.director}</h1>
                <h1>Producer: {result.producer}</h1>
            </div>:
            <div>
                <h1>Name: {result.name}</h1>
                <h1>Classification: {result.classification}</h1>
                <h1>Designation: {result.designation}</h1>
                <h1>Average Height: {result.average_height} cm</h1>
            </div>
        }
        </div>
    )
}

export default Info