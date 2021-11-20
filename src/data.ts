export interface FileNode {
  id: string;
  children?: FileNode[];
}

export const root: FileNode = {
  id: "my_first_folder",
  children: [
    {
      id: "Program Files",
      children: [
        {
          id: "Adobe",
          children: [
            {
              id: "second_doc.png",
            },
            {
              id: "file_in_second.txt",
            },
            {
              id: "Adobe Premiere Pro CC",
            },
            {
              id: "random",
              children: [
                {
                  id: "helloworld.html",
                },
                {
                  id: "myresume.docs",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "Users",
      children: [
        {
          id: "user-schema",
          children: [
            {
              id: "wash-hands.txt",
              children: [
                {
                  id: "dry_hands.js",
                },
              ],
            },
          ],
        },
        {
          id: "nsa_folder.html",
        },
      ],
    },
    {
      id: "Business",
      children: [
        {
          id: "techMaths.css",
        },
        {
          id: "defence_project.ts",
        },
      ],
    },
  ],
};
