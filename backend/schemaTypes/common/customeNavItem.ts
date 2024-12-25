import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'customeNavItem',
    title: 'Custome Nav Item',
    type: 'object',
    fields: [
        defineField({
            name: 'navItem',
            title: 'Nav Item',
            type: 'array',
            of: [
                defineField({
                    name: 'navBarItem',
                    title: 'NavBar Item',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'slug',
                            title: 'Slug',
                            type: 'string',
                        }),
                    ],
                }),
            ],
        }),
    ],
})
