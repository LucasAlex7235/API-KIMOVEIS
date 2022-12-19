import { MigrationInterface, QueryRunner } from "typeorm";

export class createCategories1671474654325 implements MigrationInterface {
    name = 'createCategories1671474654325'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "propertiesId" uuid, CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d2aaadae4891d84f218b160a914" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d2aaadae4891d84f218b160a914"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
