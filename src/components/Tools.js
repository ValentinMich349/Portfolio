import React from 'react';

function Tools() {
  return (
    <section className="my-20">
      <h2 className="text-2xl font-bold mb-4">development tools</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <img src="path_to_react_icon" alt="React" className="mx-auto mb-4" />
          <p>reactjs & react native</p>
        </div>
        <div className="text-center">
          <img src="path_to_vue_icon" alt="Vue" className="mx-auto mb-4" />
          <p>vuejs</p>
        </div>
        <div className="text-center">
          <img src="path_to_tailwind_icon" alt="Tailwind" className="mx-auto mb-4" />
          <p>tailwind</p>
        </div>
        <div className="text-center">
          <img src="path_to_bootstrap_icon" alt="Bootstrap" className="mx-auto mb-4" />
          <p>bootstrap</p>
        </div>
        <div className="text-center">
          <img src="path_to_laravel_icon" alt="Laravel" className="mx-auto mb-4" />
          <p>laravel</p>
        </div>
        <div className="text-center">
          <img src="path_to_nodejs_icon" alt="Node.js" className="mx-auto mb-4" />
          <p>nodejs</p>
        </div>
        <div className="text-center">
          <img src="path_to_graphql_icon" alt="GraphQL" className="mx-auto mb-4" />
          <p>graphql</p>
        </div>
        <div className="text-center">
          <img src="path_to_aws_icon" alt="AWS" className="mx-auto mb-4" />
          <p>aws s3</p>
        </div>
      </div>
    </section>
  );
}

export default Tools;
