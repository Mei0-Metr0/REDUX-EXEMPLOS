const UserCard = ({ user }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{user.name}</h5>
          <p className="card-text">
            <strong>Email:</strong> {user.email}
          </p>
          <p className="card-text">
            <strong>Phone:</strong> {user.phone}
          </p>
          <p className="card-text">
            <strong>Website:</strong> {user.website}
          </p>
          <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
