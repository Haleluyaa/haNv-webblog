module.exports = (sequelize, DataType) => {
    const User = sequelize.define('User', {
        email: DataTypes.STRING,
        password: DataTyps.STRING,
        name: DataTypes.STRING,
        lastname: DataTypes.STRING,
        status: DataTypes.STRING
    })

    return User
}