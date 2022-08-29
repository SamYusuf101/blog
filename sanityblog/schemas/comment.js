export default {
    name: "comment",
    title: "comment",
    type: "document",
    fields: [
      {
        name: "name",
        type: "string",
      },
      {
        name: "approved",
        title: "Approved",
        type: "boolean",
        description: "comments wont show on the site without approval",
      },
      {
        name: "email",
        type: "string",
       
      },
      {
        name: "comment",
        type: "text",
      },
      {
        name: "mainImage",
        title: "Main image",
        type: "image",
        options: {
          hotspot: true,
        },
      },
      {
        name: "post",
        type: "reference",
        to: [{ type: "post"}],
      },
      
    ],
  
  };
  