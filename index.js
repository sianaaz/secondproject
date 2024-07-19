const items = [
  {
    id: 1,
    title: "Meet me where the wild things grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "painting",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1315,
    artist: "Leanne Graham",
    dateCreated: "2024-06-09T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-10T02:00:48.989Z",
    priceSold: 2030,
  },
  {
    id: 2,
    title: "I choose peace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 530,
    artist: "Ervin Howell",
    dateCreated: "2024-06-27T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-29T02:00:48.989Z",
    priceSold: 350,
  },
  {
    id: 3,
    title: "Peace Underneath",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 495,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-17T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.989Z",
    priceSold: 2810,
  },
  {
    id: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1290,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-24T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.989Z",
    priceSold: 4840,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1480,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-01T02:00:48.989Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.989Z",
    priceSold: 14730,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1305,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-09-30T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-19T02:00:48.989Z",
    priceSold: 2935,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 50,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-02T02:00:48.989Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-08T02:00:48.990Z",
    priceSold: 75,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1095,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-24T02:00:48.990Z",
    priceSold: 3465,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 600,
    artist: "Glenna Reichert",
    dateCreated: "2024-06-24T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 4220,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 10,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 855,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-04T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-28T02:00:48.990Z",
    priceSold: 4540,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 11,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 670,
    artist: "Leanne Graham",
    dateCreated: "2024-06-13T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 1940,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 12,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 975,
    artist: "Ervin Howell",
    dateCreated: "2024-06-21T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-22T02:00:48.990Z",
    priceSold: 1165,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 13,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1480,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-06T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 8270,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 14,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 995,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 6630,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 15,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 810,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-02T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-16T02:00:48.990Z",
    priceSold: 840,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 16,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 570,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-06-19T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-23T02:00:48.990Z",
    priceSold: 3660,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 17,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 105,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-24T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.990Z",
    priceSold: 765,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 18,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1270,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-24T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.990Z",
    priceSold: 1500,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 19,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1050,
    artist: "Glenna Reichert",
    dateCreated: "2024-06-16T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-23T02:00:48.990Z",
    priceSold: 3675,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1430,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-11T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-12T02:00:48.990Z",
    priceSold: 1305,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 21,
    title: "Meet me where the wild things grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "painting",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 525,
    artist: "Leanne Graham",
    dateCreated: "2024-06-15T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 22,
    title: "I choose peace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 130,
    artist: "Ervin Howell",
    dateCreated: "2024-06-22T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 23,
    title: "Peace Underneath",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 985,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-08T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 24,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 740,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-10T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 25,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 610,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-22T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 26,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 970,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-06-19T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 27,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 695,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-01T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 28,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 65,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-03T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 29,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 905,
    artist: "Glenna Reichert",
    dateCreated: "2024-09-29T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 30,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1025,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-22T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-28T02:00:48.990Z",
    priceSold: 1670,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 31,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 380,
    artist: "Leanne Graham",
    dateCreated: "2024-06-13T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-17T02:00:48.990Z",
    priceSold: 2420,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 32,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1375,
    artist: "Ervin Howell",
    dateCreated: "2024-06-22T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.990Z",
    priceSold: 5010,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 33,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1175,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-19T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-22T02:00:48.990Z",
    priceSold: 1630,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 34,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1370,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-22T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-26T02:00:48.990Z",
    priceSold: 3655,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 35,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 395,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-03T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-17T02:00:48.990Z",
    priceSold: 2190,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 36,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1345,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-06-01T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-12T02:00:48.990Z",
    priceSold: 10595,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 37,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 955,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-28T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-29T02:00:48.990Z",
    priceSold: 1210,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 38,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 930,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-10T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-29T02:00:48.990Z",
    priceSold: 3220,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 39,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 755,
    artist: "Glenna Reichert",
    dateCreated: "2024-09-30T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-24T02:00:48.990Z",
    priceSold: 1105,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 40,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 745,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-18T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 41,
    title: "Meet me where the wild things grow",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "painting",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1095,
    artist: "Leanne Graham",
    dateCreated: "2024-06-03T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 42,
    title: "I choose peace",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "sculpture",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 635,
    artist: "Ervin Howell",
    dateCreated: "2024-06-11T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 43,
    title: "Peace Underneath",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    type: "digital",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 165,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
  },
  {
    id: 44,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1617994422012-baad9c327e20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 115,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-28T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 45,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 205,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-12T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 46,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1390,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-06-07T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 47,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 600,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-16T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 48,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618207773994-243f4bce78fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1330,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-19T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: null,
    priceSold: null,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 49,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1506806732259-39c2d0268443?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI4&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1430,
    artist: "Glenna Reichert",
    dateCreated: "2024-06-27T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-29T02:00:48.990Z",
    priceSold: 4115,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 50,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619358977696-58722a216a2e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTI5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 440,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-19T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 3535,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 51,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1619435545137-9def36032302?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMx&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 455,
    artist: "Leanne Graham",
    dateCreated: "2024-06-17T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-22T02:00:48.990Z",
    priceSold: 840,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 52,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618208122329-27e7f10d6d6b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 90,
    artist: "Ervin Howell",
    dateCreated: "2024-06-14T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-27T02:00:48.990Z",
    priceSold: 115,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 53,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTMz&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 545,
    artist: "Clementine Bauch",
    dateCreated: "2024-06-13T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-29T02:00:48.990Z",
    priceSold: 1620,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 54,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 510,
    artist: "Patricia Lebsack",
    dateCreated: "2024-06-02T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-21T02:00:48.990Z",
    priceSold: 5490,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 55,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 395,
    artist: "Chelsey Dietrich",
    dateCreated: "2024-06-12T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-23T02:00:48.990Z",
    priceSold: 1180,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 56,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 670,
    artist: "Mrs. Dennis Schulist",
    dateCreated: "2024-06-23T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-28T02:00:48.990Z",
    priceSold: 1935,
    title: "Fill in the blank",
    type: "custom",
  },
  {
    id: 57,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1618601426176-5c47db7c8113?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM0&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 660,
    artist: "Kurtis Weissnat",
    dateCreated: "2024-06-04T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-07T02:00:48.990Z",
    priceSold: 525,
    title: "Meet me where the wild things grow",
    type: "painting",
  },
  {
    id: 58,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM1&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1385,
    artist: "Nicholas Runolfsdottir V",
    dateCreated: "2024-06-15T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-22T02:00:48.990Z",
    priceSold: 1565,
    title: "I choose peace",
    type: "sculpture",
  },
  {
    id: 59,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM2&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 1395,
    artist: "Glenna Reichert",
    dateCreated: "2024-06-15T02:00:48.990Z",
    isPublished: true,
    isAuctioning: false,
    dateSold: "2024-06-19T02:00:48.990Z",
    priceSold: 10640,
    title: "Peace Underneath",
    type: "digital",
  },
  {
    id: 60,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor...",
    image:
      "https://images.unsplash.com/photo-1578301978069-45264734cddc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGFpbnRpbmcsIGFydCwgY2FudmFzLCBkaWdpdGFsYXJ0LCBhcnRpc3R8fHx8fHwxNjM1NDY5MTM3&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=800",
    price: 475,
    artist: "Clementina DuBuque",
    dateCreated: "2024-06-07T02:00:48.990Z",
    isPublished: false,
    isAuctioning: false,
    dateSold: "2024-06-25T02:00:48.990Z",
    priceSold: 395,
    title: "Fill in the blank",
    type: "custom",
  },
];

