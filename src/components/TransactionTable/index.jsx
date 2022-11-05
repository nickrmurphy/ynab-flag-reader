import { Table } from "react-bootstrap";
import TranTableBody from "./TranTableBody";

export default function TransactionTable({transactions}) {
    const fields = [ 'Flag', 'Amount', 'Category', 'Payee', 'Memo'];
    return (
        <Table className="table-hover">
            <thead>
                <tr key='trans-table-header'>
                    {
                        fields.map((field) => (
                            <th>
                                {field}
                            </th>
                        ))
                    }
                </tr>
            </thead>
            <TranTableBody transactions={transactions}/>
        </Table>
    );
}