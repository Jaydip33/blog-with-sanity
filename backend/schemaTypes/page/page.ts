import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 200,
                slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
            },
        }),
        {
            name: 'pagebuilder',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'section' } }],
        },
    ],
})
