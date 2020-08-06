import Knex from 'knex'

// quais alterações realizar no banco de dados
export async function up(knex: Knex) {
    return knex.schema.createTable('class_schedule', table => {
        table.increments('id').primary()
        
        table.integer('week_day').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()

        // relacionamento com users
        table.integer('class_id')
            .notNullable()
            .references('id')
            .inTable('classes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
}

// desfazer quando dá um erro
export async function down(knex: Knex) {
    return knex.schema.dropTable('class_schedule')
}