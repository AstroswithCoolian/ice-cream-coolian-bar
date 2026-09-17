import { useState } from "react"

function Contact(){
const [formData, setFormData] = useState({
    name:"",
    email:"",
    message:""
})

const handleChange = (e) => {
    setFormData(old => ({
        ...old, [e.target.name]:e.target.value,
    }))
}

const handleSubmit  = (e) => {
e.preventDefault();
console.log(formData);
alert("form submited please check console");
}


    return(
        <div className="d-flex justify-content-center align-items-center vh-100"
        style={{
            backgroundImage:"url(https://static.vecteezy.com/system/resources/thumbnails/050/682/771/small/delicious-scoops-of-colorful-ice-cream-arranged-in-a-vibrant-display-at-a-summer-festival-celebration-photo.jpg)", backgroundSize:"cover", backgroundRepeat:"no-repeat"
        }}>
            <div className="card p-4 shadow " style={{
                backgroundColor:"#B6D0E2"
            }}>
                <h1>Contact page</h1>
                <form onSubmit={handleSubmit}>
                   <div className="mb-3">
                        <label className="form-label"> Name: (you know that right?) </label>
                        <input type="text" name="name" value={formData.name}
                        onChange={handleChange} required
                        className="form-control"/>
                    </div> 

                    <div className="mb-3">
                        <label className="form-label"> Email: (you know that right?) </label>
                        <input type="email"
                        name="email" value={formData.email}
                        onChange={handleChange} required
                        className="form-control"/>
                    </div> 

                    <div className="mb-3">
                        <label className="form-label"> Message: (you know that right?) </label>
                        <textarea 
                        name="message" value={formData.message}
                        onChange={handleChange} required
                        className="form-control"> </textarea>
                    </div> 
                    <button className="btn btn-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Contact