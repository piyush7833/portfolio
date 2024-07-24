// @flow strict
import GitCard from "../components/homepage/github/GitCard";
async function getrepos() {
  let res = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`
    ,{
      cache: "no-store",
    }
    // ,{
    //   headers: {
    //     Authorization: `token ${process.env.GITHUB_API_KEY}`,
    //   },
    // }
  );
  if (!res.ok) {
    console.log(res);
    // throw new Error('Failed to fetch data')
  }
  const data = await res.json();
  return data;
}

async function page() {
  let repos = await getrepos();
  repos =
    repos &&
    repos.length > 0 &&
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
  return (
    <div className="py-8">
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md">
            All Repositories
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {repos ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {repos && repos.map((repo, i) => <GitCard repo={repo} key={i} />)}
        </div>
      ) : (
        <div className="flex justify-center items-center h-96 w-full">
          <h1 className="text-2xl text-center">No repositories found</h1>
        </div>
      )}
    </div>
  );
}

export default page;
