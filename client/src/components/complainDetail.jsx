import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const apiEndpoint =
  "http://localhost:9000/api/Event/updateStatus";

class ComplainDetail extends Component {
  state = {
    complain: {}
  };

  async componentDidMount() {
    console.log("insisde");
    // alert("inside");
    console.log(this.props.match.params.id);
    try {
      const { data } = await axios.get(
        "http://localhost:9000/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id
          }
        }
      );

      const complain = data[0];

      this.setState({ complain });
      // console.log(data);
    } catch (error) {
      console.log("errorrr is here");
    }
  }
  renderButton(complain) {
    if (complain.status === "notvarified")
      return (
        <button
          className="btn btn-danger"
          onClick={() => this.handleStatus(complain)}
        >
          Approve the event...
        </button>
      );
    else
      return (
        <button
          className="btn btn-cz"
          onClick={() => this.handleStatus(complain)}
        >
          Dis-approve to approve!
        </button>
      );
  }

  handleStatus = async complain => {
    if (complain.status === "notvarified") {
      console.log("inside when status is not varified");
      // console.log(complain._id);
      await axios
        .post(apiEndpoint, {
          id_update: complain._id,
          status_update: "approved"
        })
        .then(res => {
          console.log(res);
        });

      const { data } = await axios.get(
        "http://localhost:9000/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id
          }
        }
      );
      const updatedComplain = data[0];
      this.setState({ complain: updatedComplain });

      toast.success("This Event is successfully aproved!");
    } else {
      await axios
        .post(apiEndpoint, {
          id_update: complain._id,
          status_update: "notvarified"
        })
        .then(res => {
          console.log("done fron react");
        });

      const { data } = await axios.get(
        "http://localhost:9000/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id
          }
        }
      );

      const updatedComplain = data[0];
      this.setState({ complain: updatedComplain });

      toast.error("This Event is dis-aproved!");
    }
  };

  render() {
    const { complain } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <ToastContainer />
          <Link className="btn btn-cz mb-3" to="/dashboard/complains">
            Go Back
          </Link>
          <div className="row">
            <div className="col-9">
              <h3 style={{ color: "#159570" }}>{complain.Event_name}</h3>
              <h6
                style={{
                  color: "#2E2E2E"
                }}
              >
                {complain.status}
              </h6>
            </div>
            <div className="col-3">
              <h1 style={{ color: "#159570" }}>Status</h1>
              <h1 style={{ color: "#2E2E2E" }}>{complain.status}</h1>
              <div className="my-3">{this.renderButton(complain)}</div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComplainDetail;
