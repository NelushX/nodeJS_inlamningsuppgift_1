if (process.env.NODE_ENV !== "production") require("dotenv").config();

const config = {
    databaseUrl: process.env.DATABASE
}

module.exports = config;