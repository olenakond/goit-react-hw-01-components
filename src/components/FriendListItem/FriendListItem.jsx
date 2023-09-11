import PropTypes from 'prop-types';
import { Card, Status, Img, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Card>
      <Status $isOnline={isOnline} />
      <Img src={avatar} alt="User avatar" width="70" />
      <Name>{name}</Name>
    </Card>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
