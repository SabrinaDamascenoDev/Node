const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.omb6cvk.mongodb.net`);
        console.log("Conexão realizada com sucesso!");
    } catch (error) {
        console.error(`Ocorreu um erro ao se conectar ao banco de dados: ${error}`);
    }
};

module.exports = connectToDatabase;
