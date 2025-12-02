import React, { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PageContainer, ComponentWrapper } from "../components/shared";

const categories = ["테크", "헬스케어", "교육", "게임", "기타"];

const CreateProjectPage = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [goal, setGoal] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ title, description, goal, category });
    alert("프로젝트가 등록되었습니다!");
    navigate("/home");
  };

  const inputStyle = {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
    },
  };

  const btnStyle = {
    px: 3,
    py: 1.5,
    borderRadius: "12px",
    fontWeight: "medium",
    textTransform: "none",
    background: "linear-gradient(to right, #212121, #424242)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(to right, #424242, #616161)",
    },
  };

  return (
    <PageContainer>
      <ComponentWrapper sx={{ mt: 15, mb: 15 }}>
        <Typography variant="h5" fontWeight="bold" mb={2}>
          프로젝트 등록
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="프로젝트 제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            sx={inputStyle}
            required
          />
          <TextField
            label="프로젝트 설명"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={4}
            sx={inputStyle}
            required
          />
          <TextField
            label="목표 금액 (ETH)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            fullWidth
            type="number"
            sx={inputStyle}
            required
          />
          <TextField
            select
            label="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            sx={inputStyle}
            required
          >
            {categories.map((cat) => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>

          <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" sx={btnStyle}>
              프로젝트 등록
            </Button>
          </Box>
        </form>
      </ComponentWrapper>
    </PageContainer>
  );
};

export default CreateProjectPage;
