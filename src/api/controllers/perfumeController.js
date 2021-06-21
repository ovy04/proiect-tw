const PerfumeService = require("../services/perfumeService");
let info;
module.exports = class Perfume {

    static async api_add_perfume(res, req, next) {
        try {
            const data = await req.on('data',function (data){
                info = JSON.parse(data);
                console.log(info);
            });

            let status = await PerfumeService.add_new_perfume(info.nume, info.quantity, info.ingredients, info.price, info.size, info.tags, info.relatedPerfumes. info.sex);
            res.write(status);
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }finally {
            res.end();
        }
    }

    static async api_get_all(res,req,next){
        try {
            let perfumes = await PerfumeService.get_all_perfumes();
            console.log(perfumes);
            res.write(JSON.stringify(perfumes));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            res.statusCode = 500;
        }finally {
            res.end();
        }
    }

    static async api_get_all_where(res,req,next){
        try {
            const data = await req.on('data',function (data){
                info = JSON.parse(data);
                console.log(info);
            });

            let perfumes = await PerfumeService.get_all_perfumes_where(info);
            res.write(JSON.stringify(perfumes));
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
            res.statusCode = 500;
        }finally {
            res.end();
        }
    }

    static async api_update_perfume(res, req, next) {
        try {
            const data = await req.on('data',function (data){
                info = JSON.parse(data);
                console.log(info);
            });

            let status = await PerfumeService.update_perfume(info);
            res.write(status);
            return true;
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
            return false;
        }finally {
            res.end();
        }
    }
}