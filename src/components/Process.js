import React from 'react';

function Process() {
  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold mb-4">design process</h2>
      <p className="mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <img src="path_to_ideation_icon" alt="Ideation" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">ideation</h3>
        </div>
        <div className="text-center">
          <img src="path_to_research_icon" alt="Research" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">research</h3>
        </div>
        <div className="text-center">
          <img src="path_to_wireframes_icon" alt="Wireframes" className="mx-auto mb-4" />
          <h3 className="text-xl font-bold">wireframes</h3>
        </div>
      </div>
    </section>
  );
}

export default Process;
