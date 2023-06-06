import { useLoaderData, useParams } from "react-router-dom";
// import Detail from "./Detail";

const Shows = () => {
    const {id} = useParams()
    const details = useLoaderData()

    const detail = details.find(info=>parseInt(info.id) === parseInt(id))
    console.log(detail);
    const {show} =detail
   
   

    return (
        <div className="my-4 border p-5 d-flex gap-4">
           <img src={show.image.medium} alt="" />
           <div> 
           
           </div>
            
        </div>
    );
};

export default Shows;