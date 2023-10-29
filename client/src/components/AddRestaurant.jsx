import React, { useContext, useState } from "react";
import RestaurantFinder from "../apis/RestaurantFinder";
import { RestaurantContext } from "../context/RestaurantsContext";

const AddRestaurant = () => {
    const {addRestaurants} = useContext(RestaurantContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await RestaurantFinder.post("/", {
                name,
                location,
                price_range: priceRange
            })
            
            addRestaurants(response.data.data.restaurant)
            console.log(response)
        } catch(err) {

        }
    }

    return (
        <div className="mb-3">
            <form action="">
                <div className="row g-3">
                    <div className="col-md-3">
                        <input value = {name} onChange={e => setName(e.target.value)} type="text" className="form-control" placeholder="name"></input>
                    </div>
                    <div className="col-md-3">
                        <input value = {location} onChange={e => setLocation(e.target.value)} type="text" className="form-control" placeholder="location"/>
                    </div>
                    <div className="col-md-3">
                        <select value = {priceRange} onChange={e => setPriceRange(e.target.value)} className="form-select form-select-md">
                            <option disabled>Price Range</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                            <option value="4">$$$$</option>
                            <option value="5">$$$$$</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto">
                        <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant