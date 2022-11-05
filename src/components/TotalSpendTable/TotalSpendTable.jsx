import { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import formatAmount from "../../utilities/formatAmount";
import ColoredData from "../ui/Table/ColoredData";
import calculateSpend from "./calculateSpend";

export default function TotalSpendTable({transactions}) {
    const [totals, setTotals] = useState([]);

    useEffect(() => {
        const result = calculateSpend(transactions);
        setTotals(result);
    }, [transactions])

    return (
        <>
        <Table>
            <thead>
                <tr>
                    <th>Flag</th>
                    <th>Total Spend</th>
                </tr>
            </thead>
            <tbody>
                {
                    totals.map((t) => (
                        <tr>
                            <ColoredData color={t.flag}>
                                {t.flag}
                            </ColoredData>
                            <td>
                                {formatAmount(t.amount)}
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </>
    )
}
