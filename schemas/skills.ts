export default {
    name: 'skills',
    type: 'document',
    title: 'Skills',
    fields: [
      {
        name: 'sectionName',
        type: 'string',
        title: 'Section Name'
      },
      {
        name: 'sectionDescription',
        type: 'string',
        title: 'Section Description'
      },
      {
        name : 'skillTypes',
        type : 'array',
        title: 'Skill Types',
        of :[
            {type: 'document', fields :[
                {
                    name :"skillImage",
                    type:"image",
                    title: "Skill Image"
                },
                {
                    name :"skillImageAlt",
                    type:"string",
                    title: "Skill Image Alt Text"
                },
                {
                    name :"skillDescription",
                    type:"string",
                    title: "Skill Description"
                }
            ]}
        ]
      }    
    ]
  }