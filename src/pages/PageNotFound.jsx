import { Link } from "react-router-dom"

import PageNotFoundImage from "../assets/images/pagenotfound.png"
import { Button } from "../components/"
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = ({pageTitle}) => {
  useTitle(pageTitle);

  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4">
        <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, Oops!</p>
        <div className="max-w-2xl">
          <img className="rounded" src={PageNotFoundImage} alt="A person holds a clapboard in front of their face" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    </section>
  )
}
