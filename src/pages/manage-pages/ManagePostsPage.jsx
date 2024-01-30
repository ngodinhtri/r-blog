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
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, getDocFromDB } from "@/firebase/firebase-config.js";
import { StyledTableCell } from "@/components/table/StyledTable.js";
import ManagePostStyledTableRow from "@/components/table/ManagePostStyledTableRow.jsx";
import { useAuth } from "@/contexts/useAuth.jsx";
import { LoadingSpinner } from "@/components/loading/index.js";

const rowsPerPage = 10;

export default function ManagePostsPage() {
  const { user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [currentQuery, setCurrentQuery] = useState(null);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  useEffect(() => {
    if (!user) return;
    setCurrentQuery(
      query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        where("author", "==", user.uid),
      ),
    );
  }, [user]);

  useEffect(() => {
    if (!currentQuery) return;

    (async function getPosts() {
      const arr = [];

      const postSnapshots = await getDocs(currentQuery);
      postSnapshots.forEach((doc) => {
        const post = {
          id: doc.id,
          ...doc.data(),
        };

        arr.push(post);
      });

      for (let post of arr) {
        post.createdAt = new Date(
          Number(post.createdAt.seconds) * 1000,
        ).toLocaleString("en-US");
        post.category = (await getDocFromDB("categories", post.category)) || {
          name: "",
        };
      }

      setPosts(arr);
      setIsLoading(false);
    })();
  }, [currentQuery]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      {posts.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="posts table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Title</StyledTableCell>
                  <StyledTableCell align="right">Status</StyledTableCell>
                  <StyledTableCell align="right">Hot</StyledTableCell>
                  <StyledTableCell align="right">Created at</StyledTableCell>
                  <StyledTableCell align="right">Category</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ManagePostStyledTableRow
                  data={posts.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage,
                  )}
                />
              </TableBody>
              <TableFooter></TableFooter>
            </Table>
          </TableContainer>
          <TablePagination
            component="div"
            count={posts.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[]}
          />
        </>
      ) : (
        "Not have a post yet!"
      )}
    </>
  );
}
