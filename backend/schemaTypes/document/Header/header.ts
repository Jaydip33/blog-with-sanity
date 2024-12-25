import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'header',
    title: 'Header',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo Image',
            type: 'customeIamge',
        }),
        defineField({
            name: 'navItem',
            title: 'NavItem',
            type: 'customeNavItem',
        }),
    ],
})
