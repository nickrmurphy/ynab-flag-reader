import PropTypes from 'prop-types';
import TranTableRow from './TranTableRow';

export default function TranTableBody({ transactions }) {
  return (
    <tbody key="trans-body">
      {
      transactions.map((t) => <TranTableRow id={t.id} data={t.data} />)
      }
    </tbody>
  );
}

TranTableBody.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({})),
  })).isRequired,
};
