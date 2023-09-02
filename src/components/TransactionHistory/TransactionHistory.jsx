import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TransactionsHead,
  TransactionsHeadEl,
  TransactionsEl,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TransactionsHead>
        <tr>
          <TransactionsHeadEl>Type</TransactionsHeadEl>
          <TransactionsHeadEl>Amount</TransactionsHeadEl>
          <TransactionsHeadEl>Currency</TransactionsHeadEl>
        </tr>
      </TransactionsHead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          const amountToNumber = Math.round(Number(amount));
          return (
            <tr key={id}>
              <TransactionsEl>{type}</TransactionsEl>
              <TransactionsEl>{amountToNumber}</TransactionsEl>
              <TransactionsEl>{currency}</TransactionsEl>
            </tr>
          );
        })}
      </tbody>
    </TransactionsTable>
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
  ),
};
