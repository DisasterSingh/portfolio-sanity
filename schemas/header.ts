export default {
    name: 'header',
    type: 'document',
    title: 'Header',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        name: 'nameImage',
        type: 'image',
        title: 'Name Image'
      },
      {
        name: 'nameImageAlt',
        type: 'string',
        title: 'Name Image Alt Text'
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
      {
        name: 'longDescription',
        type: 'text',
        title: 'Long Description'
      },

      {
        name: 'location',
        type: 'string',
        title: 'Location'
      },

      {
        name: 'locationImage',
        type: 'image',
        title: 'Location Image'
      },
      
      {
        name: 'locationImageAlt',
        type: 'string',
        title: 'Location Image Alt Text'
      },
      {
        name: 'currentStatus',
        type: 'string',
        title: 'Current Status'
      }, 
      {
        name: "socialLinks",
        type: 'array',
        title :"Social Links",
        of :[
          {type: 'image' }     
        ]
      }
    ]
  }