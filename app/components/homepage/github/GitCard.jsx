// @flow strict
import { timeConverter } from "@/utils/time-converter";
import Image from "next/image";
import Link from "next/link";
import { BsEyeFill, BsHeartFill, BsStarFill } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { ProjectImage } from "@/utils/project-image";
import { GenerateImage } from "@/utils/genrate-image";
function GitCard({ repo }) {
  const img = ProjectImage(repo.name);
  const img2 = GenerateImage(repo.name);
  return (
    <Link
      href={repo.html_url}
      target="_blank"
      className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
    >
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        {repo?.avatar_url || img ? (
          <Image
            src={repo?.avatar_url || img}
            height={1080}
            width={1920}
            alt=""
            className="h-full w-full group-hover:scale-110 transition-all duration-300"
          />
        ) : (
          <div className="h-full w-full group-hover:scale-110 transition-all duration-300">{img2}</div>
        )}
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(repo.created_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsStarFill />
              <span>{repo.stargazers_count}</span>
            </p>
            <p className="flex items-center gap-1">
              <CgGitFork />
              <span>{repo.forks_count}</span>
            </p>
            <p className="flex items-center gap-1">
              <BsEyeFill />
              <span>{repo.watchers}</span>
            </p>
          </div>
        </div>
        <Link target="_blank" href={repo.html_url}>
          <p className="my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500">
            {repo.name}
          </p>
        </Link>
        {/* <p className='mb-2 text-sm text-[#16f2b3]'>
          {`${repo.reading_time_minutes} Min Read`}
        </p> */}
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {repo.description}
        </p>
        {/* <div className="">
          <Link target='_blank' href={repo.url}>
            <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
              Read More
            </button>
          </Link>
        </div> */}
      </div>
    </Link>
  );
}

export default GitCard;
