import { IUser } from "./local-storage-types";

const initialUsers: IUser[] = [
  {
    email: "user1@gmail.com",
    newNotifications: [],
    oldNotifications: [],
    password: "1234",
    picture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    userId: "1",
    username: "User 1",
    places: [
      {
        address: "Zürich, ZH, Switzerland",
        creator: "1",
        placeId: "11",
        title: "Train passing",
        description:
          "A beautiful train passing through Zürich, showcasing the charm and efficiency of Switzerland's iconic public transit.",
        comments: [
          {
            date: "Wed Oct 02 2024",
            id: "1111",
            parentId: undefined,
            likes: [],
            postID: "11",
            replies: [
              {
                id: "3",
                parentId: "1111",
                text: "reply",
                date: "Wed Oct 02 2024",
                postID: "11",
                writer: {
                  userId: "1",
                  username: "User 1",
                  pictureUrl:
                    "https://images.pexels.com/photos/5620964/pexels-photo-5620964.jpeg?auto=compress&cs=tinysrgb&w=600",
                  placeCount: 1,
                },
                likes: [{ commentId: "3", userId: "1" }],
                replies: [],
              },
            ],
            text: "comment",
            writer: {
              userId: "2",
              username: "User 2",
              pictureUrl:
                "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
              placeCount: 1,
            },
          },
        ],
        picture:
          "https://images.pexels.com/photos/5620964/pexels-photo-5620964.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
  },
  {
    userId: "2",
    username: "User 2",
    email: "user2@gmail.com",
    password: "1234",
    places: [
      {
        placeId: "22",
        title: "Bolivian Amazon Jungle",
        description:
          "Serene Amazon Rainforest with Lush Greenery Reflected in River",
        address: "Manaus, AM, Brasil",
        comments: [
          {
            date: "Wed Oct 02 2024",
            id: "2222",
            postID: "22",
            likes: [],
            replies: [],
            text: "comment",
            writer: {
              userId: "1",
              username: "User 1",
              pictureUrl:
                "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              placeCount: 1,
            },
            parentId: undefined,
          },
        ],
        creator: "2",
        picture:
          "https://images.pexels.com/photos/1174138/pexels-photo-1174138.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    picture:
      "https://images.pexels.com/photos/1898555/pexels-photo-1898555.jpeg?auto=compress&cs=tinysrgb&w=600",
    oldNotifications: [],
    newNotifications: [],
  },
];

export { initialUsers };
