import { css } from 'lit';

export const buttonStyles = css`
  * {
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: .04em;
    white-space: normal;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    background-color: transparent;
    border-color: transparent;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 0;
    border-radius: 0;
    font-family: proxima-nova,calibri,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    line-height: 1.5;
  }

  .makeitred{
    color: red;
  }
  .default {
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
  }

  .large {
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
  }  

  .medium {
    padding: .375rem .75rem;
    font-size: 1rem;
  }

  .small {
    padding: .25rem .5rem;
    font-size: .875rem;
  }

  .btn-red, .btn-outline-red:hover {
    background-color: #8b0015;
    color: white;
  }
  .btn-red:hover, .btn-red-hover {
    background-color: #ab0520;
    color: white;
  }


  .btn-blue, .btn-outline-blue:hover {
    background-color: #0c234b;
    color: white;
  }
  .btn-blue:hover, .btn-blue-hover {
    background-color: #1e5288;
    color: white;
  }


  .btn-success, .btn-outline-success:hover {
    background-color: #70b865;
    color: #001c48;
  }
  .btn-success:hover, .btn-success-hover {
    background-color: #5aa94e;
    color: #001c48;
  }


  .btn-danger, .btn-outline-danger:hover {
    background-color: #a95c42;
    color: white;
  }
  .btn-danger:hover, .btn-danger-hover {
    background-color: #8d4d37;
    color: #fff;
  }


  .btn-warning, .btn-outline-warning:hover {
    background-color: #f19e1f;
    color: #000;
  }
  .btn-warning:hover, .btn-warning-hover {
    background-color: #dc8a0e;
    color: #000;
  }


  .btn-info, .btn-outline-info:hover {
    background-color: #81d3eb;
    color: #001c48;
  }
  .btn-info:hover, .btn-info-hover {
    background-color: #60c7e6;
  }


  .btn-light, .btn-outline-light:hover {
    background-color: #dee2e6;
    color: #001c48;
  }
  .btn-light:hover, .btn-light-hover {
    background-color: #c8cfd6;
  }


  .btn-dark, .btn-outline-dark:hover {
    background-color: #343a40;
    color: #fff;
  }
  .btn-dark:hover, .btn-dark-hover {
    background-color: #23272b;
  }

  .btn-white, .btn-outline-white:hover {
    background-color: #fff;
    color: #343a40;
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
  .btn-outline-white {
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
  }

  .btn-block {
    width: 100% !important;
    display: block !important;
    margin: 0.5rem;
  }

  .btn-arrow-arrow:after {
    content: " »";
  }
`;

