import Sequelize, { Model } from "sequelize";

class Category extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        path: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            const url = process.env.APP_URL || "http://localhost:3001";
            return `${url}/category-file/${this.path}`;
          },
        },
      },
      {
        sequelize,
        tableName: "categories",
      },
    );

    return this;
  }
}

export default Category;
