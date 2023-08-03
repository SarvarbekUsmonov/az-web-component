import { css } from 'lit';
export const buttonStyles = css `

   *, .medium {
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: .04em;
    white-space: normal;
    border-width: 2px;
    display: inline-block;
    
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0 !important;
    padding: 0.375rem 0.75rem;
    font-family: inherit;
    border-radius: 0;
  }
  .large {
    padding: 0;
    font-size: 1.25rem;
    line-height: 1.5;
  }  

  .medium {
    padding: 0 !important;
  }

  .small {
    padding: 0;
    font-size: 0.875rem;
    line-height: 1.5;
  }


  .btn-red, .btn-outline-red:hover {
    background-color: #8b0015;
    color: white;
  }
  .btn-red:hover {
    background-color: #ab0520;
    color: white;
  }


  .btn-blue, .btn-outline-blue:hover {
    background-color: #0c234b;
    color: white;
  }
  .btn-blue:hover {
    background-color: #1e5288;
    color: white;
  }


  .btn-success, .btn-outline-success:hover {
    background-color: #70b865;
    color: #001c48;
  }
  .btn-success:hover {
    background-color: #5aa94e;
    color: #001c48;
  }


  .btn-danger, .btn-outline-danger:hover {
    background-color: #a95c42;
    color: white;
  }
  .btn-danger:hover {
    background-color: #8d4d37;
    color: #fff;
  }


  .btn-warning, .btn-outline-warning:hover {
    background-color: #f19e1f;
    color: #000;
  }
  .btn-warning:hover {
    background-color: #dc8a0e;
    color: #000;
  }


  .btn-info, .btn-outline-info:hover {
    background-color: #81d3eb;
    color: #001c48;
  }
  .btn-info:hover {
    background-color: #60c7e6;
  }


  .btn-light, .btn-outline-light:hover {
    background-color: #dee2e6;
    color: #001c48;
  }
  .btn-light:hover {
    background-color: #c8cfd6;
  }


  .btn-dark, .btn-outline-dark:hover {
    background-color: #343a40;
    color: #fff;
  }
  .btn-dark:hover {
    background-color: #23272b;
  }

  

  .btn-outline-red {
    background-color: transparent;
    color: #8b0015;
    border: 2px solid #8b0015;
  }
  .btn-outline-blue {
    background-color: transparent;
    color: #0c234b;
    border: 2px solid #0c234b;
  }
  .btn-outline-success {
    background-color: transparent;
    color: #70b865;
    border: 2px solid #70b865;
  }
  .btn-outline-danger {
    background-color: transparent;
    color: #a95c42;
    border: 2px solid #a95c42;
  }
  .btn-outline-warning {
    background-color: transparent;
    color: #403635;
    border: 2px solid #f19e1f;
  }
  .btn-outline-info {
    background-color: transparent;
    color: #1e5288;
    border: 2px solid #81d3eb;
  }
  .btn-outline-light {
    background-color: transparent;
    color: #403635;
    border: 2px solid #dee2e6;
  }
  .btn-outline-dark {
    background-color: transparent;
    color: #343a40;
    border: 2px solid #343a40;
  }
`;
