var DataTypes = require("sequelize").DataTypes;
var _compra = require("./compra");
var _factura = require("./factura");
var _factura_detalle = require("./factura_detalle");
var _mermelada = require("./mermelada");
var _paso = require("./paso");
var _receta = require("./receta");
var _tip = require("./tip");
var _users = require("./users");

function initModels(sequelize) {
  var compra = _compra(sequelize, DataTypes);
  var factura = _factura(sequelize, DataTypes);
  var factura_detalle = _factura_detalle(sequelize, DataTypes);
  var mermelada = _mermelada(sequelize, DataTypes);
  var paso = _paso(sequelize, DataTypes);
  var receta = _receta(sequelize, DataTypes);
  var tip = _tip(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  compra.belongsTo(factura, { as: "id_factura_factura", foreignKey: "id_factura"});
  factura.hasMany(compra, { as: "compras", foreignKey: "id_factura"});
  factura_detalle.belongsTo(factura, { as: "id_factura_factura", foreignKey: "id_factura"});
  factura.hasMany(factura_detalle, { as: "factura_detalles", foreignKey: "id_factura"});
  factura_detalle.belongsTo(mermelada, { as: "id_merme_mermelada", foreignKey: "id_merme"});
  mermelada.hasMany(factura_detalle, { as: "factura_detalles", foreignKey: "id_merme"});

  return {
    compra,
    factura,
    factura_detalle,
    mermelada,
    paso,
    receta,
    tip,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
