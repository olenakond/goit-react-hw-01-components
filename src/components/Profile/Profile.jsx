import PropTypes from 'prop-types';
import {
  ProfileCard,
  ProfileInfo,
  ProfileStat,
  ProfileImg,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStatElement,
  ProfileStatTitle,
  ProfileStatValue,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatarUrl, stats }) => {
  return (
    <ProfileCard>
      <ProfileInfo>
        <ProfileImg src={avatarUrl} alt="User avatar" width="250px" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileInfo>
      <ProfileStat>
        <ProfileStatElement>
          <ProfileStatTitle>Followers</ProfileStatTitle>
          <ProfileStatValue>{stats.followers}</ProfileStatValue>
        </ProfileStatElement>
        <ProfileStatElement>
          <ProfileStatTitle>Views</ProfileStatTitle>
          <ProfileStatValue>{stats.views}</ProfileStatValue>
        </ProfileStatElement>
        <ProfileStatElement>
          <ProfileStatTitle>Likes</ProfileStatTitle>
          <ProfileStatValue>{stats.likes}</ProfileStatValue>
        </ProfileStatElement>
      </ProfileStat>
    </ProfileCard>
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
  }),
};
