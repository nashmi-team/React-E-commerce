import "./Profile.css";
import Api from "./Api";

const Profile = ({ checkOrdered }) => {
  let userData = JSON.parse(sessionStorage.getItem("loggedAccount"));

  const { email, username } = userData;

  const currentOrder = JSON.parse(localStorage.getItem("current-order"));

  const renderTableData = () => {
    const style = { padding: "2%" };
    let total = 0;

    return currentOrder.map((item, index) => {
      total = 0;
      return (
        <>
          <table className="table" id="table" style={{ borderRadius: "50%" }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Product</th>
                <th>quantity</th>
                <th>Price</th>
              </tr>
            </thead>

            {item.map((order) => {
              const { id, img, alt, name, quantity, price } = order;
              total += price;
              return (
                <tbody>
                  <tr key={index}>
                    <td style={style}>{id}</td>
                    <td style={style}>
                      <img src={img} alt={alt} />
                    </td>
                    <td style={style}>{name}</td>
                    <td style={style}>{quantity}</td>
                    <td style={style}>{price} JD</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
          <h4 style={{ float: "right", fontWeight: "bolder" }}>
            Total:
            <strong>{checkOrdered ? `${+total}JD` : null} </strong>
          </h4>
        </>
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

          {checkOrdered ? (
            renderTableData()
          ) : (
            <>
              <h1 className="orderName">You have no order Yet!</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
