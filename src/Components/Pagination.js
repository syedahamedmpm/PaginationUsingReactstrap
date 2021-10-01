import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginating = (props) => {
    const{pageSize,NoOfValuesInArray,currentPage,onPageChange}=props;
    const pagesCount=NoOfValuesInArray/pageSize;

  return (
    <div>
    <Pagination aria-label="Page navigation example">
    <PaginationItem>
          <PaginationLink  href="#" onClick={()=>onPageChange(0)}>First
        </PaginationLink>
        </PaginationItem>
    <PaginationItem disabled={currentPage<=0}>
          <PaginationLink  href="#" onClick={()=>onPageChange(currentPage-1)}>Prev
        </PaginationLink>
        </PaginationItem>
      {
          [...Array(pagesCount)].map((page,index)=>(
            <PaginationItem key={index} className={index === currentPage ? 'page-item active':'page-item'}>
          <PaginationLink  href="#" onClick={()=>onPageChange(index)} >
          {index + 1}
        </PaginationLink>
        </PaginationItem>
        ))}
        <PaginationItem disabled={currentPage>=pagesCount-1}>
          <PaginationLink  href="#" onClick={()=>onPageChange(currentPage+1)}>Next
        </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink  href="#" onClick={()=>onPageChange(pagesCount-1)}>Last
        </PaginationLink>
        </PaginationItem>
    </Pagination>
    </div>
  );
}

export default Paginating;