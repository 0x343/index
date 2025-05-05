const styleTag = document.createElement("style");
styleTag.innerHTML = `
    body.light {
      background-color: #fff;
      color: #222;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    body.light .container {
      background-color: #FBFAFF;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    body.light h1, body.light h2, body.light h3, body.light h4 {
      color: #222;
    }
    body.light h2 {
      border-bottom: 1px solid #999;
    }

    body.dark {
      background-color: #1a1a1a;
      color: #e0e0e0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      line-height: 1.6;
    }
    body.dark .container {
      background-color: #2a2a2a;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    }
    body.dark h1, body.dark h2, body.dark h3, body.dark h4 {
      color: #e0e0e0;
    }
    body.dark h2 {
      border-bottom: 1px solid #555;
    }

    .container {
      max-width: 1000px;
      margin: 50px auto;
      padding: 40px;
      border-radius: 10px;
    }
    h1, h2, h3, h4 {
      text-align: center;
      font-family: 'Ubuntu', sans-serif;
    }
    h2 {
      margin-top: 40px;
      padding-bottom: 5px;
    }
    p {
      margin-bottom: 16px;
    }
    ul {
      margin-left: 20px;
    }

    .toggle-container {
      position: fixed;
      top: 10px;
      right: 10px;
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 1000;
    }
    .switch {
      position: relative;
      display: inline-block;
      width: 50px;
      height: 28px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 28px;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }
    input:checked + .slider {
      background-color: #2196F3;
    }
    input:checked + .slider:before {
      transform: translateX(22px);
    }
    .theme-icon {
      width: 20px;
      height: 20px;
    }

    @media (max-width: 600px) {
      .toggle-container {
        top: 8px;
        right: 8px;
      }
      .switch {
        width: 40px;
        height: 24px;
      }
      .slider:before {
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
      }
      input:checked + .slider:before {
        transform: translateX(16px);
      }
      .theme-icon {
        width: 16px;
        height: 16px;
      }
    }
`;
document.head.appendChild(styleTag);