localStorage.setItem("items", JSON.stringify(items));

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    showArtistsDropdown(data);
  });

function showArtistsDropdown(artists) {
  const selectArtist = document.getElementById("select-artist");

  artists.forEach((artist) => {
    const option = document.createElement("option");
    option.value = artist.name;
    option.textContent = artist.name;
    selectArtist.appendChild(option);
  });

  selectArtist.addEventListener("change", () => {
    const selectedArtist = selectArtist.value;
    if (selectedArtist) {
      localStorage.setItem("selectedArtist", selectedArtist);
      window.location.href = "artist_home.html";
    } else {
      alert("Please select an artist name to proceed.");
    }
  });
}

const selectedArtist = localStorage.getItem("selectedArtist");
const itemsSold = document.getElementById("items-sold");
const incomeTotal = document.getElementById("total-income");

if (selectedArtist) {
  const nameOfArtist = document.getElementById("nameOfArtist");
  nameOfArtist.textContent = selectedArtist;

  const items = JSON.parse(localStorage.getItem("items")) || [];

  let soldItems = 0;
  let totalIncome = 0;
  
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    if (item.artist === selectedArtist) {
      if (item.dateSold && item.priceSold) {
        soldItems++;
        totalIncome += item.priceSold;
      }
    }
  }

  const totalItems = items.filter((item) => item.artist === selectedArtist).length;

  itemsSold.textContent = `${soldItems}`;
  incomeTotal.textContent = `$${totalIncome}`;
}

