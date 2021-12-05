import "./Checkout.css";
import React from "react";
import { withRouter } from "react-router";

const Checkout = ({ history }) => {
  const handleOrder = (event) => {
    event.preventDefault();
    console.log("hhhhhhhh");
    history.push({
      pathname: `/`,
    });
  };

  return (
    <div class="site-wrap">
      <div class="bg-light py-3">
        <div class="row test">
          <div class="col-md-7 mb-5 mb-md-0">
            <h2 class="h3 mb-3 text-black">Billing Details</h2>
            <form>
              <div class="p-3 p-lg-5 border">
                <div class="form-group">
                  <label for="c_city" class="text-black">
                    City <span class="text-danger">*</span>
                  </label>
                  <select id="c_country" class="form-control" required>
                    <option value="">select your city</option>
                    <option value="amman">Amman</option>
                    <option value="zarqa">Zarqa</option>
                    <option value="maan">Ma'an</option>
                    <option value="jarash">Jarash</option>
                    <option value="aqaba">aqaba</option>
                    <option value="mafraq">Mafraq</option>
                    <option value="irbid">Irbid</option>
                    <option value="karak">Karak</option>
                  </select>
                </div>
                <div class="form-group row">
                  <div class="col-md-6">
                    <label for="c_fname" class="text-black">
                      First Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_fname"
                      name="c_fname"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_lname" class="text-black">
                      Last Name <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_lname"
                      name="c_lname"
                      required
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_companyname" class="text-black">
                      Company Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_companyname"
                      name="c_companyname"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <label for="c_address" class="text-black">
                      Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_address"
                      name="c_address"
                      placeholder="Street address"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Apartment, suite, unit etc. (optional)"
                  />
                </div>

                <div class="form-group row mb-5">
                  <div class="col-md-6">
                    <label for="c_email_address" class="text-black">
                      Email Address <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_email_address"
                      name="c_email_address"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="c_phone" class="text-black">
                      Phone <span class="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="c_phone"
                      name="c_phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>

                <div class="form-group">
                  <label for="c_order_notes" class="text-black">
                    Order Notes
                  </label>
                  <textarea
                    name="c_order_notes"
                    id="c_order_notes"
                    cols="30"
                    rows="5"
                    class="form-control"
                    placeholder="Write your notes here..."
                  ></textarea>
                </div>
                <div class="form-group">
                  <button
                    class="btn btn-primary btn-lg py-3 btn-block"
                    onSubmit={handleOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Checkout);
