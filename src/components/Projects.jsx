
import AdminDashboard from '../assets/AdminDashboard.png'
import ECommerce from '../assets/ECommerce.png'
import Hunt from '../assets/Hunt.png'
import chattingapp from '../assets/chattingapp.png'
import ModernReact from '../assets/ModernReact.png'
import Buffer from '../assets/Buffer.png'
import AdminTenderWise from '../assets/AdminTenderWise.png'
import Tenderuser from '../assets/Tenderuser.png'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Tender Wise (User)',
          desc: 'Their professionalism and dedication to our project were outstanding.',
          image: Tenderuser,
          live: "https://tenderwise.com.bd/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'Tender Wise (Admin)',
          desc: 'Phone:01618657265 Pass:Imran@65 Their professionalism and dedication to our project were outstanding.',
          image: AdminTenderWise,
          live: "https://admin.tenderwise.com.bd/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'Admin Dashboard (Design)',
          desc: 'Email:admin@example.com Pass:1234. Their professionalism and dedication to our project were outstanding.',
          image: AdminDashboard,
          live: "https://finwise-admin-frontend.vercel.app/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'ECommerce',
          desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
          image: ECommerce,
          live: "https://react-e-commerce-website12.netlify.app/",
          github: "https://github.com/devchowdhuryjoy/React-E-Commerce-Website"
        },
        {
          title: 'Hunt',
          desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
          image: Hunt,
          live: "https://devchowdhuryjoy.github.io/Hunt/",
          github: "https://github.com/devchowdhuryjoy/Hunt"
        },
        {
          title: 'Chatting App',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: chattingapp,
          live: "https://chat-application-14p.pages.dev/",
          github: "https://github.com/chowdhuryimran/Chat-Application"
        },
        {
          title: 'Modern React Website',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: ModernReact,
          live: "https://modern-react-website1.netlify.app/",
          github: "https://github.com/devchowdhuryjoy/Modern-React-Website"
        },
        {
          title: 'Buffer',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: Buffer,
          live: "https://bf-react-project.vercel.app/",
          github: "https://github.com/devchowdhuryjoy/BF-React-Project"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
