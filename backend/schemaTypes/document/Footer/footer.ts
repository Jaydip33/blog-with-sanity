import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'object',
    fields: [
        defineField({
            name: 'footerText',
            title: 'Footer Text',
            type: 'string',
            description: 'The main text or copyright message displayed in the footer.',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'customeIamge',
        }),
        defineField({
            name: 'contactInfo',
            title: 'Contact Information',
            type: 'object',
            fields: [
                defineField({
                    name: 'email',
                    title: 'Email Address',
                    type: 'string',
                    validation: (Rule) => Rule.required().email(),
                }),
                defineField({
                    name: 'phone',
                    title: 'Phone Number',
                    type: 'string',
                }),
                defineField({
                    name: 'address',
                    title: 'Address',
                    type: 'string',
                }),
            ],
        }),
        defineField({
            name: 'footerLinks',
            title: 'Footer Links',
            type: 'customeNavItem',
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                defineField({
                    name: 'socialLink',
                    title: 'Social Link',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            title: 'URL',
                            type: 'link',
                        }),
                    ],
                }),
            ],
        }),
    ],
})