const itemTypes = ["painting", "sculpture", "digital", "custom"];

const modal = document.getElementById("myModal");
const addNewItemButton = document.getElementById("addNewItemButton");
const closeButton = document.getElementsByClassName("close");
const cancelButton = document.getElementById("cancelButton");
const newItemForm = document.getElementById("newItemForm");
const itemsContainer = document.getElementById("itemsContainer");

let currentUser = "Artist Name";
const today = new Date().toLocaleDateString();

let editingItemId = null;

const typeSelect = document.getElementById("type");
itemTypes.forEach((type) => {
  const option = document.createElement("option");
  option.value = type;
  option.textContent = type;
  typeSelect.appendChild(option);
});

addNewItemButton.onclick = function () {
  modal.style.display = "block";
};

closeButton.onclick = closeModalAndResetForm;
cancelButton.onclick = closeModalAndResetForm;

window.onclick = function (event) {
  if (event.target == modal) {
    closeModalAndResetForm();
  }
};

newItemForm.onsubmit = function (event) {
  event.preventDefault();

  const image = document.getElementById("image").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const isPublished = document.getElementById("isPublished").checked;
  const price = document.getElementById("price").value;

  const newItem = {
    id: editingItemId ? editingItemId : Date.now(),
    image,
    title,
    description,
    type,
    isPublished,
    price,
    artist: currentUser,
    dateCreated: today,
  };

  let items = JSON.parse(localStorage.getItem("items")) || [];

  if (editingItemId) {
    const index = items.findIndex((item) => item.id === editingItemId);
    if (index !== -1) {
      items[index] = newItem;
    }
    editingItemId = null;
  } else {
    items.push(newItem);
  }

  localStorage.setItem("items", JSON.stringify(items));

  renderItems(currentUser);
  closeModalAndResetForm();
};

function closeModalAndResetForm() {
  modal.style.display = "none";
  newItemForm.reset();
  editingItemId = null;
}

function renderItems(user) {
  itemsContainer.innerHTML = "";
  let items = JSON.parse(localStorage.getItem("items")) || [];
  items
    .filter((item) => item.artist === user)
    .forEach((item) => {
      const col = document.createElement("div");
      col.classList.add("col", "mb-2");

      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundColor = "#FCEBD5";
      card.style.width = "100%";
      card.style.marginTop = "15px";

      const image = document.createElement("img");
      img.src = item.image;
      img.classList.add("card-img-top");
      img.alt = item.title;

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const cardTitle = document.createElement("h5");
      cardTitle.classList.add("card-title");
      cardTitle.textContent = item.title;

      const cardText = document.createElement("p");
      cardText.classList.add("card-text");
      cardText.textContent = item.description;

      const cardType = document.createElement("p");
      cardType.classList.add("card-text");
      cardType.textContent = `Type: ${item.type}`;

      const cardPrice = document.createElement("p");
      cardPrice.classList.add("card-text");
      cardPrice.textContent = `Price: $${item.price}`;

      const cardArtist = document.createElement("p");
      cardArtist.classList.add("card-text");
      cardArtist.textContent = `Artist: ${item.artist}`;

      const cardDate = document.createElement("p");
      cardDate.classList.add("card-text");
      cardDate.textContent = `Date Created: ${item.dateCreated}`;

      const publishButton = document.createElement("button");
      publishButton.classList.add(
        "publish-Btn",
        item.isPublished ? "btn-warning" : "btn-success"
      );
      publishButton.textContent = item.isPublished ? "Unpublish" : "Publish";
      publishButton.onclick = () => togglePublish(item.id);

      const editButton = document.createElement("button");
      editButton.classList.add("edit-Btn");
      editButton.textContent = "Edit";
      editButton.onclick = () => editItem(item.id);

      const removeButton = document.createElement("button");
      removeButton.classList.add("remove-Btn", "btn-danger");
      removeButton.textContent = "Remove";
      removeButton.onclick = () => removeItem(item.id);

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardText);
      cardBody.appendChild(cardType);
      cardBody.appendChild(cardPrice);
      cardBody.appendChild(cardArtist);
      cardBody.appendChild(cardDate);
      cardBody.appendChild(publishButton);
      cardBody.appendChild(editButton);
      cardBody.appendChild(removeButton);

      card.appendChild(image);
      card.appendChild(cardBody);
      col.appendChild(card);

      itemsContainer.appendChild(col);
    });
}

