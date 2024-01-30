import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/firebase/firebase-config.js";
import { StyledTableCell } from "@/components/table/StyledTable.js";
import { LoadingSpinner } from "@/components/loading/index.js";
import ManageCategoryStyledTableRow from "@/components/table/ManageCategoryStyledTableRow.jsx";
import { Button } from "@/components/button/index.js";

const rowsPerPage = 10;
const initialQuery = query(
  collection(db, "categories"),
  orderBy("createdAt", "desc"),
);
export default function ManageCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(initialQuery);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    (async function getCategories() {
      const arr = [];

      const categorySnapshots = await getDocs(currentQuery);
      categorySnapshots.forEach((doc) => {
        const category = {
          id: doc.id,
          ...doc.data(),
        };

        arr.push(category);
      });

      for (let category of arr) {
        category.createdAt = new Date(
          Number(category.createdAt.seconds) * 1000,
        ).toLocaleString("en-US");
      }

      setCategories(arr);
      setIsLoading(false);
    })();
  }, [currentQuery, isLoading]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {categories.length > 0 ? (
        <>
          <Button
            to={"/manage/add-category"}
            style={{ float: "right", width: "300px", marginBottom: "30px" }}
          >
            Add new
          </Button>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="categories table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Slug</StyledTableCell>
                  <StyledTableCell align="right">Created at</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ManageCategoryStyledTableRow
                  data={categories.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )}
                  refreshPage={() => setIsLoading(true)}
                />
              </TableBody>
              <TableFooter></TableFooter>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={categories.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
          />
        </>
      ) : (
        "Not have a category yet!"
      )}
    </>
  );
}
