import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useTools from '../hooks/useTools';
import Loading from '../Loading/Loading';
import "./HomeProducts.css"

const HomeProducts = () => {
  const [tools, setTools, isLoading] = useTools();


  const navigate = useNavigate();

  //Reverse an tools array

  const slicedTools = [...tools].reverse().slice(0, 6);
  // console.log(slicedTools);


  const handleConfirmPurchase = (id) => {
    navigate(`/confirm-purchase/${id}`);
    window.scrollTo(0, 0);
  }


  const singleTool = slicedTools.map(
    ({
      _id,
      toolName,
      toolImage,
      toolPrice,
      minOrder,
      availableQuantity,
      toolDescription,
    }) => {
      return (
        <div className="col-md-4 col-sm-6 mb-4  cards-special">
          <Card
            className="shadow "
          >
            <Card.Img className="tool-img p-4 card-bg2 imgCards card4" variant="top" src={toolImage} />
            <Card.Body className='nav-bg'>
              <Card.Title className="text-center cards4 tool-header">
                {toolName}
              </Card.Title>
              <Card.Text className="tool-body">
                <p className="text-muted">
                  {toolDescription.slice(0, 120)}...
                </p>
                <p className="mb-2">
                  <strong>Price: Tk. {toolPrice}</strong> (per piece)
                </p>
                <small>
                  <strong className="text-danger">
                    Minimum Order Quantity: {minOrder}
                  </strong>
                </small>
                <div>
                  <small className="text-light">
                    <strong>Available Quantity: {availableQuantity}</strong>
                  </small>
                </div>
              </Card.Text>

              <button
                onClick={() => handleConfirmPurchase(_id)}
                className="cta"

              >
                <span>Confirm Order</span>

              </button>
            </Card.Body>
          </Card>
        </div>
      );
    }
  );
  return (
    <div >
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="row container mx-auto">
          {singleTool}
        </div>
      )}
    </div>
  );
};

export default HomeProducts;