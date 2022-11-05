
import formatAmount from "../../utilities/formatAmount";
import ColoredData from "../ui/Table/ColoredData";

export default function TranTableRow({ data, id }) {
    return(
        <tr key={id}>
            {
                data.map((d, i) => {
                    if (d.colored) {
                        return (
                            <ColoredData 
                                color={d.val}
                                key={`${id}-${i}`}
                            >
                                {d.val}
                            </ColoredData>
                        )
                    } else if (d.currency) {
                        return <td key={`${id}-${i}`}>{formatAmount(d.val)}</td>
                    } else {
                        return <td key={`${id}-${i}`}>{d.val}</td>
                    }
                })
            }
        </tr>
    )
}