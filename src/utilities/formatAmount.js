export default function formatAmount(milliunit) {
  const amount = milliunit / 1000.0;
  if (amount < 0) return `- $${amount * -1}`;
  return `$${amount}`;
}
