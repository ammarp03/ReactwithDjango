// import React from "react";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
	Card,
	Row,
	Col,
	Image,
	ListGroup,
	Button,
	ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";
import products from "../products";

function ProductScreen({ match }) {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		async function fetchProduct() {
			const { data } = await axios.get(`/api/products/${match.params.id}`);
			setProduct(data);
		}
		fetchProduct();
	}, []);

	const { id } = useParams();
	const productss = products.find((p) => p._id == Number(id));

	return (
		<div>
			<Link to="/" className="btn btn-light my-3">
				Go Back
			</Link>
			<Row>
				<Col md={6}>
					<Image src={productss.image} alt={productss.name} fluid />
				</Col>
				<Col>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h3>{productss.name}</h3>
						</ListGroup.Item>
						<ListGroup.Item>
							<Rating
								value={productss.rating}
								text={`${productss.numReviews} ratings`}
								color={"#f8e825"}
							/>
							Description: <hr /> {productss.description}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={3}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<Row>
									<Col>Price: </Col>
									<Col>
										<div>
											<strong>${productss.price}</strong>
										</div>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Status: </Col>
									<Col>
										<div>
											{productss.countInStock > 0 ? "In Stock" : "Out of Stock"}
										</div>
									</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								<Button
									className="btn-block"
									disabled={productss.countInStock === 0}
									type="button"
								>
									{" "}
									Add to Cart
								</Button>
							</ListGroup.Item>
						</ListGroup>
					</Card>
				</Col>
			</Row>
		</div>
	);
}

export default ProductScreen;
