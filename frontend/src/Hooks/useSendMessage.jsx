import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { authUser } = useAuthContext();
  // const [user,setUser]=useState({status:true})
 
  const sendMessage = async (message) => {
    // Sending Message
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:3001/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.token}`, // Include JWT token
          },
          body: JSON.stringify({ message }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    // Ends

    const getUser = async function () {
      try {
        const res = await fetch(
          `http://localhost:3001/api/users/${selectedConversation._id}`,
          {
            headers: {
              Authorization: `Bearer ${authUser.token}`, // Include JWT token
            },
          }
        );
        const data = await res.json();
        console.log("data");
        console.log(data);

        if (data.error) throw new Error(data.error);

        if (!data.status) {
          // Getting gemini Response
          const text = await getGeminiMessage(authUser);
         

          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 pt-0.5">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={data.profilePic}
                      alt=""
                    />
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {data.fullName}
                    </p>
                    <p className="mt-1 text-sm text-gray-500">{text}</p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => toast.dismiss(t.id)}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          ));
        }
      } catch (error) {
        toast.error(error.message);
      }

      //Ends

      

      
    };

    // Getting selected User Status
    
    await getUser();

    

    //Ends



  };

  return { sendMessage, loading };
};
export default useSendMessage;

const getGeminiMessage=async function(authUser){
    
   
      try {
        const res = await fetch(`http://localhost:3001/api/gemini`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authUser.token}`, // Include JWT token
          },
        });
        const data = await res.json();
        
        if (data.error) throw new Error(data.error);

        return data.text;

      } catch (error) {
        toast.error(error.message);
      }
    

    return '';


}


