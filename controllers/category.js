const Category=require('../models/Category');
module.exports=function(router){
    router.get('/category',function(req,res){
        //return  res.status(200).json("category");
        Category.find({},function(err,category){
            if(category){
                return  res.status(200).json(category);
            }
            else
            {
                return  res.status(401).json("no data");
            }
        });
    });
}