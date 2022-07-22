import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

export const DebitComp = () => {
  return (
    <>
      <div></div>
      <form>
      <div>
        <TextField variant="standard" label="Card Number" />
        <div>
          <TextField variant="standard" label="Valid(mm/yy)" />
          <TextField variant="standard" label="CVV" />
        </div>
        <TextField variant="standard" label="Name On Card" />
      </div>
      <FormControlLabel  control={<Checkbox />} color="sucess" label="Disabled" />
      <div>This transaction you make is totally secure. We don't save your CVV number.</div>
      <Button type="submit" variant="contained">Pay 1098</Button>
      </form>
    </>
  );
};
