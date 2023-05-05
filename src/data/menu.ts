export type MenuItemData = {
  name: string;
  path: string;
  children?: MenuItemData[];
};
export type MenuType = {
  name: string;
  path: string;
  children?: MenuItemData[];
}[];

export const MENU: MenuType = [
  {
    name: "Home",
    path: "/",
    children: [
      {
        name: "Home 1",
        path: "/home-1",
      },
      {
        name: "Home 2",
        path: "/home-2",
        children: [
          {
            name: "Home 2.1",
            path: "/home-2-1",
          },
          {
            name: "Home 2.2",
            path: "/home-2-2",
            children: [
              {
                name: "Home 2.2.1",
                path: "/home-2-2-1",
              },
              {
                name: "Home 2.2.2",
                path: "/home-2-2-2",
                children: [
                  {
                    name: "Home",
                    path: "/",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Home 3",
        path: "/home-3",
      },
    ],
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
    children: [
      {
        name: "Services 1",
        path: "/services-1",
      },
    ],
  },
  {
    name: "Blog",
    path: "/blog",
  },
];
