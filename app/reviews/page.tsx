import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

export const metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 8;


export default async function ReviewPage({ searchParams }) {
  const page = parsePageParam(searchParams.page ? parseInt(searchParams.page) : 1);
  const {reviews, pageCount} = await getReviews(PAGE_SIZE, page);
  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3">
        <PaginationBar page={page} pageCount={pageCount} href="/reviews"/>
        <SearchBox />
      </div>
      
      <ul className="flex flex-row flex-wrap gap-3 justify-center">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="border border-stone-700 w-80 bg-stone-700 rounded shadow shadow-stone-300 hover:shadow-md hover:shadow-stone-300"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                priority={index === 0}
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

function parsePageParam(paramValue) {
  if(paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}