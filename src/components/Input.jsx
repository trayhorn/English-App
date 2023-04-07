import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function Form() {
  const [inputResult, setInputResult] = useState("");
  
  const handleChange = e => {
    setInputResult(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputResult);
  }

	return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={inputResult}
        onChange={handleChange}
      />
    </form>
  );
}
