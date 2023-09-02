import PropTypes from 'prop-types';
import {
  FriendCard,
  FriendStatus,
  FriendImg,
  FriendName,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendCard>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendImg src={avatar} alt="User avatar" width="70" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
