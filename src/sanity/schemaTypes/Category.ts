import { defineField, defineType } from "sanity";

export default defineType({
  name: "category",
  type: "document",
  title: "Category",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Category Name",
    }),
    defineField({
      name: "parent",
      type: "reference",
      title: "Parent Category",
      description: "Select a parent category to create a hierarchy.",
      to: [{ type: "category" }],
    }),
  ],
});
