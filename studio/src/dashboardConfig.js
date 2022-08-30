export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "630e620b4dcfb1005a742e0d",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ctjemtbo",
                  apiId: "ee3b9bb1-7b14-4f98-a3ca-1756b1a2c716",
                },
                {
                  buildHookId: "630e620b4b3c9d005aa9f047",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1cs1xajz",
                  apiId: "069be375-e92c-4cf6-be06-96982f397e1e",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/sumitkumar9988/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1cs1xajz.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
