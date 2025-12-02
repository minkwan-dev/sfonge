import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import GroupIcon from "@mui/icons-material/Group";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import { investInProject } from "../../utils/contract-interactions";

const ProgressBar = ({ goal, raised, progress, investors }) => (
  <Box sx={{ width: "100%", mb: 2 }}>
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.875rem",
        mb: 0.5,
      }}
    >
      <Typography variant="body2" color="grey.600">
        Goal: {goal}
      </Typography>
      <Typography variant="body2" fontWeight="semibold">
        {progress}%
      </Typography>
    </Box>

    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 10,
        borderRadius: 5,
        bgcolor: "grey.200",
        "& .MuiLinearProgress-bar": {
          background: "linear-gradient(to right, #212121, #424242)",
          borderRadius: 5,
        },
      }}
    />

    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.875rem",
        mt: 0.5,
      }}
    >
      <Typography variant="body2" color="grey.600">
        Raised: {raised}
      </Typography>
      <Typography
        variant="body2"
        color="grey.600"
        sx={{ display: "flex", alignItems: "center", gap: 0.5 }}
      >
        <GroupIcon sx={{ width: 14, height: 14 }} />
        {investors}
      </Typography>
    </Box>
  </Box>
);

const StartupCard = ({ startup, connected }) => {
  const theme = useTheme();
  const [openInvestDialog, setOpenInvestDialog] = useState(false);
  const [investAmount, setInvestAmount] = useState("");
  const [isInvesting, setIsInvesting] = useState(false);

  const handleInvestClick = () => {
    setOpenInvestDialog(true);
  };

  const handleInvestConfirm = async () => {
    if (!investAmount || parseFloat(investAmount) <= 0)
      return alert("올바른 투자 금액을 입력해주세요.");

    setIsInvesting(true);
    try {
      await investInProject(startup.id, investAmount);
      alert(`${investAmount} ETH 투자가 완료되었습니다!`);
      setOpenInvestDialog(false);
      setInvestAmount("");
    } catch (error) {
      alert(error.message || "투자에 실패했습니다.");
    } finally {
      setIsInvesting(false);
    }
  };

  const handleInvestCancel = () => {
    setOpenInvestDialog(false);
    setInvestAmount("");
  };

  return (
    <Box
      sx={{
        bgcolor: "white",
        border: "1px solid grey.200",
        borderRadius: "16px",
        overflow: "hidden",
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: theme.shadows[6] },
      }}
      className="card"
    >
      <Box
        sx={{
          position: "relative",
          height: 224,
          overflow: "hidden",
          bgcolor: "grey.50",
        }}
      >
        <Box
          component="img"
          src={startup.image}
          alt={startup.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.5s",
            ".card:hover &": { transform: "scale(1.1)" },
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            bgcolor: "white",
            px: 1.5,
            py: 0.5,
            borderRadius: "8px",
            fontSize: "0.75rem",
            fontWeight: "semibold",
            border: "1px solid grey.200",
            boxShadow: theme.shadows[2],
          }}
        >
          {startup.category}
        </Box>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography variant="h6" fontWeight="semibold" mb={0.5}>
          {startup.title}
        </Typography>

        <Typography variant="body2" color="grey.600" mb={3}>
          {startup.description}
        </Typography>

        <ProgressBar
          goal={startup.goalAmount}
          raised={startup.raisedAmount}
          progress={startup.progress}
          investors={startup.investorCount}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            pt: 2,
            borderTop: "1px solid grey.100",
          }}
        >
          <Typography
            variant="caption"
            color="grey.500"
            sx={{ fontFamily: "monospace" }}
          >
            {startup.owner}
          </Typography>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Button
              disabled={!connected}
              variant="outlined"
              disableElevation
              sx={{
                gap: 0.5,
                px: 2,
                py: 1,
                borderRadius: "12px",
                fontSize: "0.875rem",
                fontWeight: "semibold",
                textTransform: "none",
                borderColor: "grey.200",
                color: "grey.700",
                opacity: !connected ? 0.5 : 1,
              }}
            >
              <SportsScoreIcon sx={{ width: 16, height: 16 }} />
              Interested
            </Button>

            <Button
              disabled={!connected}
              variant="contained"
              disableElevation
              onClick={handleInvestClick}
              sx={{
                gap: 0.5,
                px: 2,
                py: 1,
                borderRadius: "12px",
                fontSize: "0.875rem",
                fontWeight: "semibold",
                textTransform: "none",
                background: connected
                  ? "linear-gradient(to right, #212121, #424242)"
                  : "grey.100",
                color: connected ? "white" : "grey.400",
              }}
            >
              <SendIcon sx={{ width: 16, height: 16 }} />
              Invest
            </Button>
          </Box>
        </Box>
      </Box>

      <Dialog open={openInvestDialog} onClose={handleInvestCancel}>
        <DialogTitle sx={{ fontWeight: "bold", color: "grey.800" }}>
          프로젝트에 투자하기
        </DialogTitle>
        <DialogContent>
          <Box sx={{ pt: 2 }}>
            <Typography variant="body2" color="grey.700" mb={2}>
              {startup.title}에 투자할 금액을 입력하세요(ETH)
            </Typography>
            <TextField
              autoFocus
              fullWidth
              label="투자 금액 (ETH)"
              type="number"
              value={investAmount}
              onChange={(e) => setInvestAmount(e.target.value)}
              inputProps={{ step: "0.01", min: "0" }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "12px",
                  "&.Mui-focused fieldset": {
                    borderColor: "grey.700",
                  },
                },
                "& .MuiInputLabel-root": {
                  "&.Mui-focused": {
                    color: "grey.700",
                  },
                },
              }}
            />
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button
            onClick={handleInvestCancel}
            disabled={isInvesting}
            variant="outlined"
            disableElevation
            sx={{
              gap: 0.5,
              px: 2,
              py: 1,
              borderRadius: "12px",
              fontSize: "0.875rem",
              fontWeight: "semibold",
              textTransform: "none",
              borderColor: "grey.200",
              color: "grey.700",
            }}
          >
            취소
          </Button>

          <Button
            onClick={handleInvestConfirm}
            variant="contained"
            disabled={isInvesting}
            disableElevation
            sx={{
              gap: 0.5,
              px: 2,
              py: 1,
              borderRadius: "12px",
              fontSize: "0.875rem",
              fontWeight: "semibold",
              textTransform: "none",
              background: "linear-gradient(to right, #212121, #424242)",
              color: "white",
            }}
          >
            {isInvesting ? "투자 중..." : "투자하기"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default StartupCard;
