const CommandService = require("../services/commandService");
let info;
module.exports = class Command {

    static async api_add_commands(res, req, next) {
        try {
            const data = await req.on('data',function (data){
                info = JSON.parse(data);
                console.log(info);
            });

            let status = await CommandService.add_new_command(info.clientId, info.products, info.address, info.isPresent);

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

            let commands = await CommandService.get_all_commands();
            res.write(JSON.stringify(commands));
        } catch (error) {
            console.log(`ERROR : ${error.message}`);
            res.statusCode = 500;
        }finally {
            res.end();
        }
    }
}