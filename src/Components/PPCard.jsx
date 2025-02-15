import React from 'react';

export default function PPCard(props) {
  return (
    <div className="container py-4">
      <div className="alert alert-success py-4" role="alert">
        <h4 className="alert-heading"> {props.title}</h4>
        <p>
        {props.heading}
        </p>
        <hr class="mx-auto w-50" />

      </div>
    </div>
  );
}
