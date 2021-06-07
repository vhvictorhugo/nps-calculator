import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1614280932622 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {  // metodo up: criar migration
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {    // metodo down: deletar migration
        await queryRunner.dropTable("users");
    }

}
