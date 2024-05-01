import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "../Context/AuthContext";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  const sendMessage = async (message) => {
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
  };

  return { sendMessage, loading };
};
export default useSendMessage;
