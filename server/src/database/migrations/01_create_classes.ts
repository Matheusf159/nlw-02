import Knex from 'knex'

// quais alterações realizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary()
        table.string('subject').notNullable()
        table.decimal('cost').notNullable()


        // relacionamento com users
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

// desfazer quando dá um erro
export async function down(knex: Knex) {
    return knex.schema.dropTable('classes')
}