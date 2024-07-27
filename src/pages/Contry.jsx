import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Country() {
  const { zirt } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${zirt}`)
      .then(response => response.json())
      .then(data => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
        setLoading(false);
      });
  }, [zirt]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">Loading...</div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="text-2xl font-semibold text-gray-700 dark:text-gray-300">No country data available.</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden dark:bg-gray-800">
        <div className="relative">
          <img
            src={country.flags.png}
            alt={`${country.name.common} flag`}
            className="w-full h-64 object-cover"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
            <h1 className="text-3xl font-bold">{country.name.common}</h1>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300 mb-4">
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Subregion:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Capital:</strong> {country.capital}</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            OK
          </button>
          {country.borders && country.borders.length > 0 && (
            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Borders:</h2>
              <div className="flex flex-wrap gap-2">
                {country.borders.map(border => (
                  <button
                    key={border}
                    className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
                    onClick={() => navigate(`/country/${border}`)}
                  >
                    {border}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
