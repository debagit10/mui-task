import React, { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type Skills = {
  id: number;
  label: string;
};

const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [values, setValues] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skills | null>(null);
  console.log({ skill });

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={values}
        onChange={(event: any, newValue: string | null) => setValues(newValue)}
        freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(event: any, newValue: Skills | null) => setSkill(newValue)}
      />
    </Stack>
  );
};

export default MuiAutoComplete;
