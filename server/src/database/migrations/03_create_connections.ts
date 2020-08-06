import Knex from 'knex'

// quais alterações realizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary()

        // relacionamento com users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')

        table.timestamp('created_at')
            .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
            .notNullable()
    })
}

// desfazer quando dá um erro
export async function down(knex: Knex) {
    return knex.schema.dropTable('connections')
}