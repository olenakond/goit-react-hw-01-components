import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import userProfile from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <>
      <Profile
        username={userProfile.username}
        tag={userProfile.tag}
        location={userProfile.location}
        avatarUrl={userProfile.avatar}
        stats={userProfile.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
