import React, { useRef, useState } from "react";
import BreadCrumb from "../Utilities/BreadCrumb";
import "../../stylesheets/ProductPage/productPage.css";
import "../../stylesheets/Utilities/flex.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import * as action from "../../redux/AppRedux/action";

const ProductDetails = () => {
  const Allsize = ["XS", "S", "M", "L", "XL", "XXL"];
  const [product, setProduct] = useState({});
  const toastIdRef = useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const product_size = useSelector((store) => store.AppReducer.product_size);
  const { _id: user_id } = useSelector((store) => store.AppReducer.user);
  // console.log(product);

  const handle_add_to_cart = (ele) => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
    if (product_size === "" || !ele.size.includes(product_size)) {
      
      toastIdRef.current = toast({
        position: "bottom",
        title: "Please select product size",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const cart_product = { ...ele };
    delete cart_product._id;
    cart_product.product_id = ele._id;
    cart_product.quantity = 1;
    cart_product.user_id = user_id;
    cart_product.size = [product_size];

    fetch("https://max-fashion-clone-server.vercel.app/max-fashion/cart", {
      method: "POST",
      body: JSON.stringify(cart_product),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then(async (data) => {
        const { message, error } = await data;
        if (!error) {
          fetch(
            `https://max-fashion-clone-server.vercel.app/max-fashion/cart/${user_id}`
          )
            .then((res) => res.json())
            .then((data) => {
              dispatch(action.set_cart(data));
            });
          toastIdRef.current = toast({
            position: "bottom",
            title: message,
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        } else if (error) {
          toastIdRef.current = toast({
            position: "bottom",
            title: message,
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      });
  };

  useEffect(() => {
    const product_id = window.location.href.split("/product?")[1];
    // console.log(product_id)
    fetch(
      `https://max-fashion-clone-server.vercel.app/max-fashion/product/${product_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.product[0].size);
        if (data.product) setProduct(data.product[0]);
      });
  }, [setProduct]);

  return (
    <>
      <BreadCrumb />
      <p style={{ margin: "6px 0px 10px" }}>{product.jss17663}</p>

      <div className="product_details">
        <div className="product_img">
          <div>
            <img src={product["img_url"]} alt="" />
          </div>
          <div>
            <img src={product["img_url"]} alt="" />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011710460-Multicolour-M-1000011710460-02092022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011631216-Orange-ORANGE-1000011631216-09072022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011711717-Purple-MAUVE-1000011711717-29082022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011330442-Beige-IVORY-1000011330442-19062022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=493,w=333,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011329222-Yellow-MUSTARD-1000011329222-12062022_01-2100.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_02-2100.jpg"
              alt=""
            />
          </div>
        </div>
        <div>
          <div>
            <flex>
              <span
                style={{ fontSize: "14px", color: "red" }}
                className="material-icons"
              >
                currency_rupee
              </span>
              <h2>{product.price}</h2>
              <span
                style={{
                  fontSize: "14px",
                  height: "38px",
                  color: "grey",
                  display: "inline-flex",
                  marginLeft: "10px",
                  marginTop:"-14px",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                inclusve of all taxes
              </span>
            </flex>
            <flex>
              <s style={{ color: "grey" }}>
                ₹ {Math.ceil(product.price + product.price * 0.1)}
              </s>
              <span style={{ marginLeft: "10px" }}>Save ₹ {Math.ceil(product.price * 0.1)} (10.01%)</span>
            </flex>
            <span
              style={{
                display: "inline-block",
                fontSize: "14px",
                color: "#303ab2",
                marginTop: "8px",
                textDecoration: "underline",
              }}
            >
              Free shipping on orders above INR 998
            </span>

            <div
              style={{
                width: "50px",
                marginTop: "30px",
                padding: "6px",
                border: "2px solid #303ab2",
                borderRadius: "3px",
              }}
            >
              <img
                src="https://lmsin.net/cdn-cgi/image/h=235,w=235,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011241395-Pink-FUCHSIA-1000011241395-21032022_01-2100.jpg"
                alt=""
              />
            </div>

            <span
              style={{
                fontSize: "14px",
                color: "grey",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Color:{" "}
              <span style={{ color: "black", fontWeight: "600" }}>
                Multicolor
              </span>
            </span>

            <div style={{ marginTop: "26px" }}>
              <span style={{ fontSize: "14px" }}>Size:</span>
              <flex style={{ gap: "12px" }}>
                {Allsize.map((ele, indx) => {
                  return (
                    <Button
                      onClick={() => dispatch(action.set_product_size(ele))}
                      disabled={
                        product.size ? !product.size.includes(ele) : false
                      }
                      className={
                        product_size === ele ? "size_nav cur_size" : "size_nav"
                      }
                      key={indx}
                    >
                      {ele}
                    </Button>
                  );
                })}
              </flex>
            </div>
            <br />
            <button
              onClick={() => handle_add_to_cart(product)}
              className="add_to_basket_button"
            >
              ADD TO BASKET
            </button>
            <br />
            <br />
            <flex style={{ fontWeight: "600", fontSize: "14px" }}>
              <span className="material-icons">favorite_border</span> Add to
              Favorites
            </flex>
            <br />
            <hr />
            <br />
            <flex
              style={{
                width: "fit-content",
                padding: "4px 10px",
                justifyContent: "center",
                fontWeight: "600",
                fontSize: "12px",
                color: "red",
                borderRadius: "3px",
                backgroundColor: "rgb(247, 231, 231)",
              }}
            >
              PROMOTION OFFER
            </flex>
            <span
              style={{
                display: "inline-flex",
                fontSize: "14px",
                marginTop: "10px",
                lineHeight: "20px",
              }}
            >
              Festive Special- Rs.200 Off on 2499 & above, code- FEST200 | Get
              Rs.100 off on orders above 999 (first purchase only), code- NEW100
              Browse promotion
            </span>
            <br />
            <br />
            <hr />
            <br />
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span className="material-icons">add_business</span>
              <div>
                <b>Click & Collect</b>
                <p>
                  Order this product now and collect it from a store of your
                  choice. Learn more
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span className="material-icons">calendar_month</span>
              <div>
                <b>Pay in installments</b>
                <p>
                  Pay in easy installments on orders of ₹ 3,000 or more.
                  Available for select banks. Learn more
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "14px",
                marginBottom: "20px",
                gap: "16px",
              }}
            >
              <span
                style={{ transform: "rotate(180deg)" }}
                className="material-icons"
              >
                forward
              </span>
              <div>
                <b>30 days easy return policy. Learn more</b>
                <p></p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                fontSize: "14px",
                gap: "16px",
              }}
            >
              <span className="material-icons">local_shipping</span>
              <div style={{ width: "100%" }}>
                <b>When will I receive my order?</b>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    margin: "10px 0px 0px",
                  }}
                >
                  <input
                    style={{
                      width: "100%",
                      border: "1px solid rgb(200,200,200)",
                      borderRadius: "3px",
                      paddingLeft: "20px",
                    }}
                    placeholder="Enter your area Pincode"
                    type="number"
                  />
                  <button
                    style={{ width: "80px" }}
                    className="add_to_basket_button"
                  >
                    Check
                  </button>
                </div>
              </div>
            </div>
            <br />
            <hr />
            <br />
            <p
              style={{
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              Overview
            </p>
            <span
              style={{
                display: "inline-flex",
                fontSize: "14px",
                marginTop: "10px",
                lineHeight: "20px",
              }}
            >
              Adorned with bold prints all over, this gown is complemented with
              short sleeves and a round neckline. Tailored from a soft fabric,
              this gown shall ensure superior comfort.
            </span>
            <ul
              style={{
                fontSize: "14px",
                marginLeft: "20px",
                marginTop: "10px",
              }}
            >
              <li>Type : Night gowns</li>
              <li>Design : Printed</li>
              <li>Length : Ankle Length</li>
              <li>Sleeve Length : Half Sleeves</li>
              <li>Fabric : Cotton</li>
              <li>Care Instructions : Machine Wash</li>
              <li>
                Model Wears : Size S,has Height 5'7",Chest 33",and Waist 28"
              </li>
              <li>
                Return Policy : This product is returnable within 30 days of
                delivery
              </li>
              <li>Product : Nightgown</li>
              <li>Country of Origin : India</li>
              <li>
                Manufactured By : Lifestyle Int Pvt Ltd, 77 Degree Town Centre,
                Building No. 3, West Wing, Off HAL Airport Road, Yamlur,
                Bangalore-560037
              </li>
              <li>
                For Consumer Complaints Contact : Manager Commercial,77 Degree
                Town Centre, Building No. 3, West Wing, Off HAL Airport Road,
                Yamlur PO., Bangalore-560037, Phone: 1800-123-1444,
                help.in@maxfashion.com
              </li>
              <li>Net Quantity : 1</li>
            </ul>
            <br />
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
