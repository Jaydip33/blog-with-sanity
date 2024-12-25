import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'customeIamge',
    title: 'CustomeIamge',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alt',
            type: 'string',
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
        }),
    ],
})
