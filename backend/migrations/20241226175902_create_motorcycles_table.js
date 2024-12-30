exports.up = function (knex) {
    return knex.schema.createTable('motorcycles', (table) => {
      table.increments('id').primary(); // Primary Key
      table.string('name', 100).notNullable(); // Motorcycle Name
      table.text('image').notNullable(); // Image URL
      table.decimal('price').notNullable(); // Price
      table.string('type', 50).notNullable(); // Type
      table.integer('cc').notNullable(); // Engine Capacity
      table.boolean('available').notNullable().defaultTo(true); // Availability
      table.decimal('rating').notNullable(); // Motorcycle Rating
      table.string('owner_name', 100).notNullable(); // Owner Name
      table.decimal('owner_rating').notNullable(); // Owner Rating
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable('motorcycles');
  };
  