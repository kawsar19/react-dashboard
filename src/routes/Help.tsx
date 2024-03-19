import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export default function Help() {
  return (
    <>
      <Sidebar />
      <div className=" sm:ml-56">
        <Header />
        <>
          <h1>Help Page</h1>
        </>
      </div>
    </>
  );
}
