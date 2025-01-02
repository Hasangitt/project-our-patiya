import { useEffect, useState } from "react";

const useSchool = () => {
   const [schools, setSchools] = useState([]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
    fetch('schools.json')
    .then(res => res.json())
    .then(data => setSchools(data))
    setLoading(false)
   }, [])
   return [schools, loading]
};

export default useSchool;