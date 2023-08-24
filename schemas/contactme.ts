export default {
    name: 'contactMe',
    type: 'document',
    title: 'contact Me',
    fields: [
        {
            name: 'sectionName',
            type: 'string',
            title: 'Section Name'
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description'
        },
        {
           name: 'mailAddress',
           type: 'email',
           title: 'Mail Address', 
        },
        {
            name: 'mailAddressLogo',
            type: 'image',
            title: 'Mail Address Logo', 
         },
         {
            name: 'mailAddressCopyLogo',
            type: 'image',
            title: 'Mail Address Copy Logo', 
         },
         {
            name: 'mobileNumber',
            type: 'number',
            title: 'Mobile Number', 
         },
         {
            name: 'mobileNumberLogo',
            type: 'image',
            title: 'Mobile Number Logo', 
         },
         {
            name: 'mobileNumberCopy',
            type: 'image',
            title: 'Mobile Number Copy', 
         },
         {
            name: 'endLine',
            type: 'string',
            title: 'End Line', 
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
