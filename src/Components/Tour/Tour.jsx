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
import {Manage } from "./Tour.styled";
import {Managehead } from "./Tour.styled";
import {ManageBlog } from "./Tour.styled";
////////////////////////////////////////////////////////////////
import {Visual} from "./Tour.styled";
import {Visualhead } from "./Tour.styled";
import {VisualBlog } from "./Tour.styled";
/////////////////////////////////////////////////////////
import {Team} from "./Tour.styled";
import {Teamhead } from "./Tour.styled";
import {TeamBlog } from "./Tour.styled";








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
        <Manage>
        <Managehead>
            <TimeH1>Managing tasks</TimeH1>
            <Tp>
            Project management and time tracking with our all-in-one solution
            </Tp>
            <div>
              <img className="img-responsive"
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/projects-board-view-v3.webp"
                alt=""
              />
            </div>
          </Managehead>
          <ManageBlog>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Manage tasks</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Create new tasks in seconds, set priorities, deadlines and assign to the team.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Use sections and tags</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Use tags and sections to organize, and add context, to your tasks.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>List or Board views</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Whether you prefer board or list views for your project tasks, we have you covered.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Copy templates</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Copy project with tasks and estimates to start new similar projects in minutes.
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
                <div style={{fontWeight:"bold"}}><h3>Archive</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Archive projects that you no longer need. We keep all time and data preserved.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          </ManageBlog>
        </Manage>
        <Visual>
        <Visualhead>
            <TimeH1>Visual projects and employee scheduling</TimeH1>
            <Tp>
            Map out your plans and see them with clarity
            </Tp>
            <div>
              <img className="img-responsive"
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"
                alt=""
              />
            </div>
          </Visualhead>
          <VisualBlog>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Visualize</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                View an interactive plan with your team’s schedule or project portfolio on one page.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Plan vs reported</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                See the progress of logged time vs. scheduled time of every team member.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Resource availability</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Know when someone with the necessary expertise will be available for a new project.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Absence</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Add your team’s leave or holidays to the schedule to keep records and avoid conflicts.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Filter</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Zoom in & out, search, filter and sort to quickly view specific team members and assignments.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Avoid overbooking</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Configure weekly capacity and see who’s overbooked and who can take on more.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          </VisualBlog>
          </Visual>
          <Team>
          <Teamhead>
            <TimeH1>Team management</TimeH1>
            <Tp>
            Your team's working hours, now more organized and easy to read
            </Tp>
            <div>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/summary-dashboard-v4.webp"
                alt=""
              />
            </div>
          </Teamhead>
          <TeamBlog>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Summary charts</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Quickly evaluate what is going on in your team, and how everyone is performing.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Time approval</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Be notified when someone submits timesheets for approval. Lock further editing.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Lock time editing</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Set a rule to prevent members editing time entries after a certain period.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Correct employee time</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Admins can easily edit time on behalf of their team members if there was a mistake.
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
                <div style={{fontWeight:"bold"}}><h3>
Roles and permissions</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Control the access of different users in your team to features and data.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="public\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>
Deactivating users</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Deactivate any user but still see all their logged time in reports.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Team groups</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Group organization members into teams that reflect your company structure.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          <Bld>
              <Logo>
                <Logoicon><img src="\logo\seemless.png" alt=""/></Logoicon>
                <div style={{fontWeight:"bold"}}><h3>Max hours limits</h3></div> 
              </Logo>
              <div style={{marginTop:"20px"}}>
                <p>
                Set the maximum number of hours a contractor can report. Set it daily, weekly or monthly.
                </p>
              </div>
              <div style={{marginTop:"40px"}}>
                <hr />
              </div>
            </Bld>
          </TeamBlog>
          </Team>
      </C>
    </>
  );
};

export default Tour;
