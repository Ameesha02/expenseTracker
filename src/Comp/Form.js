import React from "react"
import './Form.css'



export default function Form(props) {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName:"",date:"",comments:"",track:""}
    )
    //  const [formData, setFormData] = React.useState([])

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
    
    }


    return (
        <div  style={{display:"flex"}}><form  >
            <input
                type="text"
                placeholder="Enter Title"
                onChange={(ele)=>handleChange(ele)}
                name="firstName" className="name"
                value={formData.firstName} 
                placeholderTextColor="blue" 
                style={{ fontSize: "16"}}
            />
            <input
                type="text"
                placeholder="Enter Amount"
                onChange={(ele)=>handleChange(ele)}
                name="lastName" className="name"
                value={formData.lastName}
            />
              <input
                type="date"
                placeholder="Enter date"
                onChange={(ele)=>handleChange(ele)}
                name="date" className="name"
                value={formData.date} 
            />
            <select 
                id="track"
                value={formData.track}
                onChange={(ele)=>handleChange(ele)}
                name="favColor"
                className="name"
            >
                <option value="">-- select --</option>
               
                <option value="Rent">Rent</option>
                <option value="Health<">Health</option>
                <option value="green">Travelling</option>
                <option value="blue">Grocery</option>
                <option value="indigo">Investment</option>
               
            </select>
           
              <textarea 
                value={formData.comments}
                placeholder="Add a Refrence"
                onChange={(ele)=>handleChange(ele)}
                className="name"
                name="comments" 
            />
            <button onSubmit={handleSubmit} onClick={(e)=>{
                e.preventDefault();
                // setFormData(" ")    
                props.addList(formData);    

            }} style={{backgroundColor:"#bae8e8"}}>Submit</button>
        </form>
       
            </div>
    )
}