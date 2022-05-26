import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Card, CardImg, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../firebase.init";
import "./ConfirmPurchase.css";

const ConfirmPurchase = () => {
  const navigate = useNavigate();
  const [authUser] = useAuthState(auth);
  const params = useParams();
  const [error, setError] = useState(null);

  const [tool, setTool] = useState([]);
  const [reload, setReload] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");
  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    axiosPrivate
      .get(`http://localhost:5000/tools/${params.id}`, {
        headers: {
          email: authUser?.email,
        },
      })
      .then((response) => {
        const { data } = response;
        setTool(data);
        // console.log(data);
      });
  }, [authUser, params.id]);

  const {
    toolName,
    toolImage,
    toolDescription,
    availableQuantity,
    toolPrice,
    minOrder,
  } = tool;

  const [requiredQuantity, setRequiredQuantity] = useState("");

  useEffect(() => {
    // console.log(totalPrice);
    setTotalPrice(parseInt(toolPrice) * parseInt(requiredQuantity));
    if (parseInt(requiredQuantity) < parseInt(minOrder)) {
      setError("Minimum order is " + minOrder);
    } else if (parseInt(requiredQuantity) > parseInt(availableQuantity)) {
      setError("Not enough quantity");
    } else {
      setError(null);
    }
  }
    , [totalPrice, reload, requiredQuantity, toolPrice, availableQuantity, minOrder]);


  useEffect(() => {
    setRequiredQuantity(minOrder);

  }, [minOrder]);


  const userOrder = {
    userName: authUser?.displayName,
    userEmail: authUser?.email,
    toolName,
    quantity: requiredQuantity,
    toolImage,
    toolDescription,
    availableQuantity,
    toolPrice,
    minOrder,
    requiredQuantity,
    totalPrice,
  };

  const handleSubmit = () => {

    axiosPrivate
      .post(
        "http://localhost:5000/orders",
        userOrder,
        {
          headers: {
            email: authUser?.email,
          },
        }
      )
      .then((response) => {
        const { data } = response;
        // console.log(data);
        if (data.insertedId) {
          // console.log("Order added to database");
          setReload(!reload);
          navigate("/dashboard/my-orders");
          window.scrollTo(0, 0);
          toast.success("Order Placed Successfully");

        }
      });
  };


  return (
    <div>
      <div className="back-btn" onClick={handleGoBack}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>

      <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center   container mx-auto">
        <div className=" mx-lg-5">
          <Card className="shadow cards2 card-bg2">

            <CardImg className="tool-img tool-img p-4 card-bg2 imgCards card4" src={toolImage} alt="bookName" />

            <Card.Body className="card-body-update nav-bg">
              <Card.Title className="text-center cards4 tool-header">
                {toolName}
              </Card.Title>

              <div className="d-flex justify-content-around align-items-center my-3">
                <Card.Title className="text-center tool-header">
                  <small>Minimum Order : {minOrder} pieces</small>
                </Card.Title>
                <p className="card-text tool-price cards4 card-bg2">
                  <small>Tk. {toolPrice} per piece</small>
                </p>
              </div>
              <Card.Text className="card-text px-5">
                <span className="">
                  {" "}
                  <i>{toolDescription?.slice(0, 100)}</i>{" "}
                </span>
              </Card.Text>
              <Card.Text className="card-text mb-3 text-center">
                Available Quantity : {availableQuantity}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="update-stock-form mt-lg-0 mt-5">
          <Form>
            <h1 className="mb-lg-0 mb-5 text-center">
              Please Confirm Your Purchase Order For{" "}
              <span className="text-info">"{toolName}"</span>
            </h1>
            <Form.Group
              className="mb-3 mt-5"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="checkout-labels">Your Name</Form.Label>
              <Form.Control
                className="cards2 card-bg2 "
                disabled={authUser?.displayName ? true : false}
                value={authUser?.displayName}
                type="text"
                placeholder="First Name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Email address</Form.Label>
              <Form.Control
                className="cards2 card-bg2 "
                type="email"
                placeholder="name@example.com"
                value={authUser?.email}
                required
                disabled={authUser?.email ? true : false}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">Selected Tool</Form.Label>
              <Form.Control
                className="cards2 fw-bold card-bg2 "
                disabled
                value={toolName}
                type="text"
                placeholder="Your Selected Tool"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Number of Pieces You Want
              </Form.Label>
              <Form.Control
                className="cards2 card-bg2 "
                value={requiredQuantity}
                onChange={(e) => {
                  setReload(!reload);
                  setRequiredQuantity(e.target.value);
                }}
                type="number"
                name="quantity"
                placeholder="Number of Stock"
                required
              />
              <p className="text-danger mt-2">
                {error && requiredQuantity ? error : null}
              </p>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="checkout-labels">
                Total Price (BDT)
              </Form.Label>
              <Form.Control
                className="cards2 card-bg2 "
                disabled
                value={
                  requiredQuantity &&
                    parseInt(requiredQuantity) >= parseInt(minOrder) &&
                    parseInt(requiredQuantity) <= parseInt(availableQuantity)
                    ? totalPrice
                    : toolPrice * minOrder
                }
                onChange={(e) => {
                  setTotalPrice(
                    parseInt(toolPrice) * parseInt(requiredQuantity)
                  );
                }}
                type="number"
                name="quantity"
                placeholder="Number of Stock"
                required
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      <div className="my-5">
        <button
          onClick={handleSubmit}
          disabled={error ? true : false}
          className="btn btn-success d-block mx-auto px-5"
        >
          Confirm Your Order
        </button>
      </div>
    </div>
  );
};

export default ConfirmPurchase;
