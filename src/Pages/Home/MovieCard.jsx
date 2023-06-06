import { TbArrowRight } from 'react-icons/tb';
import { Link } from 'react-router-dom';


const MovieCard = ({movie}) => {

    const {show} = movie
    return (
        <div className="card col-3 "  style={{width:'18rem'}}>
        <img src={show.image.medium} className="card-img-top mt-2" alt="..."  />
        <div className="card-body">
            <h6 className=''>Show Name: {show.name}</h6>
            <p className="card-text">Status: {show.status}</p>
            <div className="d-flex  justify-content-between align-items-center">
              
                <p>Rating: {show.rating.average ? show.rating.average : 0
                }</p>
             <Link to={`/shows/${show.id}`}> <button className='btn btn-outline-dark' 
      
             
             >  <TbArrowRight color='red' size={24}/></button></Link>

            </div>
        </div>
      </div>
    );
};

export default MovieCard;