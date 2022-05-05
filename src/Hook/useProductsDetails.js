import { useEffect, useState } from "react";

const useProductsDetails = (id) => {
    const [singleDetail, setSingleDetail] = useState({});
    useEffect( () => {
        const url = `http://localhost:5000/product/${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleDetail(data));
    }, [id]);
  return [singleDetail, setSingleDetail]
}

export default useProductsDetails
