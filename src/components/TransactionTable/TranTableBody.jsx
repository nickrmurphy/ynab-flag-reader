import TranTableRow from "./TranTableRow"

export default function TranTableBody({ transactions }) {
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
            }
        ]
    }))
    return (
        <tbody key={'trans-body'}>
            {
                trans.map((t) => <TranTableRow id={t.id} data={t.data} />)
            }
        </tbody>
    );
}