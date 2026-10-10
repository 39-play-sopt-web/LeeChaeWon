import { useState } from "react";
import Card from './components/Card';
import Header from './components/Header';
import Search from './components/Search';

import { members } from "./member";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  console.log(search);

  const filterMembers = members.filter((member) =>
    member.name.includes(search),
  );

  return (
    <>
      <Header />
        <Search search={search} onSearchChange={handleSearch} />
        <section style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
          {filterMembers.map((member) => (
            <Card key={member.id} name={member.name} github={member.github} englishName={member.englishName}/>
          ))}
        </section>
    </>
  );
}

export default App;