import Heading from "../../components/Heading";

export const metadata = {
	title:"About"
  }

export default function NotFoundPage() {
	return (
	  <div className="flex flex-col justify-center items-center">
		<Heading>Not Found</Heading>
		<p>
			Oops, the page you requested only exists in a parallel universe.
		</p>
	  </div>
	)
  }