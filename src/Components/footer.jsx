import React from "react";

const Footer = () => {
  return (
    <footer className="footer flex flex-nowrap items-center p-4 bg-neutral text-neutral-content w-full">
      <aside className="flex items-center flex-grow">
        <img
          src="./aicopyright.png"
          alt="Daisy Logo"
          width="36"
          height="36"
          className="fill-current"
        />
        <p>Copyright © 2024 - All right reserved</p>
      </aside>
      <nav className="flex gap-4 justify-end">
        {/* Twitter Icon (white) */}
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>

        {/* GitHub Icon (white) */}
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.385.6.113.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.332-1.756-1.332-1.756-1.089-.745.083-.73.083-.73 1.205.085 1.839 1.237 1.839 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23.956-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.005.404 2.293-1.552 3.295-1.23 3.295-1.23.652 1.653.242 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.29 0 .32.217.694.825.576C20.565 21.8 24 17.302 24 12 24 5.373 18.627 0 12 0z" />
          </svg>
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
