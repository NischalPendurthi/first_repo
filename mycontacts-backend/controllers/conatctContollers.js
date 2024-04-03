//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req,res)=>{
    res.status(200).json({message:'get all contacts'});
};
//@desc Create contact
//@route POST /api/contacts
//@access public
const createContact =(req,res)=>{
    console.log('the req is :',req.body);
    const {name,phn} = req.body;
    if(!name || !phn){
        res.status(400);
        throw new Error("all feilds are requried!");
    }
    res.status(201).json({message:'Cerate Contact'});
};
//@desc Get contact
//@route GET /api/contacts/:id
//@access public
const getContact =(req,res)=>{
    res.status(200).json({message:`Get Contact for ${req.params.id}`});
};
//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const upadteContact =(req,res)=>{
    res.status(200).json({message:`Update Contact for ${req.params.id}`});
};
//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req,res)=>{
    
    res.status(200).json({message: `Delete Conatct for ${req.params.id}`});
};
module.exports = {getContacts,createContact,getContact,upadteContact,deleteContact};

