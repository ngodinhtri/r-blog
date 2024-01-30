import { TableRow } from "@mui/material";
import { StyledTableCell } from "@/components/table/StyledTable.js";
import PropTypes from "prop-types";
import EditNoteOutlinedIcon from "@mui/icons-material/EditNoteOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { CATEGORY_STATUS } from "@/utils/constant.js";
import { IconCellStyled } from "@/components/table/IconCellStyled.js";
import Swal from "sweetalert2";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase-config.js";

export default function ManageCategoryStyledTableRow({ data, refreshPage }) {
  function handhandleDelete(categoryId) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteDoc(doc(db, "categories", categoryId));
        refreshPage();
        Swal.fire({
          title: "Deleted!",
          text: "The category has been deleted.",
          icon: "success",
        });
      }
    });
  }

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
            <IconCellStyled onClick={() => {}}>
              <EditNoteOutlinedIcon fontSize={"small"} />
            </IconCellStyled>
            <IconCellStyled onClick={() => handhandleDelete(item.id)}>
              <DeleteOutlineOutlinedIcon fontSize={"small"} />
            </IconCellStyled>
          </StyledTableCell>
        </TableRow>
      ))}
    </>
  );
}

ManageCategoryStyledTableRow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  refreshPage: PropTypes.func.isRequired,
};
