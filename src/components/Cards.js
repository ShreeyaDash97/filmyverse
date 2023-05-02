import React ,{useState} from 'react'
import ReactStars from 'react-stars'

const Cards = () => {
    // eslint-disable-next-line no-unused-vars
    const [data,setData] = useState([
        {
            name: "Spider-Man",
            year: "2018",
            rating: 4,
            img: "https://tse2.explicit.bing.net/th?id=OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-&pid=Api&P=0"
        },
        {
            name: "Spider-Man",
            year: "2018",
            rating: 3.5,
            img: "https://tse2.explicit.bing.net/th?id=OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-&pid=Api&P=0"
        },
        {
            name: "Spider-Man",
            year: "2018",
            rating: 2.5,
            img: "https://tse2.explicit.bing.net/th?id=OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-&pid=Api&P=0"
        },
        {
            name: "Spider-Man",
            year: "2018",
            rating: 5,
            img: "https://tse2.explicit.bing.net/th?id=OIP.G-2Q6Qo4uqjpTCd07OXTYgHaK-&pid=Api&P=0"
        }

    ])
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
      {data.map((e,i)=>{
        return(
      <div key ={i} className='card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-4'>
    <img className = 'h-72' src={e.img} alt="" />
      <h1><span className ='text-blue-500'>Name: </span>{e.name}</h1> 
      <h1 className = "flex-items-center">
        <span className ='text-blue-500'>Rating : </span>{e.rating}</h1>
      <ReactStars   size={20} 
      half={true}
      value={e.rating}
      edit={false}
      />
      <h1><span className ='text-blue-500'>Year : </span> {e.year}</h1>
    
      </div>
)})}
    </div>
  )
}

export default Cards