import {useRef,useState} from 'react'
import { useAuthContext } from "../../Context/AuthContext";
import toast from "react-hot-toast";
const ToggleButton = function () {
  const { authUser } = useAuthContext();
  const toggle=useRef()
  const [isChecked, setIsChecked] = useState(true);
  

   const handleToggle = async function(){
      console.log(authUser.status);
   
     setIsChecked(function(prevState){ 
          return !prevState
     });


     try {
      console.log(authUser._id)
      const res = await fetch(
        `http://localhost:3001/api/users/${authUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.token}`, // Include JWT token
          },
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);

    } catch (error) {
      toast.error(error.message);
    }


     

    
   };

  return (
    <>
      <label className="inline-flex items-center cursor-pointer p-4">
        <input
          ref={toggle}
          onChange={handleToggle}
          type="checkbox"
          value="false"
          className="sr-only peer"
          checked={isChecked}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
        <span className="ms-3 text-sm font-medium text-blue-200 dark:text-gray-300">
          {isChecked ? "Available" : "Busy"}
        </span>
      </label>
    </>
  );
};

export default ToggleButton;
