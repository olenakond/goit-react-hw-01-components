import PropTypes from 'prop-types';
import { Table, Head, HeadEl, El, Row } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <HeadEl>Type</HeadEl>
          <HeadEl>Amount</HeadEl>
          <HeadEl>Currency</HeadEl>
        </tr>
      </Head>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          const amountToNumber = Math.round(Number(amount));
          return (
            <Row key={id}>
              <El>{type}</El>
              <El>{amountToNumber}</El>
              <El>{currency}</El>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
