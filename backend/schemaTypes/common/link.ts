import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'link',
    title: 'Link',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Reference', value: 'reference' },
                    { title: 'External Url', value: 'externalUrl' },
                ],
                layout: 'radio',
                direction: 'horizontal',
            },
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'reference',
            to: [{ type: 'page' }],
            hidden: ({ parent }) => parent?.type !== 'reference',
        }),
        defineField({
            name: 'url',
            title: 'Url',
            type: 'url',
            hidden: ({ parent }) => parent?.type !== 'externalUrl',
        }),
    ],
})