function togglePublish(itemId) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items[index].isPublished = !items[index].isPublished;
    localStorage.setItem("items", JSON.stringify(items));
    renderItems(currentUser);

    if (items[index].isPublished) {
      addToVisitorsListing(items[index]);
    }
  }
}

function addToVisitorsListing(item) {
  let visitorsItems = JSON.parse(localStorage.getItem("visitorsItems")) || [];
  visitorsItems.push(item);
  localStorage.setItem("visitorsItems", JSON.stringify(visitorsItems));
}

function editItem(itemId) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    const selectedItem = items[index];
    image.value = selectedItem.image;
    title.value = selectedItem.title;
    description.value = selectedItem.description;
    type.value = selectedItem.type;
    isPublished.checked = selectedItem.isPublished;
    price.value = selectedItem.price;
    editingItemId = itemId;
    modal.style.display = "block";
  }
}

function removeItem(itemId) {
  let items = JSON.parse(localStorage.getItem("items")) || [];
  const index = items.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    renderItems(currentUser);
  }
}

renderItems(currentUser);

//Displaying the items based on the artist logged
class ArtistItems {
  constructor(artistName) {
    this.artistName = artistName;
    this.items = this.loadItems().filter((item) => item.artist === artistName);
  }

  loadItems() {
    const items = localStorage.getItem("items");
    return items ? JSON.parse(items) : [];
  }

