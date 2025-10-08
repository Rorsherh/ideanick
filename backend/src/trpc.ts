import {initTRPC} from '@trpc/server';

const ideas = [
    {
      nick: "cool-idea-nick-1",
      name: "Idea 1",
      description:
        "Lorem 1 ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      nick: "cool-idea-nick-2",
      name: "Idea 2",
      description:
        "Lorem 2 - новое25-10-08 ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      nick: "cool-idea-nick-3",
      name: "Idea 3",
      description:
        "Lorem 3 ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      nick: "cool-idea-nick-4",
      name: "Idea 4",
      description:
        "Lorem 4 ipsum dolor sit amet consectetur adipisicing elit...",
    },
    {
      nick: "cool-idea-nick-5",
      name: "Idea 5",
      description:
        "Lorem 5 ipsum dolor sit amet consectetur adipisicing elit...",
    },
  ];

  

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
    getIdeas: trpc.procedure.query(() =>{
        return { ideas }
    }),
});

export type TrpcRouter = typeof trpcRouter;