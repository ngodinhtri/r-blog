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
import { Input } from "@/components/input/";
import styled from "styled-components";
import { debounce } from "lodash";

const rowsPerPage = 10;

const CategoriesHeaderStyled = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  margin-bottom: 30px;
`;

export default function ManageCategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    (async function getCategories() {
      const arr = [];
      const regex = new RegExp(search, "gi");

      const categorySnapshots = await getDocs(
        query(collection(db, "categories"), orderBy("createdAt", "desc")),
      );

      categorySnapshots.forEach((doc) => {
        const category = {
          id: doc.id,
          ...doc.data(),
        };

        if (category.name.match(regex)) arr.push(category);
      });

      for (let category of arr) {
        category.createdAt = new Date(
          Number(category.createdAt.seconds) * 1000,
        ).toLocaleString("en-US");
      }

      setCategories(arr);
      setIsLoading(false);
    })();
  }, [isLoading, search]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {categories.length > 0 ? (
        <>
          <CategoriesHeaderStyled>
            <Button to={"/manage/add-category"} style={{ width: "300px" }}>
              Add new
            </Button>
            <Input
              placeholder={"Search categories..."}
              onChange={debounce((e) => setSearch(e.target.value), 500)}
            />
          </CategoriesHeaderStyled>
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
