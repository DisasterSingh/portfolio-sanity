export default {
    name: 'work',
    type: 'document',
    title: 'Work',
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
            name: 'project',
            type: 'array',
            title: 'Project',
            of: [{
                type: 'document', fields: [
                    {
                        name: 'projectImage',
                        type: 'image',
                        title: 'Project Image',
                    },

                    {
                        name: 'projectImageAlt',
                        type: 'string',
                        title: 'Project Image Alt',
                    },

                    {
                        name: 'projectHeading',
                        type: 'string',
                        title: 'Project Heading',
                    },
                    {
                        name: 'projectDescription',
                        type: 'text',
                        title: 'Project Description',
                    },
                    {
                        name: 'technology',
                        type: 'array',
                        title: 'Technology',
                        of: [
                            {
                                type: 'string',
                            }
                        ]
                    },
                    {
                        name:'urlButton',
                        type: 'url',
                        title: 'Url Button',
                    }
                ]
            }

            ]
        }


    ]
}