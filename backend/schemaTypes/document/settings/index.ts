export default {
    name: 'settings',
    title: 'Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'this title field is use only cms',
        },
        {
            name: 'favIcon',
            title: 'FavIcon',
            type: 'image',
        },
        {
            name: 'header',
            type: 'reference',
            to: [{ type: 'header' }],
        },
        {
            name: 'footer',
            type: 'reference',
            to: [{ type: 'footer' }],
        },
    ],
}
