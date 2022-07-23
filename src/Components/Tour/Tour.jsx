import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Down, Down1, Down2, Head } from "./Tour.styled";
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
import { Manage } from "./Tour.styled";
import { Managehead } from "./Tour.styled";
import { ManageBlog } from "./Tour.styled";
////////////////////////////////////////////////////////////////
import { Visual } from "./Tour.styled";
import { Visualhead } from "./Tour.styled";
import { VisualBlog } from "./Tour.styled";
/////////////////////////////////////////////////////////
import { Team } from "./Tour.styled";
import { Teamhead } from "./Tour.styled";
import { TeamBlog } from "./Tour.styled";
////////////////////////////////////////////
import { Trac } from "./Tour.styled";
import { Trachead } from "./Tour.styled";
import { TracBlog } from "./Tour.styled";
///////////////////////////////////////
import { Report } from "./Tour.styled";
import { Reporthead } from "./Tour.styled";
import { ReportBlog } from "./Tour.styled";
////////////////////////////////////////
import { Send } from "./Tour.styled";
import { Sendhead } from "./Tour.styled";
import { SendBlog } from "./Tour.styled";
//////////////////////////////////////
import vidicon from "./vidicon.png";
// import {Keep} from "./Tour.styled"
import { Button } from "./Tour.styled";

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
              <a
                target="blank"
                href="https://www.youtube.com/watch?v=jSoBagh6eIs"
              >
                <img
                  src={vidicon}
                  style={{
                    height: "55px",
                    width: "55px",
                    position: "absolute",
                    marginLeft: "33%",
                    marginTop: "22%",
                  }}
                  alt=""
                />
              </a>

              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/time-tracking-timesheet-view.webp"
                alt=""
              />
            </div>
          </Timehead>
          <Blog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="logo\seemless.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Seemless integrations</h3>
                </div>
              </Logo>
              <div style={{marginTop: "20px"}}>
                <p>
                  Track time right inside the most popular apps, such as Asana,
                  Basecamp, Jira, Trello, GitHub, ClickUp and more.
                </p>
              </div>
              <div style={{ marginTop: "40px"}}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="logo\ghadi.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Timer or manual entry</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Start and stop your timer to record activities as you work. Or
                  log hours manually afterwards.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="logo\timein-timeout.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Clock-in, clock-out</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Know the time spent on projects as well as hours of work and
                  breaks.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\estimaate.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Estimates</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Set time estimates so at any time you can see the time you
                  spend and what is left.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\remender.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Reminders</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Receive notifications about long-running timers and reminders
                  to track time.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\timeoff.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Time off</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>Track paid time off, vacations, sick days and leave types</p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\autostop.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Auto-stop timer</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>Configure to auto stop timer at the end of the workday.</p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\timelog.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Time log</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  All changes and estimates made to the task time are logged and
                  available for revision.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\zeper.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Automate with Zapier</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Use Zapier for automatic data transfer between Everhour and
                  1000+ apps with no technical knowledge.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\browser.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Browser extension</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Track time right from your browser’s toolbar with a single
                  click.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\iphone.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>iPhone app</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>Record time spent on projects and tasks from your iPhone.</p>
              </div>
              <div style={{ marginTop: "40px" }}>
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
              <a
                target="blank"
                href={
                  "https://www.youtube.com/watch?v=WAnijyq-_4M&feature=emb_title"
                }
              >
                {" "}
                <img
                  src={vidicon}
                  style={{
                    height: "55px",
                    width: "55px",
                    position: "absolute",
                    marginLeft: "33%",
                    marginTop: "22%",
                  }}
                  alt=""
                />
              </a>

              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
                alt=""
              />
            </div>
          </Billhead>
          <Blog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\manage.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Manage clients</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Create clients, assign projects, watch budgets, spot
                  uninvoiced time.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\flexable.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Flexible billing</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Choose an appropriate billing method: non-billable, time and
                  materials or fixed fee.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\budgets.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Budgets</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Set up a capital or recurring budget for your projects. Don’t
                  let finances catch you by surprise.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\alert.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Alerts</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Receive an email alert when you reach a certain percentage of
                  the project budget.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\labourcost.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Labor costs</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Track what an employee or contractor costs you compared to how
                  much you charge for their work.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\nonbill.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Non-billable time</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Exclude certain tasks from the billable amount calculation.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\disallow.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Disallow overbudget</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Budget settings allow you to prohibit reporting time for
                  anyone if the budget is exceeded.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\custom.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Custom task rates</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  You can override the base rate for a project and assign a
                  specific rate to each task.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\budget.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Budget visibility</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Decide if members can see a project’s budget, which is visible
                  to admins only by default.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
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
              <a
                target="blank"
                href={
                  "https://www.youtube.com/watch?v=WI9VlE_-oIw&feature=emb_title"
                }
              >
                <img
                  src={vidicon}
                  style={{
                    height: "55px",
                    width: "55px",
                    position: "absolute",
                    marginLeft: "33%",
                    marginTop: "22%",
                  }}
                  alt=""
                />
              </a>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/projects-board-view-v3.webp"
                alt=""
              />
            </div>
          </Managehead>
          <ManageBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\managetask.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Manage tasks</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Create new tasks in seconds, set priorities, deadlines and
                  assign to the team.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\use.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Use sections and tags</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Use tags and sections to organize, and add context, to your
                  tasks.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\list.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>List or Board views</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Whether you prefer board or list views for your project tasks,
                  we have you covered.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\copy.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Copy templates</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Copy project with tasks and estimates to start new similar
                  projects in minutes.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\estimaate.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Estimates</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Set time estimates so at any time you can see the time you
                  spend and what is left.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\zip.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Archive</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Archive projects that you no longer need. We keep all time and
                  data preserved.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
          </ManageBlog>
        </Manage>
        <Visual>
          <Visualhead>
            <TimeH1>Visual projects and employee scheduling</TimeH1>
            <Tp>Map out your plans and see them with clarity</Tp>
            <div>
              <a href="https://www.youtube.com/watch?v=-8vrEFdmA40&feature=emb_title">
                <img
                  src={vidicon}
                  style={{
                    height: "55px",
                    width: "55px",
                    position: "absolute",
                    marginLeft: "33%",
                    marginTop: "22%",
                  }}
                  alt=""
                />
              </a>
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/resource-planning-members-new-v2.webp"
                alt=""
              />
            </div>
          </Visualhead>
          <VisualBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\visualize.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Visualize</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  View an interactive plan with your team’s schedule or project
                  portfolio on one page.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\plan.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Plan vs reported</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  See the progress of logged time vs. scheduled time of every
                  team member.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\resource.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Resource availability</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Know when someone with the necessary expertise will be
                  available for a new project.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\timeoff.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Absence</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Add your team’s leave or holidays to the schedule to keep
                  records and avoid conflicts.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\filter.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Filter</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Zoom in & out, search, filter and sort to quickly view
                  specific team members and assignments.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\avoid.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Avoid overbooking</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Configure weekly capacity and see who’s overbooked and who can
                  take on more.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
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
                href={"https://www.youtube.com/watch?v=Pn0-y3vfBDY&t=1s"}
                src={vidicon}
                style={{
                  height: "55px",
                  width: "55px",
                  position: "absolute",
                  marginLeft: "33%",
                  marginTop: "22%",
                }}
                alt=""
              />
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/summary-dashboard-v4.webp"
                alt=""
              />
            </div>
          </Teamhead>
          <TeamBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\summery.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Summary charts</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Quickly evaluate what is going on in your team, and how
                  everyone is performing.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\approve.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Time approval</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Be notified when someone submits timesheets for approval. Lock
                  further editing.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\lock.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Lock time editing</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Set a rule to prevent members editing time entries after a
                  certain period.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\correct.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Correct employee time</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Admins can easily edit time on behalf of their team members if
                  there was a mistake.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\timelog.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Time log</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  All changes and estimates made to the task time are logged and
                  available for revision.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\roles.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Roles and permissions</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Control the access of different users in your team to features
                  and data.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\deactive.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Deactivating users</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Deactivate any user but still see all their logged time in
                  reports.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\groups.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Team groups</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Group organization members into teams that reflect your
                  company structure.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\disallow.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Max hours limits</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Set the maximum number of hours a contractor can report. Set
                  it daily, weekly or monthly.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
          </TeamBlog>
        </Team>

        <Trac>
          <Trachead>
            <TimeH1>Tracking expenses</TimeH1>
            <Tp>
              Track work-related expenses, reimburse employees, use in budgets,
              add to invoices
            </Tp>
            <div>
              <img
                href={"https://www.youtube.com/watch?v=Pn0-y3vfBDY&t=1s"}
                src={vidicon}
                style={{
                  height: "55px",
                  width: "55px",
                  position: "absolute",
                  marginLeft: "33%",
                  marginTop: "22%",
                }}
                alt=""
              />
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/expenses.webp"
                alt=""
              />
            </div>
          </Trachead>
          <TracBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\track.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Track expenses</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Track work-related expenses such as materials, travel, and
                  others incurred on the job.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\attach.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Attach receipts</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>Upload and save a receipt when you add an expense.</p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\flexable.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Unit pricing</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Instead of entering the bare sum, switch on the unit price per
                  expense category.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
          </TracBlog>
        </Trac>

        <Report>
          <Reporthead>
            <TimeH1>Reports and dashboards</TimeH1>
            <Tp>
              Analytics to aid productivity or boost confidence with your
              clients
            </Tp>
            <div>
              <img
                href={"https://www.youtube.com/watch?v=Pn0-y3vfBDY&t=1s"}
                src={vidicon}
                style={{
                  height: "55px",
                  width: "55px",
                  position: "absolute",
                  marginLeft: "33%",
                  marginTop: "22%",
                }}
                alt=""
              />
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/reports.webp"
                alt=""
              />
            </div>
          </Reporthead>
          <ReportBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\report.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Custom reports</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Use filters, arrange columns, and add conditions to get the
                  reports you need.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\metadata.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Meta data</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Analyze tasks deeper with access to such meta information as
                  tags, task types or milestones.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\share.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Sharing</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Make any report private or share it with a group of teammates.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\dnld.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Download</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Export your data to send them to the client or to do some
                  internal math.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\ghlight.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Highlighting</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Highlight various pieces of data in individual cells of your
                  reports.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\sudule.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Schedule by email</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Schedule any report to be sent to a list of specified emails
                  on a daily, weekly, or monthly basis.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
          </ReportBlog>
        </Report>

        <Send>
          <Sendhead>
            <TimeH1>Sending invoices</TimeH1>
            <Tp>Easily create an invoice based on tracked time and expenses</Tp>
            <div>
              <img
                href={"https://www.youtube.com/watch?v=Pn0-y3vfBDY&t=1s"}
                src={vidicon}
                style={{
                  height: "55px",
                  width: "55px",
                  position: "absolute",
                  marginLeft: "33%",
                  marginTop: "22%",
                }}
                alt=""
              />
              <img
                src="https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
                alt=""
              />
            </div>
          </Sendhead>
          <SendBlog>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\create.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Create invoices</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Easily create an invoice based on tracked time and expenses.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\flexgroup.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Flexible grouping</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Use special dynamic variables, that will be replaced with a
                  real data in the invoice line items.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\language.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Change language</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  English language is used by default, but you can translate any
                  invoice label.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\copy.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Copy invoices</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Connect with QuickBooks, Xero or FreshBooks to sync your
                  clients and copy invoices.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>

            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\tracopen.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Track opens</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  We show you the exact time a client opens the invoice email
                  you sent them.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\dnld.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Download</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Make the final check of your future invoice and download a PDF
                  file.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\internal.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Internal notes</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Add internal only, not for customers access, notes on invoices
                  about cost of product or code for future invoices.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\timelog.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Log changes</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  All invoices have a log so that you can see which users have
                  changed what and when.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
            <Bld>
              <Logo>
                <Logoicon>
                  <img src="\logo\seemless.png" alt="" />
                </Logoicon>
                <div style={{ fontWeight: "bold" }}>
                  <h3>Integrations</h3>
                </div>
              </Logo>
              <div style={{ marginTop: "20px" }}>
                <p>
                  Connect with QuickBooks or Xero to sync your clients and copy
                  invoices.
                </p>
              </div>
              <div style={{ marginTop: "40px" }}>
                <hr />
              </div>
            </Bld>
          </SendBlog>
        </Send>

        <div style={{ height: "1100px" }}>
          <div
            style={{
              width: "75%",
              // border: "1px solid red",
              marginLeft: "400px",
            }}
          >
            <h1
              style={{
                fontWeight: "bold",
                fontSize: "40px",
                marginLeft: "250px",
                marginTop: "100px",
              }}
            >
              You are in a good company
            </h1>
            <p style={{ fontSize: "20px", marginLeft: "120px", color: "gray" }}>
              We could tell you about the thousands of companies worldwide that
              use our software for 
            </p>
            <p style={{ fontSize: "20px", marginLeft: "150px", color: "gray" }}>their timekeeping needs… but we thought it
              best they speak for themselves.</p>
          </div>

          <div
            style={{
              marginTop: "50px",
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              outlineColor: "#3fcc8d",
              gap: "20px",
              // border: "1px solid black",
              height: "750px",
              width: "90%",
              marginLeft: "150px",
            }}
          >
            <div
              style={{
                boxShadow: " rgb(223,246,233) 0px 0px 5px 5px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "300px",
              }}
            >
              <h3>
                “I am the owner of the company, and I use Everhour for
                timekeeping of myself and my subcontractors. All team members
                use the system - from web developers to tech support to project
                management to design.”
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Jennifer H. (Source: TrustRadius)
              </p>
            </div>
            <div
              style={{
                boxShadow: " rgb(220,241,225) 1px 1px 3px 3px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "350px",
                padingTop: "10px",
              }}
            >
              <h3 style={{ magrinTop: "20px" }}>
                “Everhour is being used by my department now, but it’s planned
                to be used across the whole company. We were having problems
                tracking the times of every project and Everhour ended up being
                the best solution to the issue. We’re tracking our tasks
                involved in every project, in every level (software development,
                meetings, project management, etc.)”
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Maria Lucia S. (Source: TrustRadius)
              </p>
            </div>
            <div
              style={{
                boxShadow: " rgb(220,241,225)1px 1px 3px 3px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "300px",
              }}
            >
              <h3>
                “Everhour helps me manage/plan my weekly activities a lot more
                effectively, since I know how much time I have to work on things
                each day, and can quickly update estimated times to reallocate
                tasks as needed.”
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Dan S. (Source: Capterra)
              </p>
            </div>
            <div
              style={{
                boxShadow: " rgb(220,241,225) 1px 1px 3px 3px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "300px",
              }}
            >
              <h3>
                “We are using Everhour as a core business software, because our
                business is to sell our time. When you use such software, what
                you care about the most is speed, flexibility, ability to
                integrate with all major project management software. And
                Everhour is exactly that kind of software”
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Ivan M. (Source: G2Crowd)
              </p>
            </div>
            <div
              style={{
                boxShadow: " rgb(220,241,225)1px 1px 3px 3px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "300px",
              }}
            >
              <h3>
                “The most important gain from using Everhour is that we can
                track our tasks in real-time without having to leave the
                browser. The Chrome add-on helps us initiate the time for a
                specific task. If we are already on Asana, a simple click does
                the job.”
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Dimitris R. (Source: Capterra)
              </p>
            </div>
            <div
              style={{
                boxShadow:"rgb(253,245,225) 5px 5px 0px 0px,rgba(0, 0, 0, 0.35) 0px 5px 15px",
                width: "400px",
                lineHeight: "30px",
                height: "280px",
              }}
            >
              <h3>
                “Everhour’s integration with Asana is wonderful for a remote
                team. We track all activities in Asana, but before Everhour I
                often wondered how long it was taking to do a task, now I know
                exactly. I can see who is working right now and a summary each
                day”.
              </h3>
              <p
                style={{ marginTop: "50px", marginLeft: "50px", color: "gray" }}
              >
                — Doug H. (Source: G2Crowd)
              </p>
            </div>
          </div>

          {/* <Keep
            // style={{
            //   justifyContent: "center",
            //   border: "1px solid black",
            //   width: "130px",
            //   height: "40px",
            //   marginLeft: "700px",
            //   borderColor: "green",
            //   borderRadius: "5px",
              
            // }}
          >
            <Button
              // style={{
              //   textAlign: "centre",
              //   marginTop: "5px",
              //   paddingLeft: "18px",
              //   color: "green",
              // }}
            >
              Keep Reading
            </Button> */}
          {/* </Keep> */}
          <Button>
            <button>Keep Reading</button>
          </Button>
        </div>

        <Down>
          <Down1>
            <div style={{ marginTop: "70px" }}>
              <h1 style={{ fontWeight: "bold", fontSize: "40px",color:"#333333" }}>
                Take the pulse of your business
              </h1>
            </div>
            <P1>
              <p style={{fontSize:"25px"}}>Try Everhour for free and see if it works for your business</p>
            </P1>
            <Inp>
              <I>
                <input type="text" placeholder="Work email..." />
              </I>
              <Bt>
                <button>Try Free</button>
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
          </Down1>
          <Down2>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
                marginTop: "80px",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Track time from the apps you already use</p>
            </div>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Know where your team’s time is going</p>
            </div>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Keep projects on budget</p>
            </div>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Increase transparency</p>
            </div>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Make your workflow more efficient</p>
            </div>
            <div
              style={{
                marginLeft: "70px",
                lineHeight: "30px",
                display: "flex",
              }}
            >
              <li style={{ color: "rgb(87,187,113)", fontSize: "30px" }}></li>
              <p>Spot burnout before it happens</p>
            </div>
          </Down2>
        </Down>
      </C>
    </>
  );
};

export default Tour;
