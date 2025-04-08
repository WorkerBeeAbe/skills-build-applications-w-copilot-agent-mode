import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const baseUrl = 'https://solid-space-couscous-v4xrw4qjj6j3ppw-8000.app.github.dev';
    fetch(`${baseUrl}/api/teams/`)
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div>
      <h1 className="text-info">Teams</h1>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Team Name</th>
            <th>Members</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{team.name}</td>
              <td>{team.members.map(member => member.username).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;
