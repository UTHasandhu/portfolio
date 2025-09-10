import React from 'react';
import ActionCard from './ActionCard';
import cardData from '../../tempData/profileData';
// Importing media assets
import UTSeal from '../../Media/UTSeal.png';
import Tools from  '../../Media/Tools.png';
import mediaPic from '../../Media/Dev.png';

export default function HeroCard() {
  return (
    <section className="bg-light py-3">
      <div className="container">
        <div className="row align-items-center justify-content-center g-5">
          {/* Profile Card */}
          <div className="col-md-4 text-center">
            <ActionCard {...cardData[0]} />
          </div>

          {/* Main Content */}
          <div className="col-md-8">
            <h1 className="display-3 fw-bold">Hi, I'm Harman Sandhu</h1>
            <p className="text-muted fs-6 mb-3">
              Full Stack Software Engineer | UT Austin Alumni
            </p>

            <p className="fs-5 mb-4">
              I'm a software engineer with professional experience in .NET/C#, React, and SQL. As a recent UT Austin grad, I love solving real-world engineering problems with Software Solutions. I have 
              developed and deployed full-stack web applications and have experience developing mobile apps, training maching learning models, deploying to the cloud, and more!
            </p>

            {/* Highlights Grid */}
            <div className="row text-muted fs-6 mb-4 text-center">
              <div className="col-sm-4 mb-4">
                <img src={UTSeal} alt="Seal of The University of Texas at Austin" style={{ width: '60px', height: 'auto' }} className="mb-2" />
                <div>
                  <strong>Education</strong><br />
                  B.S. Computer Science, UT Austin
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <img src={mediaPic} alt="Developer Icon" style={{ width: '60px', height: 'auto' }} className="mb-2" />
                <div>
                  <strong>Experience</strong><br />
                  1 Year Full-Stack Development
                </div>
              </div>
              <div className="col-sm-4 mb-4">
                <img src={Tools} alt="Tools Icon" style={{ width: '60px', height: 'auto' }} className="mb-2" />
                <div>
                  <strong>Tools I Use</strong><br />
                  .NET · React · MySQL · AWS
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}
