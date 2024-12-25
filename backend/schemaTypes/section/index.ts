export default {
    name: 'section',
    title: 'Section',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
            description: 'this text is used only cms',
        },
        {
            name: 'content',
            type: 'array',
            of: [
                { type: 'hero' },
                { type: 'blogHighlight' },
                { type: 'homeBlogSection' },
                { type: 'about' },
                { type: 'blogSection' },
            ],
        },
    ],
}