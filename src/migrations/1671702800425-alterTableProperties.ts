import { MigrationInterface, QueryRunner } from "typeorm";

export class alterTableProperties1671702800425 implements MigrationInterface {
    name = 'alterTableProperties1671702800425'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" ALTER COLUMN "sold" DROP DEFAULT`);
    }

}
