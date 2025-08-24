import React from "react";

// Main App component to contain the entire application.
const App = () => {
  return (
    <div id="aboutme" className="bg-gray-900 min-h-screen flex items-center justify-center font-inter text-gray-100 p-4 sm:p-6">
      <Aboutme />
      <StyleInjector />
    </div>
  );
};

// About Me Section
const Aboutme = () => {
  return (
    <section id="about" className="flex flex-col items-center justify-center w-full">
      <h2 className="text-1xl mb-8 text-white">
        About Me
      </h2>
      <ProfileCard />
    </section>
  );
};

// Profile Card
const ProfileCard = () => {
  const socialLinks = [
    {
      href: "https://instagram.com/ankiiitt____",
      svg: (
        <svg
          className="p-1.5 w-9 h-9 btn-svg text-pink-600 hover:text-red-900"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.5 2C4.462 2 2 4.462 2 7.5v9C2 19.538 4.462 22 7.5 22h9c3.038 0 5.5-2.462 5.5-5.5v-9C22 4.462 19.538 2 16.5 2h-9zM12 7a5 5 0 110 10 5 5 0 010-10zm6.75-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 9a3 3 0 100 6 3 3 0 000-6z" />
        </svg>
      ),
    },
    {
      href: "https://wa.me/+919617486475", // your WhatsApp number
      svg: (
        <svg
          className="p-1.5 w-9 h-9 btn-svg text-green-500"
          fill="currentColor"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.027 2.002c-7.733 0-14 6.267-14 14 0 2.463.642 4.873 1.865 7.003l-1.954 7.134 7.32-1.927A13.938 13.938 0 0016.027 30c7.733 0 14-6.267 14-14s-6.267-14-14-14zm0 2c6.629 0 12 5.371 12 12s-5.371 12-12 12a11.92 11.92 0 01-6.101-1.67l-.431-.257-4.293 1.129 1.144-4.177-.277-.442A11.923 11.923 0 014.027 16c0-6.629 5.371-12 12-12zm5.773 6.238c-.295-.656-.605-.671-.885-.683-.229-.01-.49-.01-.75-.01s-.686.099-1.049.49c-.362.391-1.379 1.348-1.379 3.29s1.411 3.814 1.606 4.078c.196.265 2.71 4.345 6.694 5.914.936.404 1.667.645 2.236.827.938.298 1.791.256 2.463.154.752-.112 2.31-.944 2.637-1.857.325-.914.325-1.696.229-1.857-.098-.162-.363-.259-.752-.452s-2.31-1.142-2.667-1.269c-.356-.126-.615-.19-.875.191-.26.382-1.007 1.269-1.235 1.529-.229.26-.456.293-.844.107-.39-.186-1.644-.606-3.135-1.934-1.158-1.034-1.936-2.31-2.164-2.692-.229-.382-.024-.588.171-.773.176-.174.39-.455.586-.682.195-.227.26-.382.39-.636.13-.255.065-.49-.033-.682-.097-.191-.864-2.123-1.182-2.898z" />
        </svg>
      ),
    },
    {
      href: "https://github.com/Ankit-webtech",
      svg: (
        <svg
          className="p-1.5 w-9 h-9 btn-svg hover:text-gray-100"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.76-1.604-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.465-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.292-1.552 3.296-1.23 3.296-1.23.648 1.653.243 2.873.12 3.176.77.84 1.232 1.912 1.232 3.222 0 4.61-2.803 5.625-5.475 5.92.43.372.823 1.102.823 2.222v3.293c0 .322.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      href: "https://www.linkedin.com/in/ankitnagar7/",
      svg: (
        <svg
          className="p-1.5 w-9 h-9 btn-svg text-blue-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.447 20.452H16.89V14.8c0-1.345-.027-3.078-1.874-3.078-1.875 0-2.162 1.463-2.162 2.976v5.755H9.298V9h3.4v1.561h.048c.474-.9 1.637-1.847 3.37-1.847 3.6 0 4.268 2.37 4.268 5.455v6.283zM5.337 7.433c-1.088 0-1.972-.884-1.972-1.972 0-1.088.884-1.972 1.972-1.972 1.088 0 1.972.884 1.972 1.972 0 1.088-.884 1.972-1.972 1.972zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="group relative w-[20rem] h-[30rem] bg-gray-100 rounded-xl text-center transition-all duration-500 hover:shadow-2xl hover:bg-cyan-500">
      <div className="h-2.5 w-4/5 mx-auto bg-cyan-500 rounded-b-3xl transition-all duration-300 group-hover:h-0"></div>

      <div className="flex justify-center items-center w-[70px] h-[70px] bg-gray-500 rounded-full mx-auto my-[30px] transition-all duration-500 text-sm group-hover:w-full group-hover:h-2/6 group-hover:rounded-t-xl group-hover:rounded-b-none group-hover:my-0 group-hover:bg-gray-100 relative z-10">
        <span className="font-bold text-gray-100 group-hover:text-gray-900 transition-all duration-500">
          Ankit
        </span>
      </div>

      <h2 className="p-4 text-2xl transition-all duration-100 group-hover:opacity-0 absolute inset-x-0 bottom-4 text-gray-900">
        Ankit
        <br />
        <span className="text-lg">Passionate</span>
      </h2>

      <p className="absolute left-8 right-8 text-white opacity-0 transition-all duration-700 group-hover:opacity-100 z-10 text-xl">
        I am a passionate Full-Stack Developer who loves building modern, interactive, and user-friendly web applications.
      </p>

      {/* Social Icons */}
      <div className="absolute bottom-4 left-8 right-8 flex justify-center space-x-2 opacity-0 transition-all duration-700 group-hover:opacity-100 z-10">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="button flex-center"
          >
            {link.svg}
          </a>
        ))}
      </div>
    </div>
  );
};

// Custom CSS
const customCSS = `
.button {
  cursor: pointer;
  text-decoration: none;
  color: #ffff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #2d2e32;
  border: 2px solid #2d2e32;
  transition: all 0.45s;
}

.button:hover {
  transform: rotate(360deg);
  background-color: #ffff;
  color: red;
}

.button:hover .btn-svg {
  filter: invert(100%);
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

// Style Injector
const StyleInjector = () => {
  return <style dangerouslySetInnerHTML={{ __html: customCSS }} />;
};

export default App;
