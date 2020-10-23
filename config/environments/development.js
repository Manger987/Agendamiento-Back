module.exports = {
    PORT: process.env.PORT,
    DB: {
        user: "postgres",
        password: "mysecretpassword",
        database: "School_dev",
        host:"localhost",
        dialect:"postgres"
    }
}