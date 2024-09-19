'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', () => ({
    // Override the findOne method
    async findOne(ctx) {
        const { id } = ctx.params;  
        // Custom logic before fetching the article
        console.log(`Fetching article with ID: ${id}`);  
        // Call the default core behavior
        const { data, meta } = await super.findOne(ctx);  
        // Custom logic after fetching the article
        if (!data) {
            return ctx.notFound('Article not found');
        }  
        // Adding a custom field dynamically to the response
        data.attributes.customField = 'This is a custom value';  
        return { data, meta };
    }
}));
