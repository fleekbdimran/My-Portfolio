
import AdminDashboard from '../assets/AdminDashboard.png'
import ECommerce from '../assets/ECommerce.png'
import Hunt from '../assets/Hunt.png'
import chattingapp from '../assets/chattingapp.png'
import ModernReact from '../assets/ModernReact.png'
import Buffer from '../assets/Buffer.png'
import AdminTenderWise from '../assets/AdminTenderWise.png'
import Tenderuser from '../assets/Tenderuser.png'
import manvan from '../assets/man&Van.jpg'
import Cards from './Cards'


const Projects = () => {

    const projectJson = [
        {
          title: 'Man & Van |Wordpress|',
          desc: '|Theme Customize|',
          image: manvan,
          live: "https://manandvan.theorbit.one/",
          github: ""
        },
        {
          title: 'Tender Wise |React|',
          desc: '|Frontend-Design & Development|',
          image: Tenderuser,
          live: "https://tenderwise.com.bd/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'Tender Wise |React|',
          desc: '|Frontend-Design & Development|',
          image: AdminTenderWise,
          live: "https://admin.tenderwise.com.bd/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'Admin Dashboard |React|',
          desc: '|Frontend-Design|',
          image: AdminDashboard,
          live: "https://finwise-admin-frontend.vercel.app/",
          github: "https://github.com/fleekbdimran/Finwise_Admin_Frontend"
        },
        {
          title: 'ECommerce |React|',
          desc: '|Frontend-Design & Development|',
          image: ECommerce,
          live: "https://react-e-commerce-website12.netlify.app/",
          github: "https://github.com/devchowdhuryjoy/React-E-Commerce-Website"
        },
        {
          title: 'Hunt |HTML, CSS, Bootstrap, Javascript|',
          desc: '|Frontend-Design|',
          image: Hunt,
          live: "https://devchowdhuryjoy.github.io/Hunt/",
          github: "https://github.com/devchowdhuryjoy/Hunt"
        },
        {
          title: 'Chatting App |React + Firebase|',
          desc: '|Frontend-Design & Development|',
          image: chattingapp,
          live: "https://chat-application-14p.pages.dev/",
          github: "https://github.com/chowdhuryimran/Chat-Application"
        },
        {
          title: 'Modern React Website |React|',
          desc: '|Frontend-Design|',
          image: ModernReact,
          live: "https://modern-react-website1.netlify.app/",
          github: "https://github.com/devchowdhuryjoy/Modern-React-Website"
        },
        {
          title: 'Buffer |React|',
          desc: '|Frontend-Design|',
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
