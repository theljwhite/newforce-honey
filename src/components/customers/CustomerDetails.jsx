import { useParams } from "react-router-dom";

export default function CustomerDetails() {
  const { customerId } = useParams();

  return <div>{customerId}</div>;
}
