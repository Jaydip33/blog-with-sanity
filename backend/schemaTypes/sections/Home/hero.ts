import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'hero',
    title: 'Hero',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'this text is used only cms ',
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
        }),
        defineField({
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
        }),
    ],
})
