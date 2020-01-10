import React from "react";
import Box from "@material-ui/core/Box";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import TextField from "@material-ui/core/TextField";
import SelectOutlined from "./SelectOutlined";
import Button from "@material-ui/core/Button";

const CheckoutForm = () => {
  return (
    <div>
      <Box
        style={{ display: "flex", background: "#fff", alignItems: "center" }}
      >
        <div style={{ background: "white" }}>
          <KeyboardBackspaceIcon style={styles.backIconStyle} />
        </div>
        <div
          style={{ background: "white", display: "flex", alignItems: "center" }}
        >
          <img
            style={{ width: "50px", height: "50px", background: "white" }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAr4AAALQBAMAAACEV25sAAAAFVBMVEXU1+DS1t/IzdfV2uPP0966wNC1vc1Zb4NSAAAABXRSTlMAjDO97yIXe+cAAAPWSURBVHja7dwxasMwFIDhdIj3khOkV7Bv0GTPEGv2Yt3/CPVUAoWiBETeS77/BPKHeBYItNtJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkhSvod40p6iUul748v3jmya+nVv48jUf+PLly5cvX758+fLly5cvX758+fJt9V3jX1yk9t0+4BS6G+CUvrF1x9M5ve8Yum0D5/Pd/+6J6/f4GblDft+vyB0mvj07TufsvqFXyrdvH3z5mg98+fLly5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+fLly5cvX758+fao8aHLhS9fvnz58uXL9z7ff+D48uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvgF993NrfPlG9C0tuIXvg76ltsX3Id+htsaXL1++fPlmOp+16a7OD3z58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly9fvnz58uXLly/fQL51eV/fRqEtvnz5mr/mL988vk+OL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fPny5cuXL1++fF/FN1ULX758+fLly5cvX758+fLly5cvX7588/sOlS9fvnz5Pv3/NoeOL19JkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkiRJkrr0A/i2RT7SFHaBAAAAAElFTkSuQmCC"
            alt="logo"
          />
          <span style={styles.logoTextStyle}>INFLUENCE</span>
        </div>
      </Box>

      <Box style={styles.inputStyle}>
        <div>
          <TextField
            style={{ width: "70%" }}
            placeholder="39 USD Growth Plan"
            variant="outlined"
          />
          <a href="/" style={styles.linkStyle}>
            Change Plan
          </a>
        </div>
        <form style={styles.formStyle}>
          <TextField label="Card Number" variant="outlined" />
          <TextField label="Card Holder's Name" variant="outlined" />
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <SelectOutlined
              placeholder="MM"
              options={[
                { label: "01", value: 1 },
                { label: "02", value: 2 },
                { label: "03", value: 3 },
                { label: "04", value: 4 },
                { label: "05", value: 5 },
                { label: "06", value: 6 },
                { label: "07", value: 7 },
                { label: "08", value: 8 },
                { label: "09", value: 9 },
                { label: "10", value: 10 },
                { label: "11", value: 11 },
                { label: "12", value: 12 }
              ]}
            />

            <SelectOutlined
              placeholder="YYYY"
              options={[
                { label: "2020", value: 2020 },
                { label: "2021", value: 2021 },
                { label: "2022", value: 2022 },
                { label: "2023", value: 2023 },
                { label: "2024", value: 2024 },
                { label: "2025", value: 2025 },
                { label: "2026", value: 2026 },
                { label: "2027", value: 2027 },
                { label: "2028", value: 2028 },
                { label: "2029", value: 2029 },
                { label: "2030", value: 2030 }
              ]}
            />
            <TextField label="CVV" variant="outlined" />
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              placeholder="Coupon Code"
              variant="outlined"
              style={{ width: "60%" }}
            />
            <Button
              variant="contained"
              style={{ background: "#74c39e", width: "30%", color: "#fff" }}
            >
              Apply
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              style={{
                background: "#2c66c3",
                width: "100%",
                color: "#fff",
                padding: "10px"
              }}
            >
              Checkout
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

const styles = {
  backIconStyle: {
    color: "grey",
    border: "none",
    cursor: "pointer"
  },
  logoTextStyle: {
    color: "grey",
    textTransform: "upper",
    verticalAlign: "middle",
    fontWeight: "bold",
    letterSpacing: "2px"
  },
  inputStyle: {
    display: "inline-block",
    width: "100%",
    padding: "40px"
  },
  linkStyle: {
    fontSize: "14px",
    display: "inline-block",
    color: "black",
    margintLeft: "30px"
    // display: 'flex'
  },
  formStyle: {
    // display: 'flex'{display:'flex', flexDirection:'column'}
    paddingRight: "55px",
    display: "flex",
    flexDirection: "column",
    height: "400px",
    justifyContent: "space-around"
  }
};

export default CheckoutForm;
