import { Form, Button } from "react-bootstrap"
import { useState } from "react";

export default function BudgetSelect({ budgets, onSelect }) {
    const [budgetId, setBudgetId] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        onSelect(budgetId);
    }
    return (
        <Form onSubmit={handleSubmit}>
            {
                budgets.map((b) => (
                    <Form.Check
                        key={b.id}
                        required
                        name='budget-select'
                        type='radio'
                        id={b.id}
                        label={b.name}
                        onChange={(e) => setBudgetId(e.target.id)}
                    />
                ))
            }
            <Button variant="primary" type="submit">
                Select Budget
            </Button>
        </Form>
    );
}