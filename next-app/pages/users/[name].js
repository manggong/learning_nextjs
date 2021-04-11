import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const username = user && user.name;
  return <div>{username}</div>;
};

name.getInitialProps = async ({ query }) => {
  const { name } = query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status === 200) {
      const user = await res.json();
      return { user };
    }
    return {};
  } catch (e) {
    console.log(e);
    return {};
  }
};

// export const getServerSideProps = async ({ query }) => {
// const { name } = query;
// try {
//   const res = await fetch(`https://api.github.com/users/${name}`);
//   if (res.status === 200) {
//     const user = await res.json();
//     return { props: { user } };
//   }
//   return { props: {} };
// } catch (e) {
//   console.log(e);
//   return { props: {} };
// }
// };

export default name;
