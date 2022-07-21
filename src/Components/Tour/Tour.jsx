import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Head } from "./Tour.styled";
import { Head1 } from "./Tour.styled";
import { Head2 } from "./Tour.styled";
import { H1 } from "./Tour.styled";
import { P1 } from "./Tour.styled";
import { Inp } from "./Tour.styled";
import { I } from "./Tour.styled";
import { Bt } from "./Tour.styled";
import { G } from "./Tour.styled";
import { Icon } from "./Tour.styled";
import { C } from "./Tour.styled";
////////
import { Time } from "./Tour.styled";
import { Timehead } from "./Tour.styled";
import { TimeH1 } from "./Tour.styled";
import { Tp } from "./Tour.styled";
import { Blog } from "./Tour.styled";
import { Bld } from "./Tour.styled";
/////////
import { Bill } from "./Tour.styled";
import { Billhead } from "./Tour.styled";
import { Logo } from "./Tour.styled";
import { Logoicon } from "./Tour.styled";
/////////////////////////////////////////
// import {Manage } from "./Tour.styled";








const Tour = () => {
  return (
    <>
      <C>
        <Head>
          <Head1>
            <H1>
              <p>Everything you need</p>
              <p>for workforce</p>
              <p>management</p>
            </H1>
            <P1>
              <p>Everhour will make you daily job way easier</p>
              <p>and more orgazined</p>
            </P1>
            <Inp>
              <I>
                <input type="text" placeholder="Work email..." />
              </I>
              <Bt>
                <button>Get Started</button>
              </Bt>
            </Inp>
            <G>
              {/* <i>FcGoogle</i> */}
              <Icon>
                <FcGoogle />
              </Icon>

              <div>
                {" "}
                <a href="https://www.google.com/">
                  Or sign up with Google Account
                </a>
              </div>
            </G>
          </Head1>
          <Head2>
            <img
              src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/primary-illustrations/all-features-3.webp"
              alt=""
            />
          </Head2>
        </Head>
        <Time>
          <Timehead>
            <TimeH1>Time management</TimeH1>
            <Tp>
              Track time spent on projects, hours of work, vacations or sick
              days
            </Tp>
            <div>
              <img className="img-responsive"
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/time-tracking-timesheet-view.webp"
                alt=""
              />
            </div>
          </Timehead>
          <Blog>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Seemless integrations</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Track time right inside the most popular apps, such as Asana, Basecamp, Jira, Trello, GitHub, ClickUp and more.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
              </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Timer or manual entry</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Start and stop your timer to record activities as you work. Or log hours manually afterwards.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
              </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Clock-in, clock-out</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Know the time spent on projects as well as hours of work and breaks.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Estimates</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Set time estimates so at any time you can see the time you spend and what is left.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Reminders</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Receive notifications about long-running timers and reminders to track time.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Time off</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Track paid time off, vacations, sick days and leave types
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Auto-stop timer</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Configure to auto stop timer at the end of the workday.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Time log</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                All changes and estimates made to the task time are logged and available for revision.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Automate with Zapier</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Use Zapier for automatic data transfer between Everhour and 1000+ apps with no technical knowledge.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Browser extension</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Track time right from your browser’s toolbar with a single click.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>iPhone app</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Record time spent on projects and tasks from your iPhone.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          </Blog>
        </Time>
        <Bill>
          <Billhead>
            <TimeH1>Billing and budgeting</TimeH1>
            <Tp>
              Avoid debt and boost revenue with precise project billing and
              budgeting
            </Tp>
            <div>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
                alt=""
              />
            </div>
          </Billhead>
          <Blog>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Manage clients</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Create clients, assign projects, watch budgets, spot uninvoiced time.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Flexible billing</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Choose an appropriate billing method: non-billable, time and materials or fixed fee.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Budgets</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Set up a capital or recurring budget for your projects. Don’t let finances catch you by surprise.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Alerts</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Receive an email alert when you reach a certain percentage of the project budget.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Labor costs</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Track what an employee or contractor costs you compared to how much you charge for their work.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Non-billable time</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Exclude certain tasks from the billable amount calculation.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Disallow overbudget</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Budget settings allow you to prohibit reporting time for anyone if the budget is exceeded.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Custom task rates</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                You can override the base rate for a project and assign a specific rate to each task.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Budget visibility</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Decide if members can see a project’s budget, which is visible to admins only by default.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          </Blog>
          
        </Bill>
      </C>
    </>
  );
};

export default Tour;
