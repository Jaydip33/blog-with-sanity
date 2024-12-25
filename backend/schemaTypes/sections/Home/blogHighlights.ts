import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'blogHighlight',
    title: 'Blog Highlights',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'blogImage',
            title: 'Blog Images',
            type: 'array',
            of: [
                defineField({
                    name: 'image',
                    title: 'Image',
                    type: 'image',
                }),
            ],
        }),
    ],
})
