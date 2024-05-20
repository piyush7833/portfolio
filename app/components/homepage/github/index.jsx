import React from 'react'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa6'
import Image from 'next/image'
import { personalData } from '@/utils/data/personal-data'
import GitHubCalendar from 'react-github-calendar'

const Github  =async ()=> {
 
  const statsLinks=[
    {
      title:'Repositories',
      link:'https://github-readme-stats.vercel.app/api?username=piyush7833&theme=vue-dark&show_icons=true&hide_border=true&count_private=true'
    },
    {
      title:'Repositories',
      link:'https://api.githubtrends.io/user/svg/piyush7833/repos?time_range=one_year&loc_metric=changed&theme=dark'
    },
    // {
    //   title:'Repositories',
    //   link:'https://awesome-github-stats.azurewebsites.net/user-stats/piyush7833?cardType=level&preferLogin=false&theme=dark'
    // },
    // {
    //   title:'Repositories',
    //   link:'https://github-readme-streak-stats.herokuapp.com/?user=piyush7833&theme=dark'
    // },

  ]
const data=await getStaticProps()
const userData = data.props.user;
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          GITHUB STATS
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>

    <div className="flex w-full items-start justify-center">
      {userData.login && (
        <div>
          <h2>GitHub Contributions Calendar</h2>
          <GitHubCalendar
            username={userData.login}
            blockSize={20}
            blockMargin={2}
            theme={
              {
                "light": [
                  "hsl(0, 0%, 92%)",
                  "rebeccapurple"
                ],
                "dark": [
                  "hsl(0, 0%, 22%)",
                  "hsl(225,92%,77%)"
                ]
              }
            }
          />
        </div>
      )}
    </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="flex justify-center order-1 lg:order-2">
          {statsLinks.map((stat, index) => (
            <Image key={index}
            src={stat.link}
            width={280}
            height={280}
            alt={stat.title}
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            dangerouslyAllowSVG={true}
          />
          ))}
        </div>
      </div>


      <div className="flex justify-center  mt-5 lg:mt-12">
        <Link
          className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
          role="button"
          href="/github"
        >
          <span>View Repos</span>
          <FaArrowRight size={16} />
        </Link>
      </div>
    </div>
  )
}

export default Github

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    }
  );
  // const d=await fetch('https://github-readme-stats.vercel.app/api?username=piyush7833&theme=vue-dark&show_icons=true&hide_border=true&count_private=true')
  const user = await userRes.json();
  const repos_url = user.repos_url;
  // const repoOverview= await fetchRepoData(repos_url);
  return {
    props: { title: 'GitHub', user},
    revalidate: 10,
  };
}

const fetchRepoData = async () => {
  try {
    const response = await axios.get(repos_url);
    const repos = response.data;

    // Calculate total commits and pull requests
    let commits = 0;
    let pullRequests = 0;

    for (const repo of repos) {
      commits += repo.default_branch ? repo.default_branch.commit.commit.count : 0;
      pullRequests += repo.open_issues_count;
    }


    // Extract languages used and their contributions
    const langMap = new Map();

    for (const repo of repos) {
      const response = await axios.get(repo.languages_url);
      const repoLanguages = response.data;

      for (const lang in repoLanguages) {
        if (langMap.has(lang)) {
          langMap.set(lang, langMap.get(lang) + repoLanguages[lang]);
        } else {
          langMap.set(lang, repoLanguages[lang]);
        }
      }
    }

    let languages =(Array.from(langMap.entries()));
    return { commits, pullRequests, languages };
  } catch (error) {
    console.error('Error fetching repository data:', error);
  }
};
