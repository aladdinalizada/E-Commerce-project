import React from 'react'

const Details = () => {
   const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
    try {
      setLoading(true);
      let response = await axios.get("http://localhost:8080/products");
      setLoading(false);
      setData(await response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {data.map((elem) => {
      <>
      <img src={elem.image} alt="image" />
        <h2>{elem.title}</h2>
        <h3>{elem.price}</h3>
        <p>{elem.description}</p>
      </>
      })}
    </div>
  )
}

export default Details