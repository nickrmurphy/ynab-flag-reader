import PropTypes from 'prop-types';
import formatAmount from '../../utilities/formatAmount';
import ColoredData from '../ui/Table/ColoredData';

export default function TranTableRow({ data, id }) {
  return (
    <tr key={`row-${id}`}>
      {data.map((d) => {
        if (d.colored) {
          return (
            <ColoredData
              color={d.val}
              key={`data-${id}`}
            >
              {d.val}
            </ColoredData>
          );
        } if (d.currency) {
          return <td key={`data-${id}`}>{formatAmount(d.val)}</td>;
        }
        return <td key={`data-${id}`}>{d.val}</td>;
      })}
    </tr>
  );
}

TranTableRow.propTypes = {
  id: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
