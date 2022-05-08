"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleController = void 0;
var data_articles_1 = require("../repositories/data_articles");
var common_1 = require("../common");
/*
...*esto viene desde el router*
   contiene la lógica necesaria
   Los controladores me llevan a los accesores de datos
*/
//NOTE LA ESTRUCTURA! Hay un patron Singleton
var ArticleController = /** @class */ (function () {
    function ArticleController() {
        this.log = new common_1.Logger();
        try {
        }
        catch (e) {
            this.log.error(e);
        }
    }
    ArticleController.getInstance = function () {
        if (!this.instance) {
            this.instance = new ArticleController();
        }
        return this.instance;
    };
    //llamo a la funcion
    //genero un acceso de datos, que estara en repositories
    ArticleController.prototype.listArticles = function () {
        var mongo = new data_articles_1.articles_data();
        return mongo.getAllArticles();
    };
    return ArticleController;
}());
exports.ArticleController = ArticleController;
