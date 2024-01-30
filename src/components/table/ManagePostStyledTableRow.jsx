import { TableRow } from "@mui/material";
import { StyledTableCell } from "@/components/table/StyledTable.js";
import PropTypes from "prop-types";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { POST_STATUS } from "@/utils/constant.js";
import { IconCellStyled } from "@/components/table/IconCellStyled.js";

export default function ManagePostStyledTableRow({ data }) {
  return (
    <>
      {data.map((item) => (
        <TableRow
          key={item.id}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <StyledTableCell>{item.title}</StyledTableCell>
          <StyledTableCell align="right">
            {item.status === POST_STATUS.approved
              ? "Approved"
              : item.status === POST_STATUS.pending
                ? "Pending"
                : "Reject"}
          </StyledTableCell>
          <StyledTableCell align="right">
            {item.hot ? "✅" : ""}
          </StyledTableCell>
          <StyledTableCell align="right">{item.createdAt}</StyledTableCell>
          <StyledTableCell align="right">{item.category.name}</StyledTableCell>
          <StyledTableCell align="right">
            <IconCellStyled>
              <EditNoteOutlinedIcon fontSize={"small"} />
            </IconCellStyled>
            <IconCellStyled>
              <DeleteOutlineOutlinedIcon fontSize={"small"} />
            </IconCellStyled>
          </StyledTableCell>
        </TableRow>
      ))}
    </>
  );
}

ManagePostStyledTableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  // handleEdit: PropTypes.func.isRequired,
  // handleDelete: PropTypes.func.isRequired,
};