  saveItems() {
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  renderItems() {
    const container = document.getElementById("itemsContainer");
    if (!container) return;

    container.innerHTML = "";

    this.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.backgroundColor = "#FCEBD5";

      card.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <h4>${item.title}</h4>
                <p>${new Date(item.dateCreated).toLocaleDateString()}</p>
                <p>${item.description}</p>
                <p>Type: ${item.type}</p>
                <p>Price: $${item.price}</p>
                <div class="card-buttons">
                    <button onclick="artistItems.togglePublish(${
                      item.id
                    })" class="publish-Btn">${
        item.isPublished ? "Unpublish" : "Publish"
      }</button>
                    <button onclick="artistItems.removeItem(${
                      item.id
                    })" class="remove-Btn">Remove</button>
                    <button onclick="artistItems.editItem(${
                      item.id
                    })" class="edit-Btn">Edit</button>
                </div>
            `;
      container.appendChild(card);
    });
  }

  togglePublish(id) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.isPublished = !item.isPublished;
      this.saveItems();
      this.renderItems();
    }
  }

  removeItem(id) {
    if (confirm("Are you sure you want to remove this item?")) {
      const index = this.items.findIndex((item) => item.id === id);
      if (index > -1) {
        this.items.splice(index, 1);
        this.saveItems();
        this.renderItems();
      }
    }
  }

  editItem(id) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      image.value = item.image;
      title.value = item.title;
      description.value = item.description;
      type.value = item.type;
      isPublished.checked = item.isPublished;
      price.value = item.price;

      newItemForm.dataset.itemId = id;

      showModal();
    }
  }
}

function showModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";

  const span = document.getElementsByClassName("close");
  const cancelButton = document.getElementById("cancelButton");

  span.onclick = function () {
    modal.style.display = "none";
  };
  cancelButton.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
newItemForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const id = this.dataset.itemId;
  const image = document.getElementById("image").value;
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const type = document.getElementById("type").value;
  const isPublished = document.getElementById("isPublished").checked;
  const price = document.getElementById("price").value;

  if (id) {
    const item = artistItems.items.find((item) => item.id == id);
    if (item) {
      item.image = image;
      item.title = title;
      item.description = description;
      item.type = type;
      item.isPublished = isPublished;
      item.price = price;
    }
  } else {
    const newItem = {
      id: Date.now(),
      artist: artistItems.artistName,
      image: image,
      title: title,
      description: description,
      type: type,
      isPublished: isPublished,
      price: price,
      dateCreated: new Date().toISOString(),
    };
    artistItems.items.push(newItem);
  }

  artistItems.saveItems();
  artistItems.renderItems();
  modal.style.display = "none";
});

function populateTypeOptions() {
  const typeSelect = document.getElementById("type");
  typeSelect.innerHTML = itemTypes
    .map((type) => `<option value="${type}">${type}</option>`)
    .join("");
}

populateTypeOptions();

const loggedArtist = localStorage.getItem("selectedArtist") || "ArtistName";
document.getElementById("artistName").innerText = loggedArtist;

const artistItems = new ArtistItems(loggedArtist);
artistItems.renderItems();


const gallery = document.getElementById("gallery");
const filterIcon = document.getElementById('filter-icon');
const filtersPanel = document.getElementById('filters-panel');
const closeFilters = document.getElementById('close-filters');
const itemNameFilter = document.getElementById('item-name-filter');
const artistFilter = document.getElementById('artist-filter');
const priceMinFilter = document.getElementById('price-min-filter');
const priceMaxFilter = document.getElementById('price-max-filter');
const typeFilter = document.getElementById('type-filter');
const applyFilters = document.getElementById('apply-filters');

const publishedItems = items.filter((item) => item.isPublished === true && item.dateSold === null);

function populateArtistFilter(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    data.forEach(user => {
      const option = document.createElement('option');
      option.value = user.name;
      option.textContent = user.name;
      artistFilter.appendChild(option);
    });
  });
}

function populateTypeFilter(){
  itemTypes.forEach(type => {
    const option = document.createElement('option');  
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
};

function displayItems(items){
  gallery.innerHTML = '';
  items.forEach((item, index) => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");
    card.classList.add(index % 2 === 0 ? "card-even" : "card-odd");
  
    const textClass = index % 2 === 0 ? "text-even" : "text-odd";
    const priceClass = index % 2 === 0 ? "price-even" : "price-odd";
  
    card.innerHTML = `
        <div class="artist-card">
          <img src="${item.image}">
          <div class="artist-card-body">
            <div class="artist-card-content">
              <h1 class="artist-title ${textClass}">${item.artist}</h1>
              <p class="price ${priceClass}">$${item.price}</p>
            </div>
            <h3 class="artist-card-title ${textClass}">${item.title}</h3>
            <p class="artist-card-text ${textClass}">${item.description}</p>
          </div>
        </div>
      `;
    gallery.appendChild(card);
  });
};

function applyFiltersFunc(){
  const filteredItems = publishedItems.filter(item => {
    const itemName = itemNameFilter.value.toLowerCase();
    const artistName = artistFilter.value;
    const minPrice = parseFloat(priceMinFilter.value);
    const maxPrice = parseFloat(priceMaxFilter.value);
    const itemType = typeFilter.value;

    const matchesName = itemName ? item.title.toLowerCase().includes(itemName) : true;
    const matchesArtist = artistName ? item.artist === artistName : true;
    const matchesMinPrice = !isNaN(minPrice) ? item.price >= minPrice : true;
    const matchesMaxPrice = !isNaN(maxPrice) ? item.price <= maxPrice : true;
    const matchesType = itemType ? item.type === itemType : true;

    return matchesName && matchesArtist && matchesMinPrice && matchesMaxPrice && matchesType;
  });

  displayItems(filteredItems);
  filtersPanel.classList.remove('active');
};

applyFilters.addEventListener('click', applyFiltersFunc);

populateArtistFilter();
populateTypeFilter();
displayItems(publishedItems);

filterIcon.addEventListener('click', () => {
  filtersPanel.classList.add('active');
});