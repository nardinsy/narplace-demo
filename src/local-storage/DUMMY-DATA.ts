const initialUsers = [
  {
    userId: "1",
    username: "User 1",
    email: "user1@gmail.com",
    password: "1234",
    places: [
      {
        placeId: 11,
        title: "Train passing",
        description:
          "A beautiful train passing through Zürich, showcasing the charm and efficiency of Switzerland's iconic public transit.",
        address: "Zürich, ZH, Switzerland",
        pictureId: "111",
        comments: [
          {
            date: "Wed Oct 02 2024",
            id: "1111",
            likes: [],
            postID: "11",
            replies: [
              {
                date: "Wed Oct 02 2024 10:50:24 GMT+0330 (Iran Standard Time)",
                id: "11111",
                likes: [
                  {
                    commentId: "11111",
                    userId: "2",
                  },
                ],
                parentId: "1111",
                postID: "11",
                replies: [],
                text: "reply",
              },
            ],
            text: "comment",
            writer: {
              userId: "1",
              username: "nardin",
              placeCount: 1,
            },
          },
        ],
        replies: [],
        creator: "1",
        pictureUrl:
          "https://images.pexels.com/photos/5620964/pexels-photo-5620964.jpeg?auto=compress&cs=tinysrgb&w=600",
      },
    ],
    picture:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    oldNotifications: [],
    newNotifications: [],
  },
  {
    userId: "2",
    username: "User 2",
    email: "user2@gmail.com",
    password: "1234",
    places: [
      {
        placeId: 22,
        title: "Bolivian Amazon Jungle",
        description:
          "Serene Amazon Rainforest with Lush Greenery Reflected in River",
        address: "Manaus, AM, Brasil",
        pictureId: "222",
        comments: [
          {
            date: "Wed Oct 02 2024",
            id: "2222",
            postID: "22",
            likes: [],
            replies: [
              {
                date: "Wed Oct 02 2024 10:50:24 GMT+0330 (Iran Standard Time)",
                id: "22222",
                likes: [],
                parentId: "2222",
                postID: "22",
                replies: [],
                text: "reply",
              },
            ],
            text: "comment",
            writer: {
              userId: "1",
              username: "user1",
              placeCount: 1,
            },
          },
        ],
        replies: [],
        creator: "2",
        pictureUrl:
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
