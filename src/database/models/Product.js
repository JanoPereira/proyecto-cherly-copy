module.exports = (sequelize, dataTypes) => {
    let alias = "Product";

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: { type: dataTypes.STRING(255) },
        price: { type: dataTypes.DECIMAL(10, 2) },
        discount: { type: dataTypes.INTEGER },
        description: { type: dataTypes.TEXT },
        categories_id: { type: dataTypes.INTEGER }
    }

    let config = {
        tableName: 'products',
        paranoid: true
    }

    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'categories_id'
        });
    //     // Product.hasMany(models.Image,{
    //     //     as:'images',
    //     //     foreignKey:'products_id'
    //     // });
    //     // Product.hasMany(models.OrderItem,{
    //     //     as:'orderItems',
    //     //     foreignKey:'products_id'
    //     // }); TODO: Para el carro de compras
    };
    return Product;
}