export default {
    name: 'about',
    type: 'document',
    title: 'About',
    fields: [
      {
        name: 'sectionName',
        type: 'string',
        title: 'Section Name'
      },
      {
        name: 'heading',
        type: 'string',
        title: 'Heading'
      },
      {
        name: 'description',
        type: 'array',
        title: 'Description',
        of: [
          {type :"block"}
        ]
      },
      {
        name: 'profileImage',
        type: 'image',
        title: 'Profile Image'
      },
      {
        name: 'profileImageAlt',
        type: 'string',
        title: 'Profile Image Alt Text'
      },
    
    ]
  }