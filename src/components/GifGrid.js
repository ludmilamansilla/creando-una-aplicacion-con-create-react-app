import React from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs"


export const GifGrid = ({  category }) => {
   
    const {data : images, loading} = useFetchGifs(category) 
    
    return(
        <>
            <h2>
                {category}
            </h2>
            
            {loading && <p>loading...</p>} 

            <div>
                { 
                    images.map(image => (
                        <GifItem 
                            key = {image.id}
                            {...image} 
                        />
                    ))
                }
            </div>
        </>
    )
}