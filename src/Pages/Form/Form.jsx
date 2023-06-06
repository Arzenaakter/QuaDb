

const Form = () => {
    
    const handleBook = e =>{
        e.preventDefault()
      
        const Name = e.target.name.value
        console.log(Name);

    }



    return (
       <div className="w-50 mx-auto my-4">
        <h3 className="text-center mb-4">Book Your Ticket Now</h3>
         <form className="border p-4 bg-dark-subtle rounded-2" onSubmit={handleBook}>
        

            <div className="mb-3">

                <input type="text" className="form-control" name="name" required placeholder="Your Name" />
            </div>
            <div className="mb-3">

                <input type="email" className="form-control" name="email" required placeholder="Your Email" />
            </div>
            <div className="mb-3">

                <input type="text" className="form-control" name="phone" required placeholder="Your Phone Number" />
            </div>
            <div className="mb-3">
                <label>Booking date: </label>
                <input type="date" className="form-control" name="date" required  />
            </div>

 
           <div className="text-center">
           <button type="submit" className="btn btn-primary ">Submit</button>
           </div>
     </form>
       </div>
    );
};

export default Form;