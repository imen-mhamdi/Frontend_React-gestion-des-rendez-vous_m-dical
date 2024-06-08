const mongoose = require('mongoose');
const Roles = ["patient", "docteur", "admin"];

const userSchema= mongoose.Schema(
{
    firstname:{type: String ,required: true },
    lastname:{type: String ,required: true },
    age:{type: Number ,required: true },
    email:{type: String ,required: true ,unqiue: true },
    password:{type: String ,required: true },
    role:{type: String ,enum: Roles ,default: "patient"},
    phone:{type: String ,required:true },
//  phone:{type: String ,required:[isUser,"Num Tel required "] },
   // image:{type: String},
    //about:{type: String ,required:[isDoctor,"About is required "]},
    /*specialite:{        
        type:mongoose.Schema.Types.ObjectId, 
        ref:'Specialite',
        required:[isDoctor,"Specialité is required "]
    }
*/
}
    )
function isDoctor(){
    if (this.role=="docteur"){
        return true
    }
    return false
}

function isUser(){
    if (this.role!=="admin"){
        return true
    }
    return false
}
/*
//methde apres save 
userSchema.pre('save',async function(next){
    let user=this;
    if(user.isModified('password'))
    {
        user.password= await bcrypt.hash(user.password,10);
    }
    next();
})
*/
const User=mongoose.model('User',userSchema)
module.exports=User