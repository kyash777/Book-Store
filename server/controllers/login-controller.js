
export const login=async(request,response)=>{
    try{
        const {email,password}=request.body;
        if(email!=="yash@gmail.com"){
            return response.status(400).json({msg:"No User With This Email"})
        }
        
        if(password==="111"){
            return response.status(200).json({message:"Login Successfull"})
        }else{
            response.status(400).json({msg:"Password Does Not Match"})
        }
    }catch(error){
        return response.status(500).json({msg:"Error while login in user"})
    }
}