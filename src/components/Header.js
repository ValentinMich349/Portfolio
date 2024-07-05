import React from 'react';

function Header() {
  return (
    <header className="py-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">sibabale.dev</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">design</a></li>
            <li><a href="#" className="hover:underline">development</a></li>
            <li><a href="#" className="hover:underline">blog</a></li>
            <li><a href="#" className="hover:underline">cv</a></li>
            <li><a href="#" className="hover:underline"><i className="fab fa-github"></i></a></li>
          </ul>
        </nav>
      </div>
      <div className="container mx-auto px-4 text-center mt-10">
        <h2 className="text-4xl">hi</h2>
        <p className="text-xl mt-2">my name is <span className="font-bold">sibabale</span></p>
        <p className="text-xl mt-2"><span className="line-through">a designer</span> &lt;developer/&gt;</p>
      </div>
    </header>
  );
}

export default Header;
