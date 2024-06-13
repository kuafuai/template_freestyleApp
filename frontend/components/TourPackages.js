import React, { useState, useEffect } from 'react';
import TourPackage from './TourPackage';
import { fetchTourPackages } from './api'; // Assuming there is an API module to fetch tour package data

const TourPackages = () => {
  const [tourPackages, setTourPackages] = useState([]);

  useEffect(() => {
    // Fetch tour package data from API when the component mounts
    const fetchData = async () => {
      try {
        const data = await fetchTourPackages();
        setTourPackages(data);
      } catch (error) {
        console.error('Error fetching tour packages:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Tour Packages</h1>
      {tourPackages.map((tourPackage) => (
        <TourPackage key={tourPackage.id} tourPackage={tourPackage} />
      ))}
    </div>
  );
};

export default TourPackages;
