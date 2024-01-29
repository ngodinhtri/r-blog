import styled from "styled-components";
import { TableCell } from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.headLineColor,
    color: theme.highLight,
    fontWeight: 600,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.mainColor,
    fontSize: 14,
  },
}));
