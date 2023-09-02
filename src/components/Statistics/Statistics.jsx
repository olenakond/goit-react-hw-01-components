import PropTypes from 'prop-types';
import {
  StatSection,
  StatTitle,
  StatList,
  StatElement,
  StatElementLabel,
  StatElementPercentage,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(el => (
          <StatElement key={el.id}>
            <StatElementLabel>{el.label}</StatElementLabel>
            <StatElementPercentage>{el.percentage}%</StatElementPercentage>
          </StatElement>
        ))}
      </StatList>
    </StatSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
