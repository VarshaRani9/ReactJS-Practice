import axios from "axios";
import { atom, selector } from "recoil";

//? ASYNCHRONOUS DATA QUERIES
export const count = atom({
  key: "countAtom",

  // 1. ASD ? flash & ugly way
  // default: {
  //   network: 0,
  //   jobs: 0,
  //   messaging: 0,
  //   notifications: 0,
  // },

  // 2. ASD ? Error bcz default value for an atom needs to be synchronous or it should be an selector that may be asynchronous
  // default: async () => {
  //   const res = await axios.get("<Backend url...>")
  //   return res.data
  // }

  // 3.. Async D
  default: selector({
    key: "atomSelector",
    get: async () => {
      const res = await axios.get("<Backend url...>");
      return res.data;
    },
  }),
});
export const totalCountSelector = selector({
  key: "totalCountSelector",
  get: ({ get }) => {
    const allCount = get(count);
    return (
      allCount.network +
      allCount.jobs +
      allCount.messaging +
      allCount.notifications
    );
  },
});

//? RECOIL: ATOM & SELECTOR
// export const networkAtom = atom({
//   key: "networkAtom",
//   default: 104,
// });

// export const jobsAtom = atom({
//   key: "jobsAtom",
//   default: 0,
// });

// export const notificationsAtom = atom({
//   key: "notificationsAtom",
//   default: 10,
// });

// export const messagingAtom = atom({
//   key: "messagingAtom",
//   default: 5,
// });

// export const totalCountSelector = selector({
//   key: "totalCountSelector",
//   get: ({ get }) => {
//     const networkCount = get(networkAtom);
//     const jobsCount = get(jobsAtom);
//     const messagingCount = get(messagingAtom);
//     const notificationsCount = get(notificationsAtom);
//     return networkCount + jobsCount + messagingCount + notificationsCount;
//   },
// });
