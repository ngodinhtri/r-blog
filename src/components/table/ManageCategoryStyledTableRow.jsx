import { TableRow } from "@mui/material";
import { StyledTableCell } from "@/components/table/StyledTable.js";
import PropTypes from "prop-types";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { CATEGORY_STATUS } from "@/utils/constant.js";

export default function ManageCategoryStyledTableRow({ data }) {
  return (
    <>
      {data.map((item) => (
        <TableRow
          key={item.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell>{item.name}</StyledTableCell>
          <StyledTableCell align="right">
            {item.status == CATEGORY_STATUS.approved
              ? "Approved"
              : "Unapproved"}
          </StyledTableCell>
          <StyledTableCell align="right">{item.slug}</StyledTableCell>
          <StyledTableCell align="right">{item.createdAt}</StyledTableCell>
          <StyledTableCell align="right">
            <EditNoteOutlinedIcon fontSize={"small"} />
            <DeleteOutlineOutlinedIcon fontSize={"small"} />
          </StyledTableCell>
        </TableRow>
      ))}
    </>
  );
}

ManageCategoryStyledTableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
