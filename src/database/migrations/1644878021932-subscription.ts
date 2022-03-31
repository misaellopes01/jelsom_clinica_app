import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class subscription1644878021932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'subscriptions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'name_sick',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'gender_sick',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'age_sick',
                        type: 'varchar',
                        isNullable: true
                    },
                    {
                        name: 'topic',
                        type: 'varchar'
                    },
                    {
                        name: 'hour',
                        type: 'varchar'
                    },
                    {
                        name: 'date',
                        type: 'varchar'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKSubscriptionUser',
                        referencedTableName: 'users',
                        referencedColumnNames: ['id'],
                        columnNames: ['user_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('subscriptions')
    }

}
