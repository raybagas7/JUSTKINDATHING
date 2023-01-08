const comments = [
  {
    id: 'comment-ibaTrybPmCGlR3uvyYNIQ',
    username: 'johndoe',
    date: '2022-12-03T07:39:28.678Z',
    content: 'sebuah comment',
    is_deteled: false,
  },
  {
    id: 'comment-0GFeZ26BXBU7lEXlE-byE',
    username: 'dicoding',
    date: '2022-12-03T07:39:30.439Z',
    content: '**komentar telah dihapus**',
    is_deteled: true,
  },
];

const a = comments.filter((comment) => {
  return comment.is_deteled === false;
});

console.log(a);
