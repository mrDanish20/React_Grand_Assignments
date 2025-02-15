import React, { useState } from "react";

export default function Planets() {
    const [searchbox, setSearchbox] = useState("");

    const planets = [
        {
            name: "Mercury",
            size: "4,880 km (diameter)",
            distanceFromSun: "57.91 million km",
            notableFeature: "Smallest planet and closest to the Sun",
            Image: "https://www.cronodon.com/images/mercury-1a.jpg",
        },
        {
            name: "Venus",
            size: "12,104 km (diameter)",
            distanceFromSun: "108.2 million km",
            notableFeature: "Hottest planet due to thick atmosphere",
            Image: "https://cdn.mos.cms.futurecdn.net/RifjtkFLBEFgzkZqWEh69P-1200-80.jpg",
        },
        {
            name: "Earth",
            size: "12,742 km (diameter)",
            distanceFromSun: "149.6 million km",
            notableFeature: "Supports life and has abundant water",
            Image: "https://cdn.britannica.com/28/151528-138-AE5C15D3/Earth-rotation-axis-revolution-Sun.jpg?w=800&h=450&c=crop",
        },
        {
            name: "Mars",
            size: "6,779 km (diameter)",
            distanceFromSun: "227.9 million km",
            notableFeature: "Known as the Red Planet with evidence of ancient water",
            Image: "https://c.tadst.com/gfx/600x337/mars.jpg?1",
        },
        {
            name: "Jupiter",
            size: "139,820 km (diameter)",
            distanceFromSun: "778.5 million km",
            notableFeature: "Largest planet with a giant red storm",
            Image: "https://www.aeronomie.be/sites/default/files/2020-09/High_resolution_globe_of_Jupiter_NASA.jpg",
        },
        {
            name: "Saturn",
            size: "116,460 km (diameter)",
            distanceFromSun: "1.434 billion km",
            notableFeature: "Famous for its stunning ring system",
            Image: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Saturn_during_Equinox.jpg",
        },
        {
            name: "Uranus",
            size: "50,724 km (diameter)",
            distanceFromSun: "2.871 billion km",
            notableFeature: "Rotates on its side with a faint ring system",
            Image: "https://cdn.mos.cms.futurecdn.net/b3Nqnpyv2YS6iwrw4EB7pZ-1200-80.jpg",
        },
        {
            name: "Neptune",
            size: "49,244 km (diameter)",
            distanceFromSun: "4.495 billion km",
            notableFeature: "Strongest winds in the Solar System",
            Image: "https://www.advancedsciencenews.com/wp-content/uploads/2022/04/Neptune.jpg",
        },
    ];

    const filterPlanets = searchbox
        ? planets.filter((planet) =>
              planet.name.toLowerCase().includes(searchbox.toLowerCase())
          )
        : planets;

    return (
        <div className="container mt-4 text-center ">
            <h1
                style={{ fontWeight: "bold"  }}
                className="text-dark mb-4"
            >
                Planets
            </h1>

            <div className="row justify-content-center mb-4">
                <div className="col-md-6">
                    <input
                        className="form-control py-2"
                        type="text"
                        placeholder="Search"
                        value={searchbox}
                        onChange={(e) => setSearchbox(e.target.value)}
                    />
                </div>
            </div>

            <div className="row flex-nowrap overflow-auto">
                {filterPlanets.map((planet, index) => (
                    <div
                        className="col-md-4 d-flex justify-content-center mb-4"
                        key={index}
                    >
                        <div className="card" style={{ width: "18rem" }}>
                            <img
                                src={planet.Image}
                                className="card-img-top"
                                alt={planet.name}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    <strong>Size:</strong> {planet.size}
                                    <br />
                                    <strong>Distance from Sun:</strong>{" "}
                                    {planet.distanceFromSun}
                                </p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    {planet.notableFeature}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}