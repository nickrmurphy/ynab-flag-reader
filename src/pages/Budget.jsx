import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { API, AUTH } from '../config/envConfig';
import { useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import TransactionTable from '../components/TransactionTable';
import TotalSpendTable from '../components/TotalSpendTable/TotalSpendTable';

export default function Budget() {
    const { budgetId } = useParams();
    const [ready, setReady] = useState(false);
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        fetch(`${API.BASE_URL}/budgets/${budgetId}/transactions`, { 
            method: 'get', 
            headers: new Headers({
                'Authorization': `Bearer ${AUTH.API}`, 
            })
          })
          .then((response) =>  response.json())
          .then((data) => {
            const trans = data.data.transactions;
            const flagged = trans.filter((t) => t.flag_color != null);
            setTransactions(flagged);
          })
          .catch(console.log);
    }, [budgetId]);

    useEffect(() => {
        if (transactions === null) return;
        setReady(true);
    }, [transactions]);

    if (!ready) return (
        <Container>
            <Spinner animation='border'/>
        </Container>
    )

    if (ready && transactions.length === 0) return (
        <Container>
            <Row as="h1">
                No Flagged Transactions
            </Row>
        </Container>
    );

    return (
        <Container>
            <Row as="h1">Spending Breakdown</Row>
            <Row as="h2">Total Spend by Flag</Row>
            <Row>
                <TotalSpendTable transactions={transactions}/>
            </Row>
            <Row as="h2">All Flagged Transactions</Row>
            <Row>
                <TransactionTable transactions={transactions}/>
            </Row>
        </Container>
    );
}