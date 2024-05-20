export default function Employee({ employee }) {
  return (
    <div className="user">
      <div>
        <div className="user-info">Name</div>
        <div>{employee?.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email</div>
        <div>{employee?.email}</div>
      </div>
    </div>
  );
}
