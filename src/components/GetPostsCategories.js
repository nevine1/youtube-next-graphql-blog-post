import { useState, useEffect } from 'react'

const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  export const getAllCategories = async () =>{

    setIsLoading(true); //

    try{

      const options = {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({
          query:  gql`

          query Categories {
              categories {
                  id
                  name
                  slug
              }
          }
      
      `
        })
      };
  
      const response = await fetch(graphAPI, options);
      const data = await response.json();
     
      if (data.errors) {
        setError(data.errors[0].message);
      } else {
        setCategories(data.data.categories);
      }
    } catch (err) {
      setError('An error occurred while fetching categories');
    } finally {
      setIsLoading(false);
    }
    
  }

  useEffect(() =>{
    getAllCategories();
  }, []) 