
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";

const ProjectCard = ({ title, description, url, image }: { title: string; description: string; url: string; image?: string }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex flex-col bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-purple-500 transition-colors w-80 mx-4"
    style={{ minHeight: "350px" }}
  >
    <div className="w-full h-40 bg-gray-800 rounded mb-4 flex items-center justify-center overflow-hidden">
      {image ? (
        <Image src={image} alt={title + ' image'} width={320} height={160} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
      ) : (
        <span className="text-gray-500">Image Placeholder</span>
      )}
    </div>
    <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
    <p className="text-gray-400 mb-4">{description}</p>
    <span className="text-purple-400 underline mt-auto">Visit Project</span>
  </a>
);

const ProjectsPage = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <div className="flex-1 w-full flex flex-col items-center justify-center pt-32">
          <h1 className="text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg text-gray-400 mb-8">Showcase of my work and portfolio projects will appear here.</p>
          <div className="flex flex-col gap-6">
            <div className="flex flex-row flex-wrap justify-center items-stretch gap-6">
              <ProjectCard
                title="The Aid Grid Worker"
                description="A live project deployed on Netlify. Explore the features and UI by visiting the site."
                url="https://theaidgrid-worker.netlify.app/"
                image="/aid.jpg"
              />
              <ProjectCard
                title="The Aid Grid"
                description="Main Aid Grid project deployed on Netlify. Visit to see the full application."
                url="https://theaidgrid.netlify.app/"
                image="/aid.jpg"
              />
              <ProjectCard
                title="Your Mini Shop"
              description="A mini e-commerce shop project deployed on Netlify. Browse products and experience the shop."
                url="https://yourminishop.netlify.app/"
                image="/salsa.png"
              />
            </div>
            <div className="flex flex-row flex-wrap justify-center items-stretch gap-6">
              <ProjectCard
                title="Sidcup Family"
              description="A family and community website project. Explore the features and design by visiting the site."
                url="https://sagarkumar62.github.io/sidcupfamily/"
                image="/sidcup.png" // Replace with actual image if available, else will show placeholder
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsPage;
