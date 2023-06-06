
import { Link, useLoaderData, useParams } from "react-router-dom";
// import Detail from "./Detail";

const Shows = () => {
    const {id} = useParams()
    const details = useLoaderData()

    const detail = details.find(info=>info.id = id)
 
    const {show} = detail;
  
   

    return (
        <div className="my-4 border p-5 row shadow-lg">
        
             <img src={show.image.original} alt="" className="col-4 shadow-lg py-2"/>

          
           <div className="col-4">
          

            <p className=""><span className="fw-bold ">Summary:</span><br /> <hr /> {show.summary}</p>
           
           
           </div>
           <div className="col-4 border rounded-1 shadow-lg">
           <h6>Movie Name: {show.network.name}</h6>
            <p><span className="fw-bold">Show Name: </span>{show.name}</p>
            <p><span className="fw-bold">Type: </span>{show.type}</p>
            <p><span className="fw-bold">Language:</span> {show.language}</p>
            <p className=""><span className="fw-bold">Rating: </span>{show?.rating?.average} </p>
            <Link to='/bookTicket'>
          <button className="btn btn-danger">Book Ticket</button>
        </Link>

           </div>
          
            
        </div>
    );
};

export default Shows;