import type { ComponentType } from "react";
import type { PortfolioProject } from "../../data/portfolio";

function TerminalPreview() {
  return (
    <>
      <div className="terminal-top">
        <i />
        <i />
        <i />
        <span>event-master.ts</span>
      </div>
      <div className="terminal-code">
        <span>
          <b>01</b> <em>const</em> event = <i>new</i> Event();
        </span>
        <span>
          <b>02</b> event.<strong>schedule</strong>(&quot;community&quot;);
        </span>
        <span>
          <b>03</b> <em>await</em> bot.<strong>notify</strong>(members);
        </span>
        <span>
          <b>04</b> <small>// ready for the next one</small>
        </span>
      </div>
      <div className="terminal-pulse" />
    </>
  );
}

function WordlyPreview() {
  return (
    <div className="wordle-board">
      <div className="wordle-row">
        {["W", "O", "R", "D", "Y"].map((letter, index) => (
          <i key={index}>{letter}</i>
        ))}
      </div>
      <div className="wordle-row">
        <i className="hit">P</i>
        <i className="near">L</i>
        <i className="miss">A</i>
        <i className="hit">Y</i>
        <i className="miss">S</i>
      </div>
      <div className="wordle-row">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}

function TimerPreview() {
  return (
    <div className="timer-ui">
      <div className="timer-ring">
        <span>
          25<small>:00</small>
        </span>
        <i />
      </div>
      <div className="timer-lines">
        <b>FOCUS SESSION</b>
        <i />
        <i />
        <span>01 / 04 TASKS</span>
      </div>
    </div>
  );
}

function CoursePreview() {
  return (
    <div className="course-ui">
      <div className="course-ui-nav">
        <b>
          learn<span>.</span>
        </b>
        <i>Explore&nbsp;&nbsp; My study</i>
        <em>↗</em>
      </div>
      <div className="course-ui-title">
        <small>LEARN SOMETHING NEW</small>
        <b>
          Find your
          <br />
          next skill.
        </b>
      </div>
      <div className="course-ui-categories">
        <span>All</span>
        <span>Design</span>
        <span>Development</span>
        <span>Business</span>
      </div>
      <div className="course-ui-cards">
        <i>
          <b>01</b>
          <small>DESIGN</small>
          <strong>
            Visual
            <br />
            thinking
          </strong>
        </i>
        <i>
          <b>02</b>
          <small>CODE</small>
          <strong>
            Web
            <br />
            foundations
          </strong>
        </i>
        <i>
          <b>03</b>
          <small>DATA</small>
          <strong>
            Data
            <br />
            stories
          </strong>
        </i>
      </div>
    </div>
  );
}

function LibraryPreview() {
  return (
    <div className="library-ui">
      <div className="library-ui-top">
        <b>BOOKS / CATALOG</b>
        <span>⌕ &nbsp; SEARCH THE LIBRARY</span>
      </div>
      <div className="library-ui-body">
        <div className="library-ui-heading">
          <small>READ · DISCOVER · SAVE</small>
          <strong>
            Find your
            <br />
            next story.
          </strong>
          <i>ALL GENRES &nbsp; / &nbsp; BOOKS</i>
        </div>
        <div className="library-books">
          <i>
            <small>FICTION</small>
            <b>01</b>
            <strong>
              Quiet
              <br />
              worlds
            </strong>
          </i>
          <i>
            <small>CLASSIC</small>
            <b>02</b>
            <strong>
              Long
              <br />
              journey
            </strong>
          </i>
          <i>
            <small>ESSAY</small>
            <b>03</b>
            <strong>
              Ways
              <br />
              of seeing
            </strong>
          </i>
        </div>
      </div>
    </div>
  );
}

const previews: Record<PortfolioProject["visual"], ComponentType> = {
  "project-terminal": TerminalPreview,
  "project-wordly": WordlyPreview,
  "project-timer": TimerPreview,
  "project-course": CoursePreview,
  "project-library": LibraryPreview,
};

export default function ProjectPreviews({
  visual,
}: {
  visual: PortfolioProject["visual"];
}) {
  const Preview = previews[visual];
  return (
    <div className="project-visual" aria-hidden="true">
      <Preview />
    </div>
  );
}
