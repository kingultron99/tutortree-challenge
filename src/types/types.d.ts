export type post = {
    username: string,
    content: string,
    votes: number,
    replies: post[],
  }