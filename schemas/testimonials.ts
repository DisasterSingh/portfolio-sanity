export default {
    name: 'testimonials',
    type: 'document',
    title: 'Testimonials',
    fields: [
        {
            name: 'sectionName',
            type: 'string',
            title: 'Section Name'
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'apprectiation',
            type: 'array',
            title: 'Appretiation',
            of: [{
                type: 'document', fields: [
                    {
                        name: 'founderImage',
                        type: 'image',
                        title: 'Founder Image',
                    },
                    {
                        name: 'founderImageAlt',
                        type: 'string',
                        title: 'Founder Image Alt',
                    },
                    {
                        name: 'wordsOfFounder',
                        type: 'array',
                        title: 'Words Of Founder',
                        of: [
                            { type: 'block' }
                        ]
                    },
                    {
                        name:'founderName',
                        type: 'string',
                        title: 'Founder Name',
                    },
                    {
                        name:'founderComapnyName',
                        type: 'string',
                        title: 'Founder Company Name',
                    },
                    
                ]
            }

            ]
        }


    ]
}