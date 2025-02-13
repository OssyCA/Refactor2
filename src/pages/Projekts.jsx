import { useEffect, useState } from "react";
import ClockLoader from "react-spinners/ClockLoader";

const Projekts = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch the list of projects from the GitHub API when the component mounts
  useEffect(() => {
    fetch("https://api.github.com/users/OssyCA/repos")
      .then((response) => response.json()) // Parse the JSON from the response
      .then((data) => {
        setTimeout(() => {
          console.log(data); // Log the fetched data to the console
          const filteredData = data.filter((repo) => repo.language == "C#"); // Filter the data to only include C# projects
          console.log(filteredData); // Log the filtered data to the console

          setProjects(data); // Update the state with the fetched projects
          setLoading(false); // Set loading to false
        }, 3000);
      })
      .catch((error) => {
        console.error(error); // Log any errors to the console
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts
  if (loading) {
    return (
      <main>
        <section>
          <h1>Mina projekt!</h1>
          <ClockLoader color="#f00" size={150} loading={loading} />{" "}
          {/* Loading spinner */}
        </section>
      </main>
    );
  }
  return (
    <>
      <main>
        <section>
          <h1>Mina projekt!</h1>
          <div className="project-section">
            {projects.map((p) => {
              return (
                <article className="card" key={p.id}>
                  {/* Card header with a placeholder image */}
                  <div className="card-head">
                    <img src="https://picsum.photos/200/300" alt="" />
                  </div>
                  {/* Card body with project details */}
                  <div className="card-body">
                    <h3>{p.name}</h3> {/* Project name */}
                    <p>{p.description}</p> {/* Project description */}
                    <p>{p.language}</p> {/* Project language */}
                    <a href={p.html_url}>Länk till projektet</a>{" "}
                    {/* Link to the project */}
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default Projekts;
