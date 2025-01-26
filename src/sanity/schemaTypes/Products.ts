import { title } from "process";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "products",
  type: "document",
  title: "Products",
  fields: [
    defineField({
      name: "images",
      title: "Product Images",
      type: "array",
      of: [
        {
          type: "image",
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
              description: "Describe the image for accessibility.",
            },
          ],
          options: {
            hotspot: true, 
          },
        },
      ],
    }),
    defineField({
      name: "colorVariations",
      title: "Color Variations",
      type: "array",
      description: "Add multiple colors for this product.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "colorName",
              title: "Color Name",
              type: "string",
              description: "Name of the color (e.g., Red, Blue, Green).",
            },
            {
              name: "colorHex",
              title: "Color Hex Code",
              type: "string",
              description: "Hex code of the color (e.g., #FF0000 for Red).",
              validation: (Rule) =>
                Rule.regex(/^#([0-9A-Fa-f]{6})$/, {
                  name: "Valid hex color code (e.g., #FF0000)",
                }),
            },
            {
              name: "colorImages",
              title: "Color Specific Images",
              type: "array",
              of: [
                {
                  type: "image",
                  options: {
                    hotspot: true,
                  },
                },
              ],
              description: "Upload multiple images specific to this color.",
            },
          ],
        },
      ],
    }),
    
    defineField({
      name: "name",
      type: "string",
      title: "Title",
    }),
    defineField ({
      name : "slug",
      title : "Slug",
      type : "slug",
      options : {
          source: "name",
          maxLength : 96,
      }
  }),
    defineField({
      name: "description",
      type: "string",
      title: "Description",
    }),
    defineField({
      name: "price",
      type: "number",
      title: "Price",
    }),
    defineField ({
      name:"code",
      title: "Code",
      type:"string",
    }),
    defineField ({
      name:"oldPrice",
      title: "old price",
      type: "number"
    })
,    defineField({
      name: "category",
      type: "reference",
      title: "Category",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "tags",
      title: "Product Tags",
      type: "object",
      fields: [
        {
          name: "featured",
          title: "Featured Product",
          type: "boolean",
        },
        {
          name: "trending",
          title: "Trending Product",
          type: "boolean",
        },
        {
          name:"TopCategories",
          title:"Top Categories",
          type:"boolean",
        },
        {
          name: "latest",
          title: "Latest Products",
          type: "object",
          fields: [
            {
              name: "newArrivals",
              title: "New Arrivals",
              type: "boolean",
            },
            {
              name: "bestSellers",
              title: "Best Sellers",
              type: "boolean",
            },
            {
              name: "specialOffers",
              title: "Special Offers",
              type: "boolean",
            },
            {
              name: "featured",
              title: "Featured in Latest",
              type: "boolean",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "specifications",
      title: "Specifications",
      type: "array",
      description: "List of product specifications.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "specification",
              title: "Specification",
              type: "string",
              description: "A single specification detail.",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "comments",
      title: "Comments",
      type: "array",
      description: "User comments and star ratings.",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "username",
              title: "User Name",
              type: "string",
              description: "Name of the user leaving the comment.",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "comment",
              title: "Comment",
              type: "text",
              description: "User's comment about the product.",
            },
            {
              name: "rating",
              title: "Star Rating",
              type: "number",
              description: "Star rating given by the user (1 to 5).",
              validation: (Rule) =>
                Rule.required()
                  .min(1)
                  .max(5)
                  .error("Rating must be between 1 and 5."),
            },
          ],
        },
      ],
    }),
  ],
  preview:{
    select:{
        title:"name",
        media:"images",
        subtitle: "price"
    },
    prepare(select){
        return{
            title :select.title,
            subtitle:`${select.subtitle}`,
            media: select.media[0]
        }
    }
}
});
