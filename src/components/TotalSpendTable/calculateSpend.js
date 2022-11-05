const calculateSpend = (transactions) => {
  const totals = new Map();

  transactions.forEach((t) => {
    if (totals.has(t.flag_color)) {
      const val = (totals.get(t.flag_color) + t.amount);
      totals.set(t.flag_color, val);
    } else {
      totals.set(t.flag_color, t.amount);
    }
  });

  const flagSpend = [];
  totals.forEach((value, key) => {
    flagSpend.push({
      flag: key, amount: value,
    });
  });
  return flagSpend;
};

export default calculateSpend;
