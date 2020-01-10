import React from "react";
import {
  Box,
  makeStyles,
  createStyles,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@material-ui/core";

const SelectOutlined = props => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const inputLabel = React.useRef(null);
  const { onChange, placeholder, options, defaultValue, none } = props;

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          classes={{ shrink: classes.shrink }}
          ref={inputLabel}
          id="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined-label"
        >
          {placeholder}
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={defaultValue}
          onChange={
            onChange ? event => onChange(event.target.value) : handleChange
          }
        >
          {none && <MenuItem value={null}>none</MenuItem>}
          {options ? (
            options.map((item, index) => (
              <MenuItem value={item.value}>{item.label}</MenuItem>
            ))
          ) : (
            <MenuItem value={1}>ten</MenuItem>
          )}
        </Select>
      </FormControl>
    </Box>
  );
};

const useStyles = makeStyles(theme =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    shrink: {
      transform: "translate(3px, -15px) scale(0.75)"
    }
  })
);

export default SelectOutlined;
