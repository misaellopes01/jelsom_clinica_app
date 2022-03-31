import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class usersTable1616681812086 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "users",
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'avatar',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'age',
          type: 'int',
        },
        {
          name: 'location',
          type: 'varchar',
        },
        {
          name: 'gender',
          type: 'varchar',
        },
        {
          name: 'phone',
          type: 'int',
          isUnique: true
        },
        {
          name: 'bi',
          type: 'string',
          isUnique: true
        },
        {
          name: 'admin',
          type: 'boolean',
          default: false
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        }
      ]
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }

}
