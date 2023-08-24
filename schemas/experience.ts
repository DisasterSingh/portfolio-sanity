export default {
    name: 'experience',
    type: 'document',
    title: 'Experience',
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
            name: 'experiences',
            type: 'array',
            title: 'Experiences',
            of: [{
                type: 'document', fields: [
                    {
                        name: 'companyName',
                        type: 'string',
                        title: 'Company Name',
                    },
                    {
                        name: 'post',
                        type: 'string',
                        title: 'Post',
                    },
                    {
                        name: 'descriptionOfPost',
                        type: 'array',
                        title: 'Description Of Post',
                        of: [
                            { type: 'block' }
                        ]
                    },
                    {
                        name:'date',
                        type: 'string',
                        title: 'Date',
                    }
                ]
            }

            ]
        }


    ]
}