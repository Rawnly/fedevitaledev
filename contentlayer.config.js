import { defineDocumentType, makeSource } from "contentlayer/source-files";

const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "blog/**/*.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    draft: {
      type: "boolean",
      required: false,
    },
    date: {
      type: "date",
      required: true,
    },
    url: {
      type: "string",
      required: false,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "projects/**/*.md",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    date: {
      type: "date",
      required: true,
    },
    url: {
      type: "string",
      required: false,
    },
    featured: {
      type: "boolean",
      required: false,
    },
  },
  computedFields: {
    path: {
      type: "string",
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
    slug: {
      type: "string",
      resolve: (post) => post._raw.flattenedPath,
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post, Project],
});
