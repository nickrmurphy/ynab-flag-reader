import { useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { API, AUTH } from '../config/envConfig';
import BudgetSelect from '../components/BudgetSelect';

export default function Home() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    fetch(`${API.BASE_URL}/budgets?include_accounts=false`, {
      method: 'get',
      headers: new Headers({
        Authorization: `Bearer ${AUTH.API}`,
      }),
    })
      .then((response) => response.json())
      .then((data) => setBudgets(data.data.budgets))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <Row as="h1">
        Select a Budget
      </Row>
      <Row>
        <BudgetSelect
          budgets={budgets}
          onSelect={(id) => {
            window.location.assign(`/budget/${id}`);
          }}
        />
      </Row>
    </Container>
  );
}
