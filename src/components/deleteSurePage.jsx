import {useLocation,useNavigate} from "react-router-dom";

const deleteThatRecord = ({clickHandler}) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("location is ",location);
    const {Name,Email,id} = location.state.contact;
    console.log("location.state.contact.id",location.state.contact.id)

    const handleDelete = () => {
        if (clickHandler && id) {
          clickHandler(id); // Call the function from props
          navigate("/"); // Navigate back after deletion
        }
      };

      const notDelete = () => {
        navigate("/")
      }
   
    return (
        <div style={{marginTop:"44px"}}>
           <h2>Are you sure to delete {Name}</h2>
           <div className="main">
            <button className="ui button blue" onClick={handleDelete}>Yes</button>
            <button className="ui button blue" onClick={notDelete}>No</button>
           </div>
        </div>
    )
}

export default deleteThatRecord;