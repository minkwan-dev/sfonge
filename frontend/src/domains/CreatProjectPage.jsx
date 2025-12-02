import React, { useState } from "react";
import { Box, Button, TextField, Typography, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PageContainer, ComponentWrapper } from "../components/shared";

const categories = [
  "EdTech",
  "FinTech",
  "DeepTech",
  "Blockchain",
  "Agriculture",
  "Platform",
  "Sustainability",
  "Healthcare",
  "Aerospace",
  "Entertainment",
  "Robotics",
  "FoodTech",
  "Mobility",
  "기타",
];

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

  const FOCUS_COLOR = "#424242";

  const inputStyle = {
    mb: 3,
    "& .MuiOutlinedInput-root": {
      borderRadius: "12px",
      "&.Mui-focused fieldset": {
        borderColor: FOCUS_COLOR,
        borderWidth: "2px",
      },
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: FOCUS_COLOR,
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

  const MenuProps = {
    disableScrollLock: true,
    PaperProps: {
      sx: {
        borderRadius: "12px",
        mt: 0.5,
      },
    },
    disablePortal: true,
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
            placeholder="우리 팀이 만든 혁신적인 프로젝트의 이름을 알려주세요."
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
            placeholder="프로젝트의 목적, 기대 효과, 핵심 기능을 자세히 적어주시면 좋아요."
          />
          <TextField
            label="목표 금액 (ETH)"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            fullWidth
            type="number"
            sx={inputStyle}
            required
            placeholder="몇 ETH를 모금하고 싶으신가요? (숫자만 입력)"
            inputProps={{ min: "0" }}
          />
          <TextField
            select
            label="카테고리"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            sx={inputStyle}
            required
            placeholder="프로젝트가 어떤 분야에 해당되나요?"
            SelectProps={{
              MenuProps: MenuProps,
            }}
          >
            {categories.map((cat) => (
              <MenuItem
                key={cat}
                value={cat}
                sx={{ borderRadius: "8px", mx: 1, my: 0.5 }}
              >
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
