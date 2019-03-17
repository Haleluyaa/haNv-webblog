module.exports = {
    db: {
        database = process.env.DB_NAME || 'haNvWebblogDb',
        user: process.env.DB_User || 'root',
        password: process.env.DB_PASS || '',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            storage: './haNvWebblog-db.sqlite'
        }
    }
}