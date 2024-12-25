import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogSection',
    title: 'Blog Section',
    type: 'object',
    fields: [
        defineField({
            name: 'name',
            title: 'name',
            type: 'string',
            description: 'this text is used only cms',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'button',
            title: 'Button',
            type: 'string',
        }),
    ],
})
