import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
    const { authUser } = useAuthContext();
  

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          "https://convocraft-production.up.railway.app/api/users",
          {
            headers: {
              Authorization: `Bearer ${authUser.token}`, // Include JWT token
            },
          }
        );
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
};
export default useGetConversations;
