import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'about',
    title: 'About',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'type',
            title: 'Type',
            type: 'reference',
            to: [{ type: 'author' }],
        }),
    ],
})
