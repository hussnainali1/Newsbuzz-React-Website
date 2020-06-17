import React, { Component } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
const apiEndpoint =
  "http://newsbuzz-server.herokuapp.com/api/display/registerEvent/updateStatus";

class ComplainDetail extends Component {
  state = {
    complain: {},
  };

  async componentDidMount() {
    console.log("insisde");
    // alert("inside");
    console.log(this.props.match.params.id);
    try {
      const { data } = await axios.get(
        "http://newsbuzz-server.herokuapp.com/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id,
          },
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
    if (complain.status === "un-approved")
      return (
        <button
          className="btn btn-danger"
          onClick={() => this.handleStatus(complain)}
        >
          Update to Pending...
        </button>
      );
    else
      return (
        <button
          className="btn btn-cz"
          onClick={() => this.handleStatus(complain)}
        >
          Update to approve!
        </button>
      );
  }

  handleStatus = async (complain) => {
    if (complain.status === "un-approved") {
      // console.log("inside update meethod");
      // console.log(complain._id);
      await axios
        .post(apiEndpoint, {
          id_update: complain._id,
          status_update: "approved",
        })
        .then((res) => {
          console.log("done fron react");
        });

      const { data } = await axios.get(
        "http://newsbuzz-server.herokuapp.com/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id,
          },
        }
      );
      const updatedComplain = data[0];
      this.setState({ complain: updatedComplain });

      toast.success("This Event is successfully aproved!");
    } else {
      await axios
        .post(apiEndpoint, {
          id_update: complain._id,
          status_update: "un-approved",
        })
        .then((res) => {
          console.log("done fron react");
        });

      const { data } = await axios.get(
        "http://newsbuzz-server.herokuapp.com/api/display/registerEvent/detail/",
        {
          params: {
            Search_id: this.props.match.params.id,
          },
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
        <Link className="btn btn-cz mb-3" to="/dashboard/complains">
          Go Back
        </Link>
        <div className="container mera-container">
          <ToastContainer />

          <div className="row">
            {/* <div className="col-md-4"></div> */}
            <div className="col-md-4">
              <div className="event-heading">{complain.Event_name}</div>
              <div className="event-date mt-3">
                <i class="far fa-calendar-alt" style={{ fontSize: "22px" }}></i>
                &nbsp;&nbsp;
                {complain.Event_date} &nbsp; {complain.Event_time}
              </div>
              <div className="event-manager-name mt-1">
                <i class="fas fa-user-circle" style={{ fontSize: "20px" }}></i>
                &nbsp;
                {complain.eventManager_name}
              </div>
              <div className="event-manager-contact mt-1">
                <i class="fas fa-phone-alt" style={{ fontSize: "17px" }}></i>
                &nbsp;
                {complain.eventManager_mobile}
              </div>
              <div className="event-location mt-1">
                <i class="fas fa-globe-africa" style={{ fontSize: "17px" }}></i>
                &nbsp;{complain.location}
              </div>

              <div className="my-3 approval-btn">
                {this.renderButton(complain)}
              </div>
            </div>

            <div className="col-md-8" style={{ marginTop: "7%" }}>
              <div className="event-desc disable-scrollbars">
                {complain.description}
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                omnis amet quo mollitia eaque enim voluptatem alias, rerum
                reiciendis et? Odio quo ipsam est! Error fuga provident quasi,
                maiores ut deserunt facere vel libero. Voluptatibus voluptas sed
                error provident eaque molestiae eum! Necessitatibus temporibus
                ullam molestias hic iste eligendi sed, ducimus at quaerat, modi
                exercitationem eveniet mollitia eos fugiat nemo quas culpa,
                accusantium labore dolor minima assumenda! Minima soluta ipsum
                iste assumenda, nam, aperiam quia quaerat alias ullam natus iure
                rem perspiciatis non fugit quidem doloribus blanditiis tempora
                porro molestiae culpa eius reiciendis? Omnis dicta eius quod
                pariatur ab aperiam mollitia iure sunt molestias ex odit ad
                veniam blanditiis porro, nihil possimus ducimus a inventore
                quaerat ipsum quia. Quis, minima dignissimos culpa voluptatibus,
                explicabo fugit earum, natus eius vel reprehenderit beatae rem
                ex adipisci reiciendis pariatur harum dolore omnis. Possimus
                quaerat magni consequuntur aliquam amet vero deleniti nam
                placeat delectus minus itaque aliquid, quos numquam sit? Debitis
                nemo temporibus repellendus consequatur impedit nulla quaerat
                molestias doloremque eius, accusantium tenetur laudantium
                corrupti dicta rerum, enim tempore. Corporis officia aliquid
                natus vero quasi. Corporis rem recusandae, facere nesciunt
                aliquid, animi similique rerum est placeat cupiditate ipsa
                voluptas natus voluptates, temporibus asperiores nihil
                perspiciatis eius a ut voluptatem molestiae. Accusantium dolore
                in quos ex quisquam architecto incidunt iste, debitis aspernatur
                dignissimos aut magnam nihil repellat culpa, nemo natus deleniti
                unde dolorum voluptate pariatur officiis at suscipit error!
                Nostrum iste, dolor minus fugiat dolore nemo eligendi tenetur.
                Expedita doloremque quaerat voluptatem fugit natus ea
                voluptatibus ratione illo corporis id recusandae, voluptas
                suscipit, pariatur labore laboriosam, deserunt accusamus
                reiciendis esse error nihil molestiae. Facere impedit laudantium
                quod, magni perspiciatis error consequuntur maiores sed, illo,
                odit voluptatem consequatur expedita. Temporibus maiores quam
                suscipit. Velit dolor consectetur dolorem laboriosam voluptates?
                Minus quia libero vitae sunt tempora ea aliquam illo veritatis
                inventore, fugit debitis, illum nam necessitatibus tempore optio
                neque modi expedita ut sequi? Itaque in iure dignissimos.
                Deleniti ullam blanditiis eum. Aliquam, asperiores inventore?
                Eos perspiciatis laborum explicabo earum omnis cumque cum vero,
                est odit error aliquid sit ipsa doloremque in repellendus
                minima! Est, adipisci laboriosam. Corporis adipisci beatae ullam
                porro aspernatur, aliquid amet quisquam, incidunt explicabo non
                atque enim voluptatem necessitatibus quibusdam molestiae quasi
                culpa consequuntur velit provident repellat nobis dolor? Odio
                quibusdam veritatis itaque nisi eum expedita atque maiores rem,
                debitis vero laboriosam ea rerum cum! Dolorum fugit architecto
                dolores, eveniet amet perspiciatis repellendus dicta excepturi,
                qui aut, suscipit quisquam accusamus quis quae? Debitis, harum.
                Nisi rem facilis laboriosam officiis ut atque magni sequi ex,
                cupiditate et dolores odio dolorem alias in, labore quasi
                pariatur? Nesciunt animi ducimus laudantium obcaecati iusto
                reprehenderit voluptatibus? Neque porro corporis tenetur amet
                itaque pariatur officia accusamus, nemo doloribus sint voluptas
                earum quibusdam iusto minus natus eveniet enim, maxime excepturi
                nostrum. At voluptatem assumenda, cupiditate sed optio iusto
                impedit eius esse dicta consequuntur labore? Nostrum, architecto
                voluptatem velit repellendus temporibus recusandae aut aliquam
                quam eius cum molestias libero facilis repellat, ea mollitia
                ipsum. Vel quis a autem corporis, itaque eligendi!
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComplainDetail;
