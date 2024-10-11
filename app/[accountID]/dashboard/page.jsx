export default function Dashboard({ params }) {
  const { accountID } = params;
  return <main>{accountID}</main>;
}
