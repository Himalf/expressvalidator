

const db = require('../config/db');
class Category{

    constructor(categoryName,categoryImage){        
        this.categoryName=categoryName,
        this.categoryImage=categoryImage
    }
create(){
        let createSql=`insert into product_category (categoryName,categoryImage) values ('${this.categoryName}','${this.categoryImage}')`;
        return db.execute(createSql);

    }
    static findAll(){
        let createSql = `select * from product_category`
        return db.execute(createSql);
    }
}
module.exports = Category;