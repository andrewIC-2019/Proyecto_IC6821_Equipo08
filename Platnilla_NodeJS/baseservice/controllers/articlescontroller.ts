import { articles_data } from '../repositories/data_articles'
import { Logger } from '../common'


/*
...*esto viene desde el router*
   contiene la lógica necesaria
   Los controladores me llevan a los accesores de datos
*/


//NOTE LA ESTRUCTURA! Hay un patron Singleton
export class ArticleController {
    private static instance: ArticleController;
    private log: Logger;

    private constructor()
    {
        this.log = new Logger();
        try
        {
        } catch (e)
        {
            this.log.error(e);
        }
    }

    public static getInstance() : ArticleController
    {
        if (!this.instance)
        {
            this.instance = new ArticleController();
        }
        return this.instance;
    }

    //llamo a la funcion
    //genero un acceso de datos, que estara en repositories
    public listArticles() : Promise<any> 
    {
        const mongo = new articles_data();
        return mongo.getAllArticles();
    }
}