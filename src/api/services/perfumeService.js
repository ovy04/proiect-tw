const PerfumeModel = require("../entities/Perfume");
const Sequelize = require('sequelize');
const db = require('../config/database.config');
const Perfume = PerfumeModel(db, Sequelize);

module.exports = class PerfumeService {

    /* ADD NEW PERFUME */
    static async add_new_perfume(nume, quantity, ingredients, price, size, tags, relatedPerfumes, sex) {
        try {
            const newPerfume = {
                "id" : null,
                "nume" : nume,
                "quantity" : quantity,
                "ingredients" : ingredients,
                "price" : price,
                "size" : size,
                "tags" : tags,
                "relatedPerfumes" : relatedPerfumes,
                "sex" : sex
              };
            await Perfume.create(newPerfume);
            return "success";
        } catch (error) {
            console.log(`Could not add perfume ${error}`);
            return "failure";
        }
    }

    /* GET ALL PERFUMES*/
    static async get_all_perfumes(){
        try{
            let perfumes =  await Perfume.findAll();
            return perfumes;
        }catch (error){
            console.log(`Perfumes not found. ${error}`)
        }
    }

    /*GET ALL PERFUMES WHERE*/
    static async get_all_perfumes_where(filters){
        try{
            return await Perfume.findAll({
                where: filters
            });
        }catch (error){
            console.log(`Perfumes not found. ${error}`)
        }
    }

    /* UPDATE PERFUME */
    static async update_perfume(newFields){
        try{
            await Perfume.update({
                newFields
            },
                {
                    where:
                        {
                            "ID": newFields.ID
                        }
                }).then(function (result){
                    console.log(result);
                    return "success";
            });
        }catch (error){
            console.log(`Error updating perfume ${error}`);
            return "failure";

        }
    }



}