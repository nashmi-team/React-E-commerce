import "./Profile.css";
import Api from "./Api";

const Profile = () => {
  let userData = JSON.parse(sessionStorage.getItem("loggedAccount"));

  const { email, username } = userData;

  const localData = JSON.parse(localStorage.getItem("react-use-cart"));
  const { items } = localData;
  const { cartTotal } = localData;

  const renderTableData = () => {
    const style = { padding: "2%" };
    return items.map((item) => {
      const { id, img, alt, name, quantity, price } = item;
      return (
        <tr key={id}>
          <td style={style}>{id}</td>
          <td style={style}>
            <img src={img} alt={alt} />
          </td>
          <td style={style}>{name}</td>
          <td style={style}>{quantity}</td>
          <td style={style}>{price} JD</td>
        </tr>
      );
    });
  };

  return (
    <>
      <div className="holder">
        <div className="holder-info">
          <div className="userInfo">
            <h3>My Account</h3>
            <hr />
            <h6>name: {username}</h6>
            <h6>Email: {email}</h6>
          </div>
          <Api />
        </div>
        <div className="container">
          <h3>Your Orders</h3>
          <p>This table contains your all orders:</p>
          <table className="table" id="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Product</th>
                <th>quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
          </table>
          <h4 style={{ float: "right", fontWeight: "bolder" }}>
            Total: <strong>{cartTotal} JD</strong>
          </h4>
        </div>
      </div>
    </>
  );
};

export default Profile;
