import Image from "next/image"

const skills = [
  {
    name: 'Typescript',
    img: '/typescript.avif',
  },
  {
    name: 'Javascript',
    img: '/javascript.avif',
  },
  {
    name: 'React',
    img: '/react.png',
  },
  {
    name: 'Redux',
    img: '/redux.avif',
  },
  {
    name: 'Next.js',
    img: '/nextjs.png',
  },
  {
    name: 'Angular',
    img: '/angular.avif',
  },
  {
    name: 'NodeJs',
    img: '/nodejs2.avif',
  },
  {
    name: 'ExpressJs',
    img: '/expressjs.png',
  },
  {
    name: 'MongoDB',
    img: '/mongo2.avif',
  },
  {
    name: 'PostgreSQL',
    img: '/postgresql.avif',
  },
  {
    name: 'GitHub',
    img: '/github.avif',
  },
  {
    name: 'Git',
    img: '/git.avif',
  },
  {
    name: 'Powershell',
    img: '/powershell.avif',
  },
  {
    name: 'Office',
    img: '/office2.avif',
  },
  {
    name: 'GraphQL',
    img: '/graphql.avif',
  },
  {
    name: 'Networking',
    img: '/networking.avif',
  },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Vlad and I am a{" "}
              <span className="font-bold text-pink-800">{"highly ambitious"}</span>,
               Web Developer
              based in <b>Timisoara</b>, Romania.
            </p>
            <br />
            <p>
              I am in the last year of university , with a BS in Informatics and have been working in this field 
              for more than a year.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From playing sports, traveling,
              I am always seeking new experiences and love to keep myself
              engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-pink-800">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and am
              always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <div key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                    <p className=''>{item.name}</p>
                    <Image src={item.img} alt="img" height={30} width={30}/>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
