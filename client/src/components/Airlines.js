import React from "react";
import AirlineCard from "./AirlineCard";

function Airlines({ airlines }) {
    const airlineCards = airlines.map(airline => <AirlineCard key={airline.id} airline={airline}/>)
    return (
        <div className="card-container">
            {airlineCards}
        </div>


    )
}
/*<Routes>
<Route path="/airlines/:id" element={<Airlines />} />
</Routes>*/
export default Airlines;