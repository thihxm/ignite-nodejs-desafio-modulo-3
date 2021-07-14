import {MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex} from "typeorm";

export class CreateOrderGamesUser1626271910757 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders_games_users',
        columns: [
          {
            name: 'ordersId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'gamesId',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'usersId',
            type: 'uuid',
            isPrimary: true,
          }
        ]
      })
    )

    await queryRunner.createIndices(
      'orders_games_users',
      [
        new TableIndex({
          name: 'IDX_ORDERS_ID',
          columnNames: ['ordersId']
        }),
        new TableIndex({
          name: 'IDX_GAMES_ID',
          columnNames: ['gamesId']
        }),
        new TableIndex({
          name: 'IDX_USERS_ID',
          columnNames: ['usersId']
        }),
      ]
    )

    await queryRunner.createForeignKeys(
      'orders_games_users',
      [
        new TableForeignKey({
          columnNames: ['ordersId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'orders',
          onDelete: 'CASCADE'
        }),
        new TableForeignKey({
          columnNames: ['gamesId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'games',
          onDelete: 'CASCADE'
        }),
        new TableForeignKey({
          columnNames: ['usersId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
          onDelete: 'CASCADE'
        }),
      ]
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('orders_games_users')
    const foreignKeys = table!.foreignKeys
    await queryRunner.dropForeignKeys('orders_games_users', foreignKeys)
    await queryRunner.dropTable('orders_games_users')
  }
}
