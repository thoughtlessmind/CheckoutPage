import React from "react";
import "./styles.css";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CheckoutForm from "./CheckoutForm";

const CheckoutPage = () => {
  return (
    <Grid container spacing={0} className="clearSide">
      <Grid md={8} conatiner spacing={0} className="clearSide">
        <Box>
          <img
            src="https://cdn.pixabay.com/photo/2016/10/22/10/07/background-1760270_960_720.jpg"
            alt="background"
            style={{ width: "100%" }}
          />
        </Box>
      </Grid>

      <Grid md={4} conatiner spacing={0} className="clearSide">
        <Box>
          <CheckoutForm />
        </Box>
      </Grid>
    </Grid>
  );
};

const styles = {
  mainStyle: {
    display: "flex",
    maxWidth: "100vw"
  }
};

export default CheckoutPage;
