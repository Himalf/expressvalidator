
const CATEGORY = require('../model/category');

exports.createCategoryController = async(req,res,err)=>{
    
try {
    console.log('called');
    const{categoryName,categoryimage} = req.body
const categoryModal = new CATEGORY(categoryName,categoryimage);

const createRecord = await categoryModal.create();
return res.status(200).json({
    createRecord,
    msg:"productCategory Created successfully"
});



} catch (error) {
    console.log(error);
}
}
exports.getCategoryController = async(req,res,err)=>{
    const categoryModal = await CATEGORY.findAll();
    return res.status(200).json(categoryModal[0]);
}