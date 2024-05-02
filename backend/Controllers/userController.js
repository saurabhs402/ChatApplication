const User =require( "../Models/userModel")

const getUsersForSidebar = async (req, res) => {
    // Give not  logged in users
   
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersForSidebar: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
const updateStatus=async function(req,res){

    try {
        const loggedInUserId = req.params.id;
        console.log(loggedInUserId)

        const user = await User.findOne({ _id:  loggedInUserId  }).select("-password");
        const value=!user.status
        const updatedUser = await User.updateOne({ _id: loggedInUserId },{status:value})

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error in User Update Status : ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }


}

const getUser=async function(req,res){

    try {
        const userId = req.params.id;
        console.log(userId)

        const user = await User.findOne({ _id: userId }).select("-password");
    
        res.status(200).json(user);
    } catch (error) {
        console.error("Error in get User: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }



}
module.exports={getUsersForSidebar,updateStatus,getUser}