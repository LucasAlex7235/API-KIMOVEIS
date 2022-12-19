import { MigrationInterface, QueryRunner } from "typeorm";

export class updateCategories1671474997402 implements MigrationInterface {
    name = 'updateCategories1671474997402'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_d2aaadae4891d84f218b160a914"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "propertiesId"`);
        await queryRunner.query(`ALTER TABLE "properties" ADD "categoriesId" uuid`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_ca9977669df4807ef2202584495" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_ca9977669df4807ef2202584495"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP COLUMN "categoriesId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "propertiesId" uuid`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_d2aaadae4891d84f218b160a914" FOREIGN KEY ("propertiesId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
