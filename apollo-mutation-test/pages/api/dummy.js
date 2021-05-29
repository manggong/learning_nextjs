// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: 1,
      postId: 1,
      title: 'hello',
      content: 'hello content',
    },
    {
      id: 2,
      postId: 2,
      title: 'asd',
      content: 'asd content',
    },
    {
      id: 3,
      postId: 3,
      title: '123',
      content: '123 content',
    },
    {
      id: 4,
      postId: 4,
      title: 'fgh',
      content: 'fgh content',
    },
  ]);
};
