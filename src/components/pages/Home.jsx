import { useState } from "react";
const Home = () => {
  const [mahasiswa, setMahasiswa] = useState({
    nama: "Agus setiawan",
    alamat: "Batam",
    prodi: "Teknik Mesin",
    fakultas: "Teknik Industri",
  });
  const [num, setNum] = useState(0);
  const data = [
    {
      nama: "Bagas ",
      alamat: "Jakarta",
      prodi: "Teknik Sipil",
      fakultas: "Teknik Industri",
    },
    {
      nama: "Dodi pratowo",
      alamat: "Jambi ",
      prodi: "Teknik Komputer",
      fakultas: "Teknologi Informatika",
    },
    {
      nama: "Zainal abidin",
      alamat: "Surabaya",
      prodi: "Teknik Mesin",
      fakultas: "Teknik Industri",
    },
  ];
  function handlePrev() {
    if (num > 0) setNum(num - 1);
    setMahasiswa(data[num]);
    console.log(num);
  }
  function handleNext() {
    if (num != data.length - 1) setNum(num + 1);
    setMahasiswa(data[num]);
    console.log(num);
  }
  return (
    <>
      <h1 className="text-xl mt-4 font-semibold pr-2">
        Saya adalah {mahasiswa.nama}, tinggal di {mahasiswa.alamat}.<br></br>{" "}
        Jurusan {mahasiswa.prodi} dari fakultas {mahasiswa.fakultas}.
      </h1>
      <hr />
      <button
        className="rounded-xl m-3 p-4 bg-slate-500 text-white font-bold"
        onClick={() => handlePrev()}
      >
        Prev
      </button>
      <button
        className="rounded-xl m-3 p-4 bg-blue-300 text-white font-bold"
        onClick={() => handleNext()}
      >
        Next
      </button>
    </>
  );
};

export default Home;
