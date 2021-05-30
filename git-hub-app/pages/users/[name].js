import css from 'styled-jsx/css';
import fetch from 'isomorphic-unfetch';
import Profile from '../../components/Profile';
import Repositories from '../../components/Repositories';

const style = css`
  .user-contents-wrapper {
    display: flex;
    padding: 20px;
  }
`;

const name = ({ user, repos }) => {
  return (
    <div className='user-contents-wrapper'>
      <Profile user={user} />
      <Repositories user={user} repos={repos} />
      <style jsx>{style}</style>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name, page } = query;

  try {
    let user;
    let repos;

    const uerRes = await fetch(`https://api.github.com/users/${name}`);
    if (uerRes.status === 200) {
      user = await uerRes.json();
    }
    const repoRes = await fetch(
      `https://api.github.com/users/${name}/repos?sort-updated&page=1&per_page=10`,
    );
    if (repoRes.status === 200) {
      repos = await repoRes.json();
    }
    // console.log(repos);
    return { props: { user, repos } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;