import React, { useState } from "react";
import "./navbar.css";

export default function Navbar() {

    const [menuopen,setMenuopen] = useState(false);
    const togglemenu = ()=>{
        setMenuopen(!menuopen);
        const navbody = document.querySelector('.navBody').style.left;
        if(navbody === '-250px'){
            document.querySelector('.navBody').style.left = '0px';
            document.querySelector('.navFooter').style.left = '0px';
        }
        else{
            document.querySelector('.navBody').style.left = '-250px';
            document.querySelector('.navFooter').style.left = '-250px';
        }
    }

  return (
    <div className="navbar_">
      <div className="navLogo">
        <div className="mobileMenuBtn">
          {!menuopen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="32"
              fill="silver"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={togglemenu}
            >
              <path
                fillRule="evenodd"
                d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
              />
              <path
                fillRule="evenodd"
                d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="silver"
              className="bi bi-list"
              viewBox="0 0 16 16"
              onClick={togglemenu}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          )}
        </div>
        <img src="https://avi4365.ongraphy.com/resources/images/yourlogohere.jpg"></img>
      </div>
      <div className="navBody">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading1">
              <button
                className="accordion-button noafter"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse1"
                aria-expanded="false"
                aria-controls="collapse1"
              >
                <img src="https://img.icons8.com/material-rounded/24/4240d4/airplane-take-off.png"/>
                GETTING STARTED
              </button>
            </h2>
            <div
              id="collapse1"
              className="accordion-collapse collapse"
              aria-labelledby="heading1"
              data-bs-parent="#accordionExample"
            ></div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse2"
                aria-expanded="false"
                aria-controls="collapse2"
              >
                <img src="https://img.icons8.com/material-rounded/24/4240d4/table-1.png"/>
                REPORTS
              </button>
            </h2>
            <div
              id="collapse2"
              className="accordion-collapse collapse"
              aria-labelledby="heading2"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Sales</li>
                  <li>Usage</li>
                  <li>Live Tests</li>
                  <li>Live Classes</li>
                  <li>Downloads</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse3"
                aria-expanded="false"
                aria-controls="collapse3"
              >
                <img src="https://img.icons8.com/ios/24/4240d4/align-cell-content-right.png"/>
                CONTENT
              </button>
            </h2>
            <div
              id="collapse3"
              className="accordion-collapse collapse"
              aria-labelledby="heading3"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Courses</li>
                  <li>Packages</li>
                  <li>Asset Library</li>
                  <li>Question Bank</li>
                  <li>Quiz Reviews</li>
                  <li>Assignments</li>
                  <li>Live Tests</li>
                  <li>Live Classes</li>
                  <li>Ratings & Reviews</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse4"
                aria-expanded="false"
                aria-controls="collapse4"
              >
                <img src="https://img.icons8.com/material-sharp/24/4240d4/conference-call.png"/>
                USERS
              </button>
            </h2>
            <div
              id="collapse4"
              className="accordion-collapse collapse"
              aria-labelledby="heading4"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Learners</li>
                  <li>Admins</li>
                  <li>Instructors</li>
                  <li>Affiliates</li>
                  <li>Subscribers</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse5"
                aria-expanded="false"
                aria-controls="collapse5"
              >
                <img src="https://img.icons8.com/windows/24/4240d4/chat-messages--v2.png"/>
                ENGAGEMENT
              </button>
            </h2>
            <div
              id="collapse5"
              className="accordion-collapse collapse"
              aria-labelledby="heading5"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Public Forum</li>
                  <li>Course Wise</li>
                  <li>Messenger</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading6">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse6"
                aria-expanded="false"
                aria-controls="collapse6"
              >
                <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/24/4240d4/external-brush-tools-prettycons-lineal-prettycons-1.png"/>
                DESIGN
              </button>
            </h2>
            <div
              id="collapse6"
              className="accordion-collapse collapse"
              aria-labelledby="heading6"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Website</li>
                  <li>Page Builder</li>
                  <li>Mobile Apps</li>
                  <li>Language</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading7">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse7"
                aria-expanded="false"
                aria-controls="collapse7"
              >
                <img src="https://img.icons8.com/ios-filled/24/4240d4/bullish.png"/>
                MARKETING
              </button>
            </h2>
            <div
              id="collapse7"
              className="accordion-collapse collapse"
              aria-labelledby="heading7"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Blogs</li>
                  <li>Promo Codes</li>
                  <li>Wallet & Credits</li>
                  <li>Refer & Earn</li>
                  <li>Affiliate Settings</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading8">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse8"
                aria-expanded="false"
                aria-controls="collapse8"
              >
                <img src="https://img.icons8.com/material-sharp/24/4240d4/data-in-both-directions.png"/>
                INTEGRATIONS
              </button>
            </h2>
            <div
              id="collapse8"
              className="accordion-collapse collapse"
              aria-labelledby="heading8"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>Third Party</li>
                  <li>APIs</li>
                  <li>Logs</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading9">
              <button
                className="accordion-button collapsed noafter"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse9"
                aria-expanded="false"
                aria-controls="collapse9"
              >
                <img src="https://img.icons8.com/ios/24/4240d4/settings--v1.png"/>
                SETTINGS
              </button>
            </h2>
            <div
              id="collapse9"
              className="accordion-collapse collapse"
              aria-labelledby="heading9"
              data-bs-parent="#accordionExample"
            ></div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading10">
              <button
                className="accordion-button collapsed noafter"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse10"
                aria-expanded="false"
                aria-controls="collapse10"
              >
                <img src="https://img.icons8.com/ios-filled/24/4240d4/technical-support.png"/>
                HELP CENTER
              </button>
            </h2>
            <div
              id="collapse10"
              className="accordion-collapse collapse"
              aria-labelledby="heading10"
              data-bs-parent="#accordionExample"
            ></div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="heading11">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapse11"
                aria-expanded="false"
                aria-controls="collapse11"
              >
                <img src="https://img.icons8.com/ios-glyphs/24/4240d4/user-male-circle.png"/>
                ACCOUNT
              </button>
            </h2>
            <div
              id="collapse11"
              className="accordion-collapse collapse"
              aria-labelledby="heading11"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <ul>
                  <li>My Profile</li>
                  <li>Referrals</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navFooter">
        <div className="whatsnew">What's New?</div>
        <div className="upgrade">
          <button><img src="https://img.icons8.com/ios-filled/24/c0c0c0/bullish.png"/>Upgrade</button>
          <img src="https://img.icons8.com/material-rounded/28/c0c0c0/bell--v1.png"/>
        </div>
      </div>
    </div>
  );
}
