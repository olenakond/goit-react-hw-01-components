import PropTypes from 'prop-types';
import {
  Card,
  Info,
  Stat,
  Img,
  Name,
  Tag,
  Location,
  StatElement,
  StatTitle,
  StatValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatarUrl, stats }) => {
  return (
    <Card>
      <Info>
        <Img src={avatarUrl} alt="User avatar" width="250px" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Info>
      <Stat>
        <StatElement>
          <StatTitle>Followers</StatTitle>
          <StatValue>{stats.followers}</StatValue>
        </StatElement>
        <StatElement>
          <StatTitle>Views</StatTitle>
          <StatValue>{stats.views}</StatValue>
        </StatElement>
        <StatElement>
          <StatTitle>Likes</StatTitle>
          <StatValue>{stats.likes}</StatValue>
        </StatElement>
      </Stat>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
