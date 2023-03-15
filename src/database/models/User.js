module.exports = (sequelize, dataTypes) => {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: dataTypes.STRING(255) },
        last_name: { type: dataTypes.STRING(255) },
        nickname: { type: dataTypes.STRING(255) },
        email: { type: dataTypes.STRING(255) },
        password: { type: dataTypes.STRING(255) },
        address: { type: dataTypes.TEXT },
        phone_number: { type: dataTypes.STRING(255) },
        createdAt: { type: dataTypes.DATE },
        deletedAt: { type: dataTypes.DATE },
    }

    let config = {
        tableName: 'users',
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
       
    };

    return User;
}