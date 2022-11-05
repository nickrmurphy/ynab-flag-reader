import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TranTableBody from './TranTableBody';

export default function TransactionTable({ transactions }) {
  const fields = ['Flag', 'Amount', 'Category', 'Payee', 'Memo', 'Date'];
  const trans = transactions.map((t) => ({
    id: t.id,
    data: [
      {
        colored: true,
        val: t.flag_color,
      },
      {
        currency: true,
        val: t.amount,
      },
      {
        val: t.category_name,
      },
      {
        val: t.payee_name,
      },
      {
        val: t.memo,
      },
      {
        val: t.date,
      },
    ],
  }));

  return (
    <Table className="table-hover">
      <thead>
        <tr key="trans-table-header">
          { fields.map((field) => (
            <th>
              {field}
            </th>
          ))}
        </tr>
      </thead>
      <TranTableBody transactions={trans} />
    </Table>
  );
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
